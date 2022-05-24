(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const menuClBtnRef = document.querySelector('[data-menu-close-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');
  const Backdrop = document.querySelector('[backdrop-menu]');
  var body = document.body;

  menuBtnRef.addEventListener('click', () => {
    const expanded = menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menuBtnRef.classList.toggle('is-open');
    menuClBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);
    menuClBtnRef.setAttribute('aria-expanded', !expanded);

    mobileMenuRef.classList.toggle('is-open');
    Backdrop.classList.toggle('backdrop--is-hidden');
    body.classList.toggle('noscroll', !expanded);

    refs.menuBtnRef.addEventListener('click', toggleBackdrop);
    refs.menuClBtnRef.addEventListener('click', toggleBackdrop);
  });

  menuClBtnRef.addEventListener('click', () => {
    const expanded = menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menuBtnRef.classList.toggle('is-open');
    menuClBtnRef.classList.toggle('is-open');

    menuBtnRef.setAttribute('aria-expanded', !expanded);
    menuClBtnRef.setAttribute('aria-expanded', !expanded);

    mobileMenuRef.classList.toggle('is-open');
    Backdrop.classList.toggle('backdrop--is-hidden');

    body.classList.toggle('noscroll', !expanded);
  });
})();
