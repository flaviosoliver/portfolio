/* eslint-disable */
// Função para gerar uma lista de links a partir do nav.
function navList(nav) {
  const links = nav.querySelectorAll('a');
  const result = [];

  links.forEach((link) => {
    const indent = Math.max(
      0,
      link.closest('li') ? link.closest('li').length - 1 : 0
    );
    const href = link.getAttribute('href');
    const target = link.getAttribute('target');

    result.push(
      `<a class="link depth-${indent}" ${target ? `target="${target}"` : ''} ${
        href ? `href="${href}"` : ''
      }>
        <span class="indent-${indent}"></span>${link.textContent}
      </a>`
    );
  });

  return result.join('');
}

// Função para aplicar a funcionalidade de painel.
function panel(element, userConfig = {}) {
  const body = document.body;
  const defaultConfig = {
    delay: 0,
    hideOnClick: false,
    hideOnEscape: false,
    hideOnSwipe: false,
    resetScroll: false,
    resetForms: false,
    side: null,
    target: element,
    visibleClass: 'visible',
  };
  const config = { ...defaultConfig, ...userConfig };

  // Função interna para ocultar o painel
  function hidePanel(event) {
    if (!config.target.classList.contains(config.visibleClass)) return;

    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }

    config.target.classList.remove(config.visibleClass);

    setTimeout(() => {
      if (config.resetScroll) element.scrollTop = 0;

      if (config.resetForms) {
        const forms = element.querySelectorAll('form');
        forms.forEach((form) => form.reset());
      }
    }, config.delay);
  }

  // Esconder painel ao clicar em links
  if (config.hideOnClick) {
    const links = element.querySelectorAll('a');
    links.forEach((link) => {
      link.addEventListener('click', (event) => {
        const href = link.getAttribute('href');
        const target = link.getAttribute('target');

        if (!href || href === '#' || href === `#${element.id}`) return;

        event.preventDefault();
        hidePanel(event);

        setTimeout(() => {
          if (target === '_blank') window.open(href);
          else window.location.href = href;
        }, config.delay + 10);
      });
    });
  }

  // Ocultar painel ao clicar fora
  body.addEventListener('click', (event) => hidePanel(event));

  // Esconder painel ao pressionar ESC
  if (config.hideOnEscape) {
    window.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') hidePanel(event);
    });
  }

  return element;
}
// function navList(element) {
//   const links = element.querySelectorAll('a');
//   const result = [];

//   links.forEach((link) => {
//     const indent = Math.max(
//       0,
//       link.closest('li') ? link.closest('li').length - 1 : 0
//     );
//     const href = link.getAttribute('href');
//     const target = link.getAttribute('target');
//     result.push(
//       `<a class="link depth-${indent}" ${target ? `target="${target}"` : ''} ${
//         href ? `href="${href}"` : ''
//       }>` + `<span class="indent-${indent}"></span>${link.textContent}</a>`
//     );
//   });

//   return result.join('');
// }

// function panel(element, config) {
//   const defaults = {
//     delay: 0,
//     hideOnClick: false,
//     hideOnEscape: false,
//     hideOnSwipe: false,
//     resetScroll: false,
//     resetForms: false,
//     side: null,
//     target: element,
//     visibleClass: 'visible',
//   };

//   const settings = { ...defaults, ...config };

//   // Function to hide the panel
//   function hidePanel(event) {
//     if (!settings.target.classList.contains(settings.visibleClass)) return;

//     if (event) {
//       event.preventDefault();
//       event.stopPropagation();
//     }

//     settings.target.classList.remove(settings.visibleClass);

//     setTimeout(() => {
//       if (settings.resetScroll) element.scrollTop = 0;
//       if (settings.resetForms) {
//         const forms = element.querySelectorAll('form');
//         forms.forEach((form) => form.reset());
//       }
//     }, settings.delay);
//   }

//   // Hide on click
//   if (settings.hideOnClick) {
//     const links = element.querySelectorAll('a');
//     links.forEach((link) => {
//       link.addEventListener('click', (event) => {
//         const href = link.getAttribute('href');
//         const target = link.getAttribute('target');

//         if (!href || href === '#' || href === `#${element.id}`) return;

//         event.preventDefault();
//         event.stopPropagation();

//         hidePanel();

//         setTimeout(() => {
//           if (target === '_blank') window.open(href);
//           else window.location.href = href;
//         }, settings.delay + 10);
//       });
//     });
//   }

//   // Hide on escape keypress
//   if (settings.hideOnEscape) {
//     window.addEventListener('keydown', (event) => {
//       if (event.key === 'Escape') hidePanel(event);
//     });
//   }

//   // Handle touchstart and touchmove events
//   element.addEventListener('touchstart', (event) => {
//     element.touchPosX = event.touches[0].pageX;
//     element.touchPosY = event.touches[0].pageY;
//   });

//   element.addEventListener('touchmove', (event) => {
//     const diffX = element.touchPosX - event.touches[0].pageX;
//     const diffY = element.touchPosY - event.touches[0].pageY;

//     const th = element.offsetHeight;
//     const ts = element.scrollHeight - element.scrollTop;

//     if (settings.hideOnSwipe) {
//       const boundary = 20;
//       const delta = 50;
//       let result = false;

//       switch (settings.side) {
//         case 'left':
//           result = diffY < boundary && diffY > -boundary && diffX > delta;
//           break;
//         case 'right':
//           result = diffY < boundary && diffY > -boundary && diffX < -delta;
//           break;
//         case 'top':
//           result = diffX < boundary && diffX > -boundary && diffY > delta;
//           break;
//         case 'bottom':
//           result = diffX < boundary && diffX > -boundary && diffY < -delta;
//           break;
//         default:
//           break;
//       }

//       if (result) {
//         element.touchPosX = null;
//         element.touchPosY = null;
//         hidePanel();
//       }
//     }

//     if (
//       (element.scrollTop <= 0 && diffY < 0) ||
//       (ts > th - 2 && ts < th + 2 && diffY > 0)
//     ) {
//       event.preventDefault();
//       event.stopPropagation();
//     }
//   });

//   return element;
// }

export { navList, panel };
