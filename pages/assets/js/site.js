document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#site-nav');

  if (button && nav) {
    button.addEventListener('click', () => {
      const isOpen = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', String(!isOpen));
      nav.classList.toggle('is-open', !isOpen);
    });

    nav.addEventListener('click', (event) => {
      if (event.target.closest('a')) {
        button.setAttribute('aria-expanded', 'false');
        nav.classList.remove('is-open');
      }
    });
  }

  const pageName = location.pathname.split('/').pop().replace(/\.html$/, '') || 'index';
  document.querySelectorAll(`[data-page="${pageName}"]`).forEach((link) => {
    link.setAttribute('aria-current', 'page');
  });
});
