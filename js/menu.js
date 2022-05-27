'use-strict';

(() => {
  const menuBtnRef = document.querySelector('[menu-button]');
  const menuClBtnRef = document.querySelector('[menu-close-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');
  const mobileHeaderRef = document.querySelector('.header');

  menuBtnRef.addEventListener('click', () => {
    const expanded = menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);

    mobileMenuRef.classList.toggle('is-open');
    mobileHeaderRef.classList.toggle('is-open');

    document.body.classList.toggle('noscroll');
  });

  menuClBtnRef.addEventListener('click', () => {
    const expanded = menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menuBtnRef.classList.remove('is-open');

    menuBtnRef.setAttribute('aria-expanded', !expanded);

    mobileMenuRef.classList.remove('is-open');
    mobileHeaderRef.classList.remove('is-open');

    document.body.classList.remove('noscroll');
  });
})();
