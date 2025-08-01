
/*
=============
THEME-INIT JS
=============
*/


(function() {
  const storedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  console.log();
  

  let theme;
  if (storedTheme) {
    theme = storedTheme;
  }
  else if (prefersDark) {
    theme = 'dark';
  }
  else {
    theme = 'light';
  }
  document.documentElement.setAttribute('data-theme', theme);
})();