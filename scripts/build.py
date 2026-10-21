#!/usr/bin/env python3
"""Build the crawler-readable copy of the site from the content in app.js.

app.js stays the single source of content. This script reads its data
(DATA, COPY, SKILL_GROUPS, CERTS, PROFILE_LINKS) and writes:

  - a static HTML copy of every section into index.html, between the
    <!-- static:start --> and <!-- static:end --> markers. Search engines
    and AI crawlers that don't run JavaScript read this; for visitors the
    .js class (set in theme-init.js) hides it.
  - llms.txt, a plain-text summary for AI tools.

Run after editing content in app.js:  python3 scripts/build.py
"""
import html
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SITE = 'https://janyris.com/'
NAME = 'Janyris Cotto'
EMAIL = 'hello@janyris.com'
LABELS = {'github': 'GitHub', 'linkedin': 'LinkedIn', 'credly': 'Credly'}


# ---------------------------------------------------------------
# Minimal parser for the JS object literals in app.js
# (single-quoted strings, unquoted keys, arrays, comments)
# ---------------------------------------------------------------

class Parser:
    def __init__(self, src, pos):
        self.s, self.i = src, pos

    def skip(self):
        while True:
            m = re.compile(r'\s+|//[^\n]*|/\*.*?\*/', re.S).match(self.s, self.i)
            if not m or m.end() == self.i:
                return
            self.i = m.end()

    def value(self):
        self.skip()
        c = self.s[self.i]
        if c == '{':
            return self.obj()
        if c == '[':
            return self.arr()
        if c == "'":
            return self.string()
        raise SyntaxError('unexpected %r at %d' % (c, self.i))

    def string(self):
        self.i += 1
        out = []
        while self.s[self.i] != "'":
            if self.s[self.i] == '\\':
                self.i += 1
            out.append(self.s[self.i])
            self.i += 1
        self.i += 1
        return ''.join(out)

    def arr(self):
        self.i += 1
        items = []
        while True:
            self.skip()
            if self.s[self.i] == ']':
                self.i += 1
                return items
            items.append(self.value())
            self.skip()
            if self.s[self.i] == ',':
                self.i += 1

    def obj(self):
        self.i += 1
        out = {}
        while True:
            self.skip()
            if self.s[self.i] == '}':
                self.i += 1
                return out
            key = re.compile(r'\w+').match(self.s, self.i).group()
            self.i += len(key)
            self.skip()
            assert self.s[self.i] == ':'
            self.i += 1
            out[key] = self.value()
            self.skip()
            if self.s[self.i] == ',':
                self.i += 1


def read_var(src, name):
    m = re.search(r'var %s = ' % name, src)
    if not m:
        raise SystemExit('app.js: var %s not found' % name)
    return Parser(src, m.end()).value()


# ---------------------------------------------------------------
# Output
# ---------------------------------------------------------------

def series(items):
    return ', '.join(items[:-1]) + ', and ' + items[-1]


def esc(s):
    return html.escape(s, quote=True)


def strip_tags(s):
    return html.unescape(re.sub(r'<[^>]+>', '', s))


def build_html(c):
    out = ['<section class="static-content" aria-label="Site content">']
    out.append('<h2>About %s</h2>' % NAME)
    out.append('<p>%s Background in %s.</p>' % (esc(c['copy']['about']), esc(series(c['copy']['background']))))
    out.append('<h3>Certifications</h3>')
    out.append('<ul>%s</ul>' % ''.join(
        '<li><a href="%s">%s</a></li>' % (esc(x['href']), esc(x['name'])) for x in c['certs']))
    out.append('<h3>Skills</h3>')
    out.append('<ul>%s</ul>' % ''.join(
        '<li>%s: %s</li>' % (esc(g['name']), esc(', '.join(g['skills']))) for g in c['skills']))

    def items(heading, lead, rows):
        out.append('<h2>%s</h2>' % heading)
        if lead:
            out.append('<p>%s</p>' % esc(lead))
        for x in rows:
            out.append('<article><h3><a href="%s">%s</a></h3><p>%s</p><p>Tools and topics: %s</p></article>' % (
                esc(x['link']), esc(x['title']), esc(x['desc']), esc(', '.join(x['tags']))))

    items('Cybersecurity projects', '', c['data']['projects'])
    items('AI in my work', c['copy']['ai'], c['data']['ai'])

    out.append('<h2>Log</h2>')
    for p in c['data']['blog']:
        # post bodies are trusted HTML written in app.js
        out.append('<article id="log-%s"><h3>%s</h3><p><time datetime="%s">%s</time></p>%s</article>' % (
            esc(p['slug']), esc(p['title']), p['date'], p['date'],
            ''.join('<p>%s</p>' % b for b in p['body'])))

    out.append('<h2>Links</h2>')
    links = ['<a href="%s">%s</a>' % (esc(l['href']), esc(LABELS[l['label']])) for l in c['links']]
    links.append('<a href="mailto:%s">%s</a>' % (EMAIL, EMAIL))
    out.append('<p>%s</p>' % ' · '.join(links))
    out.append('</section>')
    return '\n'.join(('  ' if line.startswith(('<section', '</section')) else '    ') + line for line in out)


def build_llms(c):
    lines = [
        '# %s' % NAME,
        '',
        '> %s CompTIA Security+ and Splunk Core Certified User.' % c['copy']['about'],
        '',
        'Background in %s. Website: %s' % (series(c['copy']['background']), SITE),
        '',
        '## Cybersecurity projects',
        '',
    ]
    lines += ['- [%s](%s): %s' % (x['title'], x['link'], x['desc']) for x in c['data']['projects']]
    lines += ['', '## AI in my work', '', c['copy']['ai'], '']
    lines += ['- [%s](%s): %s' % (x['title'], x['link'], x['desc']) for x in c['data']['ai']]
    lines += ['', '## Log', '']
    lines += ['- [%s](%s#blog/%s) (%s): %s' % (p['title'], SITE, p['slug'], p['date'], strip_tags(' '.join(p['body'][:-1])))
              for p in c['data']['blog']]
    lines += ['', '## Certifications', '']
    lines += ['- [%s](%s)' % (x['name'], x['href']) for x in c['certs']]
    lines += ['', '## Skills', '']
    lines += ['- %s: %s' % (g['name'], ', '.join(g['skills'])) for g in c['skills']]
    lines += ['', '## Links', '']
    lines += ['- [%s](%s)' % (LABELS[l['label']], l['href']) for l in c['links']]
    lines += ['- Email: %s' % EMAIL, '']
    return '\n'.join(lines)


def main():
    src = (ROOT / 'app.js').read_text()
    c = {
        'data': read_var(src, 'DATA'),
        'copy': read_var(src, 'COPY'),
        'skills': read_var(src, 'SKILL_GROUPS'),
        'certs': read_var(src, 'CERTS'),
        'links': read_var(src, 'PROFILE_LINKS'),
    }

    index = ROOT / 'index.html'
    page = index.read_text()
    page, n = re.subn(r'(  <!-- static:start -->\n).*?(  <!-- static:end -->)',
                      lambda m: m.group(1) + build_html(c) + '\n' + m.group(2), page, flags=re.S)
    if n != 1:
        raise SystemExit('index.html: static markers not found')
    index.write_text(page)
    (ROOT / 'llms.txt').write_text(build_llms(c))
    print('wrote index.html static copy and llms.txt')


if __name__ == '__main__':
    main()
