(function () {
  'use strict';

  /* ---------------------------------------------------
     Content
  --------------------------------------------------- */

  var DATA = {
    projects: [
      {
        title: 'SOC lab: the legacy server breach',
        meta: 'lab',
        desc: 'Incident response on a compromised legacy Linux server in an isolated VirtualBox lab, following PICERL. Found a backdoored FTP service (CVE-2011-2523) and a planted root shell, preserved evidence, contained and hardened the host, and wrote technical and executive reports. Includes a defender\'s view mapping each stage to MITRE ATT&CK with draft Splunk detections.',
        tags: ['Nmap', 'Wireshark', 'iptables', 'Linux', 'Incident response', 'MITRE ATT&CK'],
        link: 'https://github.com/janyris/soc-legacy-server-breach'
      }
    ],

    ai: [
      {
        title: 'AI-assisted analysis, manually verified',
        meta: 'method',
        desc: 'In the SOC lab I used AI to help plan scans, parse output, research CVEs and draft reports, and I checked every AI-suggested finding with a manual tool before accepting it as evidence.',
        tags: ['Trust but verify', 'Incident response'],
        link: 'https://github.com/janyris/soc-legacy-server-breach'
      }
    ],

    /* the log: newest first. type is one of note | cybersecurity | ai | personal */
    blog: [
      {
        slug: 'home-soc-lab',
        type: 'cybersecurity',
        title: 'Building a home SOC lab',
        date: '2026-10-21',
        excerpt: 'In progress: an isolated KVM lab with Splunk and a monitored Windows 11 endpoint.',
        body: [
          'I am building a home SOC lab on my Fedora workstation with KVM and libvirt: a Splunk server and a Windows 11 endpoint on an isolated network with no route out, with a Kali attacker to follow.',
          'So far the isolated network is up and verified (the Splunk VM cannot reach the internet), Splunk Enterprise is running on Ubuntu behind a host firewall that only allows SSH, the web interface and forwarder traffic, and a clean snapshot is saved.',
          'The Windows 11 endpoint runs with Secure Boot and an emulated TPM. Sysmon and the Splunk Universal Forwarder are staged and checked against their published hashes before install.',
          'Next: get Sysmon telemetry flowing into Splunk, then use it to validate the detections from my SOC lab write-up and build new ones with Atomic Red Team.'
        ]
      },
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
          'Then I worked the defender\'s side: for each stage (the scan, the backdoor trigger, the root shell, the persistence) what a SOC would see, where the signal lives, the MITRE ATT&CK technique, and draft Splunk searches to catch it. Validating those against replayed traffic is next.',
          'Full write-up: <a href="https://github.com/janyris/soc-legacy-server-breach" target="_blank" rel="noopener noreferrer">github.com/janyris/soc-legacy-server-breach</a>'
        ]
      }
    ]
  };

  var COPY = {
    about: 'SOC analyst specializing in detection and investigation, with a long-term focus on AI security.',
    background: ['IT', 'networking', 'graphic & web design', 'blockchain'],
    ai: 'AI assistants are part of my analyst toolkit for research, scripting and documentation. I treat AI output as a lead, not evidence: every finding is verified with a primary tool or source before it goes into a report. My long-term focus is AI security: how these systems are attacked, misused and defended.'
  };

  /* only what can be backed up in an interview today; add as projects finish */
  var SKILL_GROUPS = [
    { name: 'SIEM & logs', skills: ['Splunk', 'SPL', 'Dashboards & alerts'] },
    { name: 'security ops', skills: ['Incident response', 'Evidence preservation', 'Vulnerability analysis', 'MITRE ATT&CK'] },
    { name: 'networking', skills: ['TCP/IP', 'Wireshark', 'Nmap', 'iptables'] },
    { name: 'systems', skills: ['Linux', 'KVM/libvirt', 'Windows 11', 'PowerShell'] },
    { name: 'AI', skills: ['Claude Code', 'AI-assisted analysis'] }
  ];

  var CERTS = [
    { name: 'CompTIA Security+', href: 'https://www.credly.com/badges/b57651f6-2002-4ac5-9034-2aecdd2339d4' },
    { name: 'Splunk Core Certified User', href: 'https://www.credly.com/badges/17cf74d0-02d9-4eff-b46e-a70867ac1dc2' },
    { name: 'Cisco Network Defense', href: 'https://www.credly.com/badges/f6de71d1-e0b8-40c3-89f6-c794412b4a6c' }
  ];

  var PROFILE_LINKS = [
    { label: 'github', href: 'https://github.com/janyris' },
    { label: 'linkedin', href: 'https://www.linkedin.com/in/janyris/' },
    { label: 'credly', href: 'https://www.credly.com/users/janyris/badges' }
  ];

  var CONTACTS = [
    {
      label: 'email',
      value: 'hello@janyris.com',
      href: 'mailto:hello@janyris.com',
      icon: '<path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>'
    },
    {
      label: 'github',
      value: 'github.com/janyris',
      href: 'https://github.com/janyris',
      icon: '<path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>'
    },
    {
      label: 'linkedin',
      value: 'linkedin.com/in/janyris',
      href: 'https://www.linkedin.com/in/janyris/',
      icon: '<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 4.892v6.449zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>'
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

  function linkIconSvg() {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M9 15 19 5M19 5h-6M19 5v6"/></svg>';
  }

  /* type picks the label color, matching the log badges: cybersecurity | ai */
  function itemCard(item, type) {
    var linkHtml = '';
    if (item.link) {
      linkHtml = '<a class="item-link" href="' + item.link + '" target="_blank" rel="noopener noreferrer">view ' + linkIconSvg() + '</a>';
    }
    return (
      '<article class="item-card">' +
        '<div class="item-head"><span class="item-title">' + escapeHtml(item.title) + '</span>' +
        '<span class="item-meta log-badge log-badge-' + type + '">' + escapeHtml(item.meta) + '</span></div>' +
        '<p class="item-desc">' + escapeHtml(item.desc) + '</p>' +
        '<div class="tag-row">' + item.tags.map(function (t) { return '<span class="tag">' + escapeHtml(t) + '</span>'; }).join('') + '</div>' +
        linkHtml +
      '</article>'
    );
  }

  function extLink(label, href) {
    return '<a class="item-link" href="' + href + '" target="_blank" rel="noopener noreferrer">' + escapeHtml(label) + ' ' + linkIconSvg() + '</a>';
  }

  function kvRow(key, valueHtml) {
    return '<dt>' + escapeHtml(key) + '</dt><dd>' + valueHtml + '</dd>';
  }

  function renderAbout() {
    return (
      '<p class="tpl-eyebrow sec-about">// about</p>' +
      '<h2 class="tpl-title">Security first, always</h2>' +
      '<p class="tpl-lead">' + escapeHtml(COPY.about) + '</p>' +
      '<dl class="about-kv">' +
        kvRow('background', COPY.background.map(escapeHtml).join(' · ')) +
        kvRow('certs', CERTS.map(function (c) { return '<span class="kv-line">' + extLink(c.name, c.href) + '</span>'; }).join('')) +
        SKILL_GROUPS.map(function (g) { return kvRow(g.name, g.skills.map(escapeHtml).join(' · ')); }).join('') +
        kvRow('links', PROFILE_LINKS.map(function (l) { return extLink(l.label, l.href); }).join(' <span class="kv-sep">·</span> ')) +
      '</dl>'
    );
  }

  function renderProjects() {
    return (
      '<p class="tpl-eyebrow sec-projects">// cybersecurity</p>' +
      '<h2 class="tpl-title">Labs &amp; investigations</h2>' +
      '<p class="tpl-lead">Labs and projects I have built. Each one links to the full write-up on GitHub.</p>' +
      '<div class="card-list">' + DATA.projects.map(function (p) { return itemCard(p, 'cybersecurity'); }).join('') + '</div>'
    );
  }

  function renderAI() {
    return (
      '<p class="tpl-eyebrow sec-ai">// ai</p>' +
      '<h2 class="tpl-title">AI in practice</h2>' +
      '<p class="tpl-lead">' + escapeHtml(COPY.ai) + '</p>' +
      '<div class="card-list">' + DATA.ai.map(function (p) { return itemCard(p, 'ai'); }).join('') + '</div>'
    );
  }

  function renderBlogList() {
    return (
      '<p class="tpl-eyebrow sec-notes">// log</p>' +
      '<h2 class="tpl-title">What I am working on</h2>' +
      '<p class="tpl-lead">Notes and write-ups, newest first.</p>' +
      '<div class="blog-list">' +
        DATA.blog.map(function (post) {
          return (
            '<button type="button" class="blog-row" data-post="' + post.slug + '">' +
              '<span class="blog-row-main">' +
                '<span class="blog-row-title">' + escapeHtml(post.title) + '</span>' +
                '<span class="blog-row-excerpt">' + escapeHtml(post.excerpt) + '</span>' +
              '</span>' +
              '<span class="blog-row-date">' + post.date + '</span>' +
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
      '<p class="tpl-eyebrow sec-notes">// log/' + escapeHtml(slug) + '</p>' +
      '<h2 class="tpl-title">' + escapeHtml(post.title) + '</h2>' +
      '<p class="post-meta">' + post.date + '</p>' +
      '<div class="post-body">' + post.body.map(function (p) { return '<p>' + p + '</p>'; }).join('') + '</div>'
    );
  }

  function renderContact() {
    return (
      '<p class="tpl-eyebrow sec-contact">// contact</p>' +
      '<h2 class="tpl-title">Get in touch</h2>' +
      '<p class="tpl-lead">Open to SOC analyst and cybersecurity roles, and to collaborating on labs and projects.</p>' +
      '<div class="contact-list">' +
        CONTACTS.map(function (c) {
          return (
            '<a class="contact-row" href="' + c.href + '"' + (c.href.indexOf('mailto:') === 0 ? '' : ' target="_blank" rel="noopener noreferrer"') + '>' +
              '<svg class="contact-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">' + c.icon + '</svg>' +
              '<span><span class="contact-label">' + c.label + '</span><br><span class="contact-value">' + escapeHtml(c.value) + '</span></span>' +
            '</a>'
          );
        }).join('') +
      '</div>'
    );
  }

  var ROUTES = {
    about: { path: '~/about$', render: renderAbout },
    projects: { path: '~/cybersecurity$', render: renderProjects },
    ai: { path: '~/ai$', render: renderAI },
    blog: { path: '~/log$', render: renderBlogList },
    contact: { path: '~/contact$', render: renderContact }
  };

  /* ---------------------------------------------------
     Frame / overlay controller
  --------------------------------------------------- */

  var overlay = document.getElementById('overlay');
  var frameBody = document.getElementById('frameBody');
  var framePath = document.getElementById('framePath');
  var frameClose = document.getElementById('frameClose');
  var lastFocused = null;
  var behindFrame = document.querySelectorAll('.skip-link, .topbar, main, .status-bar');

  function setBehindInert(on) {
    Array.prototype.forEach.call(behindFrame, function (el) { el.inert = on; });
  }

  /* glitch in/out, after the Burn My Windows "glitch" effect on the desktop (400ms) */
  var frame = document.getElementById('frame');
  var GLITCH_MS = 400;
  var closeTimer = null;

  function glitch(dir) {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false;
    frame.classList.remove('glitch-in', 'glitch-out');
    void frame.offsetWidth; /* restart the animation */
    frame.classList.add('glitch-' + dir);
    return true;
  }

  frame.addEventListener('animationend', function (e) {
    if (e.target === frame) frame.classList.remove('glitch-in');
  });

  function openRoute(route, opts) {
    opts = opts || {};
    if (route === 'home') {
      closeFrame(opts.skipHash);
      return;
    }
    if (route.indexOf('blog/') === 0) {
      var slug = route.slice(5);
      framePath.textContent = '~/log/' + slug + '$';
      frameBody.innerHTML = renderBlogPost(slug);
    } else if (ROUTES[route]) {
      framePath.textContent = ROUTES[route].path;
      frameBody.innerHTML = ROUTES[route].render();
    } else {
      return;
    }

    var alreadyOpen = overlay.classList.contains('open') && !closeTimer;
    clearTimeout(closeTimer);
    closeTimer = null;
    if (!alreadyOpen) {
      lastFocused = document.activeElement;
      glitch('in');
    }
    overlay.classList.add('open');
    setBehindInert(true);
    document.body.style.overflow = 'hidden';
    frameBody.scrollTop = 0;
    frameBody.focus();

    if (!opts.skipHash) {
      history.pushState({ route: route }, '', '#' + route);
    }
  }

  function closeFrame(skipHash) {
    if (!overlay.classList.contains('open') || closeTimer) return;
    if (glitch('out')) {
      closeTimer = setTimeout(function () {
        closeTimer = null;
        /* glitch-out stays on (holding the hidden end state) until the next open */
        overlay.classList.remove('open');
      }, GLITCH_MS);
    } else {
      overlay.classList.remove('open');
    }
    setBehindInert(false);
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
  var THEME_COLORS = { dark: '#1b2029', light: '#f3eee4' };
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
     Home dashboard (log, cybersecurity preview)
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
        '<span class="log-badge log-badge-' + row.type + '">' + (row.type === 'ai' ? 'AI' : row.type) + '</span>' +
      '</button>'
    );
  }

  function renderDashboard() {
    var log = DATA.blog.slice(0, 6).map(function (post) {
      return { title: post.title, date: post.date, type: post.type, slug: post.slug };
    });

    document.getElementById('logList').innerHTML = log.map(logRowHtml).join('');
    document.getElementById('cybersecurityList').innerHTML = DATA.projects.slice(0, 2).map(function (p) { return itemCard(p, 'cybersecurity'); }).join('');
    /* "view all" only when the window holds more than the home preview */
    document.querySelector('.dash-more[data-route="projects"]').hidden = DATA.projects.length <= 2;
  }

  renderDashboard();

  /* ---------------------------------------------------
     Hero: decrypt-in text + ambient hex dump
  --------------------------------------------------- */

  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#%&*+=?/<>';

  function scramble(el, delay) {
    var target = el.textContent;
    var frames = 16;
    var stops = target.split('').map(function (ch, i) {
      return ch === ' ' ? 0 : Math.round((i / target.length) * frames * 0.6 + Math.random() * frames * 0.4);
    });
    var frame = 0;
    el.style.visibility = 'hidden';
    setTimeout(function step() {
      el.style.visibility = '';
      el.textContent = target.split('').map(function (ch, i) {
        if (ch === ' ' || frame >= stops[i]) return ch;
        return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
      }).join('');
      if (frame++ < frames) setTimeout(step, 45);
      else el.textContent = target;
    }, delay);
  }

  if (!reducedMotion) {
    Array.prototype.forEach.call(document.querySelectorAll('[data-scramble]'), function (el, i) {
      scramble(el, 120 + i * 140);
    });
  }

  (function hexDump() {
    var pre = document.getElementById('heroAscii');
    if (!pre) return;
    var offset = 0x7f3a0000;
    function hex(n, w) { return ('0000000' + n.toString(16)).slice(-w); }
    function row() {
      var bytes = [], ascii = '';
      for (var i = 0; i < 16; i++) {
        var b = Math.floor(Math.random() * 256);
        bytes.push(hex(b, 2));
        ascii += b > 32 && b < 127 ? String.fromCharCode(b) : '.';
      }
      offset += 16;
      return hex(offset, 8) + '  ' + bytes.slice(0, 8).join(' ') + '  ' + bytes.slice(8).join(' ') + '  |' + ascii + '|';
    }
    var lines = [];
    for (var i = 0; i < 24; i++) lines.push(row() + '   ' + row());
    pre.textContent = lines.join('\n');
    if (reducedMotion) return;

    var heroVisible = true;
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (entries) {
        heroVisible = entries[0].isIntersecting;
      }).observe(pre);
    }
    setInterval(function () {
      if (document.hidden || !heroVisible) return;
      lines.shift();
      lines.push(row() + '   ' + row());
      pre.textContent = lines.join('\n');
    }, 1500); /* slow drift: texture, not motion that competes with reading */
  })();

  /* ---------------------------------------------------
     Misc: year, clock
  --------------------------------------------------- */

  document.getElementById('year').textContent = new Date().getFullYear();

  var clockEl = document.getElementById('clock');
  function updateClock() {
    if (document.hidden) return;
    var now = new Date();
    var h = String(now.getHours()).padStart(2, '0');
    var m = String(now.getMinutes()).padStart(2, '0');
    clockEl.textContent = h + ':' + m;
  }
  updateClock();
  setInterval(updateClock, 1000);
  document.addEventListener('visibilitychange', updateClock);
})();
