/* eslint-disable */
document.addEventListener('DOMContentLoaded', function () {
  const windowEl = window;
  const body = document.body;
  const main = document.getElementById('main');
  const panels = main ? main.querySelectorAll('.panel') : [];
  const nav = document.getElementById('nav');
  const navLinks = nav ? nav.querySelectorAll('a') : [];

  // Configuração de breakpoints
  const breakpoints = {
    xlarge: [1281, 1680],
    large: [981, 1280],
    medium: [737, 980],
    small: [361, 736],
    xsmall: [null, 360],
  };

  // Remover a classe 'is-preload' após o carregamento
  windowEl.addEventListener('load', () => {
    setTimeout(() => {
      body.classList.remove('is-preload');
    }, 100);
  });

  // Navegação por links
  navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      const href = link.getAttribute('href');
      if (!href.startsWith('#') || !document.querySelector(href)) return;

      event.preventDefault();
      event.stopPropagation();

      if (window.location.hash !== href) {
        window.location.hash = href;
      }
    });
  });

  // Inicialização do painel ao carregar a página
  (function initPanel() {
    let panel, link;
    if (window.location.hash) {
      panel = document.querySelector(window.location.hash);
      link = nav.querySelector(`[href="${window.location.hash}"]`);
    }

    if (!panel) {
      panel = panels[0];
      link = navLinks[0];
    }

    panels.forEach((p) => {
      if (p !== panel) {
        p.classList.add('inactive');
        p.style.display = 'none';
      }
    });

    if (link) link.classList.add('active');
    windowEl.scrollTo(0, 0);
  })();

  // Trocar de painel ao alterar o hash
  windowEl.addEventListener('hashchange', () => {
    let panel = document.querySelector(window.location.hash);
    let link = nav.querySelector(`[href="${window.location.hash}"]`);

    if (!panel) {
      panel = panels[0];
      link = navLinks[0];
    }

    panels.forEach((p) => {
      p.classList.add('inactive');
      p.style.display = 'none';
    });

    if (panel) {
      panel.classList.remove('inactive');
      panel.style.display = 'block';
    }

    navLinks.forEach((l) => l.classList.remove('active'));
    if (link) link.classList.add('active');
  });
});
