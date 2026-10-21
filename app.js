(function () {
  'use strict';

  /* ---------------------------------------------------
     Content
  --------------------------------------------------- */

  var DATA = {
    projects: [
      {
        title: 'SOC Lab: The Legacy Server Breach',
        meta: 'Oct 2026',
        desc: 'Incident response on a compromised legacy Linux server in an isolated VirtualBox lab, following PICERL. Found a backdoored FTP service (CVE-2011-2523) and a planted root shell, preserved evidence, contained and hardened the host, and wrote technical and executive reports.',
        tags: ['Nmap', 'Wireshark', 'iptables', 'Linux', 'incident response'],
        link: 'https://github.com/janyris/soc-legacy-server-breach'
      },
      {
        title: 'Security+ (SY0-701) Study Guide',
        meta: 'Oct 2026',
        desc: 'Free study guide I built while preparing for Security+: notes for all five domains, quick-reference sheets, and offline practice tools (scenario quiz, flashcards, acronym trainer).',
        tags: ['CompTIA Security+', 'study guide', 'HTML'],
        link: 'https://github.com/janyris/comptia-security-plus-prep'
      },
      {
        title: 'Splunk Core Certified User Study Notes',
        meta: 'Oct 2026',
        desc: 'Notes and 103 original practice questions I used to pass SPLK-1001, with every key fact linked to the Splunk documentation page that confirms it.',
        tags: ['Splunk', 'SPL', 'study guide'],
        link: 'https://github.com/janyris/splunk-core-certified-user-prep'
      }
    ],

    ai: [
      {
        title: 'AI-assisted analysis, manually verified',
        meta: 'Oct 2026',
        desc: 'In the SOC lab I used AI to help plan scans, parse output, research CVEs and draft reports, and I checked every AI-suggested finding with a manual tool before accepting it as evidence.',
        tags: ['trust but verify', 'incident response'],
        link: 'https://github.com/janyris/soc-legacy-server-breach'
      },
      {
        title: 'AI-assisted study guides',
        meta: 'Oct 2026',
        desc: 'Both certification guides were drafted with AI assistance while I studied, then fact-checked against the official exam objectives and vendor documentation.',
        tags: ['documentation', 'fact-checking'],
        link: 'https://github.com/janyris/splunk-core-certified-user-prep'
      },
      {
        title: 'This site',
        meta: 'Oct 2026',
        desc: 'Designed and built with AI assistance. I keep it updated as I go, with new projects and log posts.',
        tags: ['HTML', 'CSS', 'JavaScript'],
        link: 'https://github.com/janyris'
      }
    ],

    /* the log: newest first. type is one of note | cybersecurity | ai | personal */
    blog: [
      {
        slug: 'soc-lab-legacy-server-breach',
        type: 'cybersecurity',
        title: 'SOC lab: the legacy server breach',
        date: '2026-10-12',
        excerpt: 'Investigated, contained and hardened a compromised legacy Linux server in an isolated lab.',
        body: [
          'A legacy Ubuntu server was flagged for anomalous traffic. In an isolated VirtualBox host-only network, I scanned it from Kali and found about 25 open ports, including vsftpd 2.3.4 with its known backdoor (<strong>CVE-2011-2523</strong>) and a root shell already listening on port 1524.',
          'The scanner could only guess the FTP version because the banner was masked. A targeted script scan confirmed the real version. Taking the guess at face value would have mislabeled the entry point.',
          'I captured volatile state before isolating the host, then removed the backdoor, disabled xinetd, firewalled the entry point and verified the ports were closed. I wrote it up as a technical report and an executive briefing.',
          'Full write-up: <a href="https://github.com/janyris/soc-legacy-server-breach" target="_blank" rel="noopener noreferrer">github.com/janyris/soc-legacy-server-breach</a>'
        ]
      },
      {
        slug: 'security-plus-study-guide',
        type: 'note',
        title: 'Security+ study guide is public',
        date: '2026-10-08',
        excerpt: 'Passed CompTIA Security+ and published the study guide I made along the way.',
        body: [
          'I passed CompTIA Security+ (SY0-701) and published the study guide I built while preparing: notes for all five domains, reference sheets, and practice tools that work offline in a browser.',
          'It was written with AI assistance and organized by CompTIA\'s published objectives. It contains no real exam questions.',
          'Guide: <a href="https://github.com/janyris/comptia-security-plus-prep" target="_blank" rel="noopener noreferrer">github.com/janyris/comptia-security-plus-prep</a>'
        ]
      },
      {
        slug: 'splunk-core-certified-user',
        type: 'note',
        title: 'Splunk Core Certified User: passed',
        date: '2026-10-06',
        excerpt: 'Passed SPLK-1001 and shared my notes and 103 practice questions.',
        body: [
          'I passed the Splunk Core Certified User (SPLK-1001) exam and shared the notes I used: one note per exam topic, an SPL command reference, and 103 original practice questions.',
          'The notes were drafted with AI assistance while I studied, then every key fact was checked against Splunk\'s official documentation and linked to the page that confirms it.',
          'Notes: <a href="https://github.com/janyris/splunk-core-certified-user-prep" target="_blank" rel="noopener noreferrer">github.com/janyris/splunk-core-certified-user-prep</a>'
        ]
      }
    ]
  };

  var SKILL_GROUPS = [
    { name: 'siem & logs', skills: ['Splunk', 'SPL', 'Dashboards & Alerts'] },
    { name: 'security ops', skills: ['Alert Triage', 'Incident Response', 'Vulnerability Analysis'] },
    { name: 'networking', skills: ['TCP/IP', 'Wireshark', 'Nmap', 'Linux'] },
    { name: 'ai & automation', skills: ['Claude Code', 'AI Agents', 'Scripting'] }
  ];

  var CERT_BADGES = [
    { alt: 'CompTIA Security+', href: 'https://www.credly.com/badges/b57651f6-2002-4ac5-9034-2aecdd2339d4', src: 'https://img.shields.io/badge/-CompTIA%20Security%2B-CC0000?style=flat-square&logo=comptia&logoColor=white' },
    { alt: 'Splunk Core Certified User', href: 'https://www.credly.com/badges/17cf74d0-02d9-4eff-b46e-a70867ac1dc2', src: 'https://img.shields.io/badge/-Splunk%20Core%20Certified%20User-000000?style=flat-square&logo=splunk&logoColor=white' },
    { alt: 'Cisco Network Defense', href: 'https://www.credly.com/badges/f6de71d1-e0b8-40c3-89f6-c794412b4a6c', src: 'https://img.shields.io/badge/-Cisco%20Network%20Defense-1BA0D7?style=flat-square&logo=cisco&logoColor=white' }
  ];

  var CONTACTS = [
    {
      label: 'email',
      value: 'hello@janyris.com',
      href: 'mailto:hello@janyris.com',
      icon: '<path d="M3.5 5.5h17v13h-17z"/><path d="m4 6.5 8 6.5 8-6.5"/>'
    },
    {
      label: 'github',
      value: 'github.com/janyris',
      href: 'https://github.com/janyris',
      icon: '<path d="M12 3a9 9 0 0 0-2.85 17.54c.45.08.61-.2.61-.43v-1.68c-2.5.55-3.03-1.07-3.03-1.07-.41-1.04-1-1.32-1-1.32-.82-.56.06-.55.06-.55.91.06 1.38.93 1.38.93.8 1.38 2.11.98 2.63.75.08-.58.32-.98.57-1.21-2-.23-4.1-1-4.1-4.44 0-.98.35-1.79.92-2.42-.09-.23-.4-1.15.09-2.4 0 0 .75-.24 2.46.92a8.5 8.5 0 0 1 4.48 0c1.71-1.16 2.46-.92 2.46-.92.49 1.25.18 2.17.09 2.4.57.63.92 1.44.92 2.42 0 3.45-2.1 4.21-4.11 4.43.33.29.62.85.62 1.72v2.55c0 .24.16.51.62.43A9 9 0 0 0 12 3Z"/>'
    },
    {
      label: 'linkedin',
      value: 'linkedin.com/in/janyris',
      href: 'https://www.linkedin.com/in/janyris/',
      icon: '<rect x="3.5" y="3.5" width="17" height="17" rx="2"/><path d="M8 10.5v6M8 7.8v.01M12.2 16.5v-3.6c0-1.1.7-1.9 2-1.9s2 .8 2 1.9v3.6M12.2 10.5v6"/>'
    }
  ];

  /* ---------------------------------------------------
     Render helpers
  --------------------------------------------------- */

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function formatDate(iso) {
    var d = new Date(iso + 'T00:00:00');
    return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  }

  function linkIconSvg() {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M9 15 19 5M19 5h-6M19 5v6"/></svg>';
  }

  function itemCard(item) {
    var linkHtml = '';
    if (item.link) {
      linkHtml = '<a class="item-link" href="' + item.link + '" target="_blank" rel="noopener noreferrer">view ' + linkIconSvg() + '</a>';
    }
    return (
      '<article class="item-card">' +
        '<div class="item-head"><span class="item-title">' + escapeHtml(item.title) + '</span>' +
        '<span class="item-meta">' + escapeHtml(item.meta) + '</span></div>' +
        '<p class="item-desc">' + escapeHtml(item.desc) + '</p>' +
        '<div class="tag-row">' + item.tags.map(function (t) { return '<span class="tag">' + escapeHtml(t) + '</span>'; }).join('') + '</div>' +
        linkHtml +
      '</article>'
    );
  }

  function certBadge(b) {
    var img = '<img src="' + b.src + '" alt="' + escapeHtml(b.alt) + '" loading="lazy">';
    if (!b.href) return img;
    return '<a href="' + b.href + '" target="_blank" rel="noopener noreferrer" title="Verify on Credly">' + img + '</a>';
  }

  function renderAbout() {
    var skills = SKILL_GROUPS.reduce(function (all, g) { return all.concat(g.skills); }, []);
    return (
      '<p class="tpl-eyebrow">// about</p>' +
      '<h2 class="tpl-title">Security first, always</h2>' +
      '<p class="tpl-lead">I am Janyris, a SOC analyst focused on detection and investigation, and long term on AI security. I use AI agents to speed up research, documentation and scripting, and I verify what they produce.</p>' +
      '<div class="tpl-section">' +
        '<a class="item-link" href="https://github.com/janyris" target="_blank" rel="noopener noreferrer">github.com/janyris ' + linkIconSvg() + '</a>' +
      '</div>' +
      '<div class="tpl-section">' +
        '<h3 class="tpl-subhead">certifications</h3>' +
        '<div class="badge-row">' + CERT_BADGES.map(certBadge).join('') + '</div>' +
        '<p class="about-more"><a class="item-link" href="https://www.credly.com/users/janyris/badges" target="_blank" rel="noopener noreferrer">view all on Credly ' + linkIconSvg() + '</a></p>' +
      '</div>' +
      '<div class="tpl-section">' +
        '<h3 class="tpl-subhead">skills &amp; tools</h3>' +
        '<div class="skill-row">' + skills.map(function (s) { return '<span class="pill">' + escapeHtml(s) + '</span>'; }).join('') + '</div>' +
      '</div>'
    );
  }

  function renderProjects() {
    return (
      '<p class="tpl-eyebrow">// cybersecurity</p>' +
      '<h2 class="tpl-title">Cybersecurity</h2>' +
      '<p class="tpl-lead">Labs and projects I have built. Each one links to the full write-up on GitHub.</p>' +
      '<div class="card-list">' + DATA.projects.map(itemCard).join('') + '</div>'
    );
  }

  function renderAI() {
    return (
      '<p class="tpl-eyebrow">// ai</p>' +
      '<h2 class="tpl-title">AI in my work</h2>' +
      '<p class="tpl-lead">I use Claude and Claude Code every day for research, documentation and scripting. I enjoy working with it, and I verify everything it produces before I rely on it. Long term, I am heading toward AI security.</p>' +
      '<div class="card-list">' + DATA.ai.map(itemCard).join('') + '</div>'
    );
  }

  function renderBlogList() {
    return (
      '<p class="tpl-eyebrow">// log</p>' +
      '<h2 class="tpl-title">Log</h2>' +
      '<p class="tpl-lead">What I am working on and learning, newest first.</p>' +
      '<div class="blog-list">' +
        DATA.blog.map(function (post) {
          return (
            '<button type="button" class="blog-row" data-post="' + post.slug + '">' +
              '<span class="blog-row-main">' +
                '<span class="blog-row-title">' + escapeHtml(post.title) + '</span>' +
                '<span class="blog-row-excerpt">' + escapeHtml(post.excerpt) + '</span>' +
              '</span>' +
              '<span class="blog-row-date">' + formatDate(post.date) + '</span>' +
            '</button>'
          );
        }).join('') +
      '</div>'
    );
  }

  function renderBlogPost(slug) {
    var post = DATA.blog.filter(function (p) { return p.slug === slug; })[0];
    if (!post) return renderBlogList();
    return (
      '<button type="button" class="back-link" data-route="blog">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M15 5 8 12l7 7"/></svg>' +
        'back to log' +
      '</button>' +
      '<p class="tpl-eyebrow">// log/' + escapeHtml(slug) + '</p>' +
      '<h2 class="tpl-title">' + escapeHtml(post.title) + '</h2>' +
      '<p class="post-meta">' + formatDate(post.date) + '</p>' +
      '<div class="post-body">' + post.body.map(function (p) { return '<p>' + p + '</p>'; }).join('') + '</div>'
    );
  }

  function renderContact() {
    return (
      '<p class="tpl-eyebrow">// contact</p>' +
      '<h2 class="tpl-title">Get in touch</h2>' +
      '<p class="tpl-lead">Open to SOC analyst and cybersecurity roles, and to collaborating on labs and projects.</p>' +
      '<div class="contact-list">' +
        CONTACTS.map(function (c) {
          return (
            '<a class="contact-row" href="' + c.href + '"' + (c.href.indexOf('mailto:') === 0 ? '' : ' target="_blank" rel="noopener noreferrer"') + '>' +
              '<svg class="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">' + c.icon + '</svg>' +
              '<span><span class="contact-label">' + c.label + '</span><br><span class="contact-value">' + escapeHtml(c.value) + '</span></span>' +
            '</a>'
          );
        }).join('') +
      '</div>'
    );
  }

  var ROUTES = {
    about: { path: 'janyris:~/about$', render: renderAbout },
    projects: { path: 'janyris:~/cybersecurity$', render: renderProjects },
    ai: { path: 'janyris:~/ai$', render: renderAI },
    blog: { path: 'janyris:~/log$', render: renderBlogList },
    contact: { path: 'janyris:~/contact$', render: renderContact }
  };

  /* ---------------------------------------------------
     Frame / overlay controller
  --------------------------------------------------- */

  var overlay = document.getElementById('overlay');
  var frameBody = document.getElementById('frameBody');
  var framePath = document.getElementById('framePath');
  var frameClose = document.getElementById('frameClose');
  var lastFocused = null;

  function openRoute(route, opts) {
    opts = opts || {};
    if (route === 'home') {
      closeFrame(opts.skipHash);
      return;
    }
    if (route.indexOf('blog/') === 0) {
      var slug = route.slice(5);
      framePath.textContent = 'janyris:~/log/' + slug + '$';
      frameBody.innerHTML = renderBlogPost(slug);
    } else if (ROUTES[route]) {
      framePath.textContent = ROUTES[route].path;
      frameBody.innerHTML = ROUTES[route].render();
    } else {
      return;
    }

    lastFocused = document.activeElement;
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    frameBody.scrollTop = 0;
    frameBody.focus();

    if (!opts.skipHash) {
      history.pushState({ route: route }, '', '#' + route);
    }
  }

  function closeFrame(skipHash) {
    if (!overlay.classList.contains('open')) return;
    overlay.classList.remove('open');
    document.body.style.overflow = '';
    if (!skipHash) {
      history.pushState({ route: 'home' }, '', location.pathname + location.search);
    }
    if (lastFocused && typeof lastFocused.focus === 'function') {
      lastFocused.focus();
    }
  }

  document.addEventListener('click', function (e) {
    var routeEl = e.target.closest('[data-route]');
    if (routeEl) {
      e.preventDefault();
      openRoute(routeEl.getAttribute('data-route'));
      return;
    }
    var postEl = e.target.closest('[data-post]');
    if (postEl) {
      e.preventDefault();
      openRoute('blog/' + postEl.getAttribute('data-post'));
      return;
    }
    if (e.target === overlay) {
      closeFrame();
    }
  });

  frameClose.addEventListener('click', function () { closeFrame(); });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && overlay.classList.contains('open')) {
      closeFrame();
    }
  });

  window.addEventListener('popstate', function () {
    var hash = location.hash.replace('#', '');
    if (hash) {
      openRoute(hash, { skipHash: true });
    } else {
      closeFrame(true);
    }
  });

  /* deep link on load */
  (function initialRoute() {
    var hash = location.hash.replace('#', '');
    if (hash && (ROUTES[hash] || hash.indexOf('blog/') === 0)) {
      openRoute(hash, { skipHash: true });
    }
  })();

  /* ---------------------------------------------------
     Theme toggle
  --------------------------------------------------- */

  var THEME_KEY = 'janyris-theme';
  var THEME_COLORS = { dark: '#1b2340', light: '#f0e9d4' };
  var rootEl = document.documentElement;
  var themeToggle = document.getElementById('themeToggle');
  var themeMeta = document.querySelector('meta[name="theme-color"]');

  function applyTheme(theme) {
    rootEl.setAttribute('data-theme', theme);
    themeToggle.setAttribute('aria-pressed', String(theme === 'light'));
    if (themeMeta) themeMeta.setAttribute('content', THEME_COLORS[theme]);
    try { localStorage.setItem(THEME_KEY, theme); } catch (e) {}
  }

  applyTheme(rootEl.getAttribute('data-theme') === 'light' ? 'light' : 'dark');

  themeToggle.addEventListener('click', function () {
    var current = rootEl.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
    applyTheme(current === 'light' ? 'dark' : 'light');
  });

  /* ---------------------------------------------------
     Home dashboard (log, cybersecurity preview, capabilities)
  --------------------------------------------------- */

  function logIconSvg(type) {
    if (type === 'note') return '<path d="M6 4h9l3 3v13H6z"/><path d="M9 11h6M9 14.5h6"/>';
    if (type === 'cybersecurity') return '<rect x="4" y="6" width="16" height="13" rx="1.5"/><path d="M4 9h16"/>';
    if (type === 'personal') return '<path d="M12 19.5s-7-4.3-7-9.4A3.9 3.9 0 0 1 12 7.9a3.9 3.9 0 0 1 7 2.2c0 5.1-7 9.4-7 9.4Z"/>';
    return '<rect x="7" y="7" width="10" height="10" rx="1.5"/><path d="M9.5 3.5v3M14.5 3.5v3M9.5 17.5v3M14.5 17.5v3M3.5 9.5h3M3.5 14.5h3M17.5 9.5h3M17.5 14.5h3"/>';
  }

  function logRowHtml(row) {
    var attr = 'data-post="' + row.slug + '"';
    return (
      '<button type="button" class="log-row" ' + attr + '>' +
        '<svg class="log-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7">' + logIconSvg(row.type) + '</svg>' +
        '<span class="log-title">' + escapeHtml(row.title) + '</span>' +
        '<span class="log-date">' + row.date + '</span>' +
        '<span class="log-badge log-badge-' + row.type + '">' + row.type + '</span>' +
      '</button>'
    );
  }

  function renderDashboard() {
    var log = DATA.blog.slice(0, 6).map(function (post) {
      return { title: post.title, date: formatDate(post.date), type: post.type, slug: post.slug };
    });

    document.getElementById('logList').innerHTML = log.map(logRowHtml).join('');
    document.getElementById('cybersecurityList').innerHTML = DATA.projects.slice(0, 2).map(itemCard).join('');
    document.getElementById('capGrid').innerHTML = SKILL_GROUPS.map(function (c) {
      return (
        '<div class="cap-card">' +
          '<div class="cap-title"><span class="cap-plus">+</span> ' + escapeHtml(c.name) + '</div>' +
          '<span class="cap-count">&#9656; ' + c.skills.length + (c.skills.length === 1 ? ' skill' : ' skills') + '</span>' +
        '</div>'
      );
    }).join('');
  }

  renderDashboard();

  /* ---------------------------------------------------
     Hero typewriter
  --------------------------------------------------- */

  (function typewriter() {
    var target = document.getElementById('typeTarget');
    var text = 'whoami — soc analyst, learning in public';
    var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduced) {
      target.textContent = text;
      return;
    }

    var i = 0;
    function tick() {
      target.textContent = text.slice(0, i);
      i++;
      if (i <= text.length) {
        setTimeout(tick, 26);
      }
    }
    tick();
  })();

  /* ---------------------------------------------------
     Misc: year, clock
  --------------------------------------------------- */

  document.getElementById('year').textContent = new Date().getFullYear();

  var clockEl = document.getElementById('clock');
  function updateClock() {
    var now = new Date();
    var h = String(now.getHours()).padStart(2, '0');
    var m = String(now.getMinutes()).padStart(2, '0');
    var s = String(now.getSeconds()).padStart(2, '0');
    clockEl.textContent = h + ':' + m + ':' + s;
  }
  updateClock();
  setInterval(updateClock, 1000);
})();
