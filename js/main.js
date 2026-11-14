'use strict';

const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() {
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-label', window.TermidaI18n.t('Open navigation'));
  navigation.classList.remove('is-open');
}
toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') !== 'true';
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', window.TermidaI18n.t(open ? 'Close navigation' : 'Open navigation'));
  navigation.classList.toggle('is-open', open);
});
navigation.addEventListener('click', (event) => {
  if (event.target.closest('a')) closeMenu();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    toggle.focus();
  }
});
document.addEventListener('click', (event) => {
  if (!event.target.closest('.nav-shell')) closeMenu();
});
window.matchMedia('(min-width: 1000px)').addEventListener('change', closeMenu);
document.querySelector('#year').textContent = new Date().getFullYear();

document.querySelectorAll('[data-platform]').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-platform]').forEach(choice => {
      const selected = choice === button;
      choice.setAttribute('aria-pressed', String(selected));
      document.getElementById(choice.getAttribute('aria-controls')).hidden = !selected;
    });
  });
});
