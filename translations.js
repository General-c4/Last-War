(function () {
  const cardIds = ['overview', 'story', 'timeline', 'resources', 'buildings', 'rewards', 'stores', 'professions', 'map', 'next'];
  const languageFiles = {
    ar: './translations/ar.js',
    en: './translations/en.js',
    zh: './translations/zh.js'
  };
  const loadCache = {};

  window.LWT_TRANSLATIONS = window.LWT_TRANSLATIONS || {};

  function normalizeAssetPaths(html) {
    return String(html || '').replace(/(src|href)="(?:\.\/)?image\//g, '$1="./image/');
  }

  function normalizeLegacyMarkup() {
    const nextBody = document.querySelector('#next .card-body');
    if (nextBody) {
      const legacyGrid = Array.from(nextBody.children).find(function (element) {
        const style = element.getAttribute && element.getAttribute('style');
        return style && style.indexOf('grid-template-columns') !== -1;
      });

      if (legacyGrid && !legacyGrid.classList.contains('next-cards')) {
        legacyGrid.className = 'next-cards';
        legacyGrid.removeAttribute('style');

        Array.from(legacyGrid.children).forEach(function (card) {
          card.className = 'next-card';
          card.removeAttribute('style');
        });

        legacyGrid.querySelectorAll('h4, .btn').forEach(function (node) {
          node.removeAttribute('style');
        });
      }
    }
  }

  function applyLanguage(t, lang) {
    document.documentElement.dir = t.dir;
    document.documentElement.lang = lang;
    document.title = t.pageTitle;

    const subtitle = document.querySelector('.logo-text span');
    if (subtitle) subtitle.textContent = t.siteSubtitle;

    const navLinks = document.querySelectorAll('#navMenu li a');
    t.nav.forEach(function (html, index) {
      if (navLinks[index]) navLinks[index].innerHTML = html;
    });

    const sidebarLinks = document.querySelectorAll('#sidebarNav li a');
    t.nav.forEach(function (html, index) {
      if (sidebarLinks[index]) sidebarLinks[index].innerHTML = html;
    });

    const hero = document.querySelector('.hero-content');
    if (hero) hero.innerHTML = normalizeAssetPaths(t.heroContent);

    cardIds.forEach(function (id) {
      const header = document.querySelector('#' + id + ' .card-header h3');
      if (header && t.cardHeaders[id]) header.textContent = t.cardHeaders[id];

      const body = document.querySelector('#' + id + ' .card-body');
      if (body && t.cardBodies[id]) body.innerHTML = normalizeAssetPaths(t.cardBodies[id]);
    });

    const sidebarHeader = document.querySelector('.sidebar .card-header h3');
    if (sidebarHeader) sidebarHeader.textContent = t.sidebarHeader;

    const sidebarBody = document.querySelector('.sidebar .card-body');
    if (sidebarBody) sidebarBody.innerHTML = normalizeAssetPaths(t.sidebarBody);

    const footerSections = document.querySelectorAll('.footer-section');
    t.footerSections.forEach(function (html, index) {
      if (footerSections[index]) footerSections[index].innerHTML = normalizeAssetPaths(html);
    });

    const copyright = document.querySelector('.copyright');
    if (copyright) copyright.innerHTML = t.copyright;

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    normalizeLegacyMarkup();
    localStorage.setItem('lwt-lang', lang);
    closeSidebar();
  }

  function loadLanguage(lang) {
    if (window.LWT_TRANSLATIONS[lang]) {
      return Promise.resolve(window.LWT_TRANSLATIONS[lang]);
    }

    if (loadCache[lang]) {
      return loadCache[lang];
    }

    loadCache[lang] = new Promise(function (resolve, reject) {
      const script = document.createElement('script');
      script.src = languageFiles[lang];
      script.async = true;
      script.dataset.langFile = lang;
      script.onload = function () {
        if (window.LWT_TRANSLATIONS[lang]) {
          resolve(window.LWT_TRANSLATIONS[lang]);
          return;
        }

        reject(new Error('Language payload missing: ' + lang));
      };
      script.onerror = function () {
        reject(new Error('Failed to load language file: ' + lang));
      };
      document.head.appendChild(script);
    });

    return loadCache[lang];
  }

  function setLang(lang) {
    const targetLang = languageFiles[lang] ? lang : 'ar';

    return loadLanguage(targetLang)
      .then(function (translation) {
        applyLanguage(translation, targetLang);
      })
      .catch(function (error) {
        console.error(error);
        if (targetLang === 'ar') {
          return;
        }

        return loadLanguage('ar').then(function (translation) {
          applyLanguage(translation, 'ar');
        });
      });
  }

  document.addEventListener('click', function (e) {
    const langButton = e.target.closest('.lang-btn');
    if (langButton) {
      setLang(langButton.dataset.lang);
      return;
    }

    const tabButton = e.target.closest('.store-tab');
    if (tabButton) {
      const tabGroup = tabButton.closest('.tabbed-interface') || tabButton.closest('.stores-section');
      if (!tabGroup) return;

      tabGroup.querySelectorAll('.store-tab').forEach(function (tab) {
        tab.classList.remove('active');
      });
      tabButton.classList.add('active');

      tabGroup.querySelectorAll('.store-content, .interactive-panel').forEach(function (panel) {
        panel.classList.remove('active');
      });

      const tabId = tabButton.getAttribute('data-tab');
      const target = tabId ? tabGroup.querySelector('#' + tabId) : null;
      if (target) target.classList.add('active');
      return;
    }

    const imgEl = e.target.closest('.card-body img, .story-image img, .map-container img, .store-item img, .reward-item img');
    if (imgEl && imgEl.tagName === 'IMG') {
      const overlayImg = document.getElementById('overlayImage');
      const overlay = document.getElementById('imageOverlay');
      if (overlayImg && overlay) {
        overlayImg.src = imgEl.src;
        overlay.classList.add('active');
      }
      return;
    }

    if (e.target.closest('#imageOverlay')) {
      const overlay = document.getElementById('imageOverlay');
      if (overlay) overlay.classList.remove('active');
      return;
    }

    if (e.target.closest('#mobileMenu')) {
      openSidebar();
      return;
    }

    if (e.target.closest('#sidebarClose')) {
      closeSidebar();
      return;
    }

    if (e.target.id === 'sidebarOverlay') {
      closeSidebar();
      return;
    }

    if (e.target.closest('.sidebar-nav a')) {
      closeSidebar();
    }
  });

  function openSidebar() {
    const sidebar = document.getElementById('mobileSidebar');
    const overlay = document.getElementById('sidebarOverlay');
    if (!sidebar || !overlay) return;

    sidebar.classList.add('open');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeSidebar() {
    const sidebar = document.getElementById('mobileSidebar');
    const overlay = document.getElementById('sidebarOverlay');
    if (!sidebar || !overlay) return;

    sidebar.classList.remove('open');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  setLang(localStorage.getItem('lwt-lang') || 'ar');
})();