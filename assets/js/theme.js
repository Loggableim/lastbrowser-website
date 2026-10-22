/**
 * LastBrowser Theme Switcher
 * Supports Dark/Light mode with persistence in localStorage
 */
(function() {
  function getPreferredTheme() {
    var stored = localStorage.getItem('theme');
    if (stored) return stored;
    return 'dark'; // Default to dark cyberpunk brand theme
  }

  function getToggleLabel() {
    var lang = (typeof document !== 'undefined' && document.documentElement && document.documentElement.lang) || 'en';
    if (lang.toLowerCase().indexOf('de') === 0) return 'Zwischen hellem und dunklem Design wechseln';
    return 'Toggle light/dark theme';
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    var toggles = document.querySelectorAll('.theme-toggle');
    toggles.forEach(function(btn) {
      btn.setAttribute('aria-label', getToggleLabel());
      btn.innerHTML = '<span aria-hidden="true">' + (theme === 'dark' ? '☀️' : '🌙') + '</span>';
    });
  }

  var currentTheme = getPreferredTheme();
  applyTheme(currentTheme);

  window.toggleTheme = function() {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', currentTheme);
    applyTheme(currentTheme);
  };

  document.addEventListener('DOMContentLoaded', function() {
    applyTheme(currentTheme);
  });
})();
