// Apply saved appearance before CSS paints. Storage can be unavailable in private mode.
(() => {
  let theme;
  let language;
  try {
    theme = localStorage.getItem('termida-theme');
    language = localStorage.getItem('termida-language');
  } catch (_) { /* Continue with system appearance and English. */ }
  document.documentElement.dataset.theme = ['light', 'dark'].includes(theme)
    ? theme : (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  document.documentElement.lang = ['en', 'uz', 'ru'].includes(language) ? language : 'en';
})();
