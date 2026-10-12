/* eslint-disable no-param-reassign */
function setupMain() {
  const windowEl = window;
  const { body } = document;
  const main = document.getElementById('main');
  const panels = main ? main.querySelectorAll('.panel') : [];
  const nav = document.getElementById('nav');
  const navLinks = nav ? nav.querySelectorAll('a') : [];

  // Remover a classe 'is-preload' após o carregamento
  if (document.readyState === 'complete') {
    setTimeout(() => {
      body.classList.remove('is-preload');
    }, 100);
  } else {
    windowEl.addEventListener('load', () => {
      setTimeout(() => {
        body.classList.remove('is-preload');
      }, 100);
    });
  }

  // Navegação por links do menu
  navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      const href = link.getAttribute('href');
      if (!href || !href.startsWith('#') || !document.querySelector(href))
        return;

      event.preventDefault();
      event.stopPropagation();

      if (window.location.hash !== href) {
        window.location.hash = href;
      }
    });
  });

  // Inicialização do painel ao carregar a página
  (function initPanel() {
    let panel;
    let link;
    if (window.location.hash) {
      panel = document.querySelector(window.location.hash);
      link = nav ? nav.querySelector(`[href="${window.location.hash}"]`) : null;
    }

    if (!panel) {
      [panel] = panels;
      [link] = navLinks;
    }

    panels.forEach((p) => {
      if (p !== panel) {
        p.classList.add('inactive');
        p.style.display = 'none';
      }
    });

    if (panel) {
      panel.classList.remove('inactive');
      panel.style.display = '';
    }

    if (link) link.classList.add('active');
    windowEl.scrollTo(0, 0);
  })();

  // Trocar de painel ao alterar o hash
  windowEl.addEventListener('hashchange', () => {
    let panel = document.querySelector(window.location.hash);
    let link = nav
      ? nav.querySelector(`[href="${window.location.hash}"]`)
      : null;

    if (!panel) {
      [panel] = panels;
      [link] = navLinks;
    }

    panels.forEach((p) => {
      p.classList.add('inactive');
      p.style.display = 'none';
    });

    if (panel) {
      panel.classList.remove('inactive');
      panel.style.display = '';
    }

    navLinks.forEach((l) => l.classList.remove('active'));
    if (link) link.classList.add('active');
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', setupMain);
} else {
  setupMain();
}
