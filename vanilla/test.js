
/*
=========
PORTFOLIO
=========
*/

console.log('its my portfolio');


/* !function() {
  try{
    var d = document.documentElement, c = d.classList;
    c.remove('light','dark');
    var e = localStorage.getItem('theme');

    if('system'===e||(!e&&false)) {
      var t = '(prefers-color-scheme: dark)', m = window.matchMedia(t);

      if(m.media!==t||m.matches) {
        d.style.colorScheme = 'dark';
        c.add('dark')
      }
      else {
        d.style.colorScheme = 'light';
        c.add('light');
      }
    }
    else if(e) {
      c.add(e|| '');
    }
    else {
      c.add('dark');
    }

    if(e==='light'||e==='dark'||!e)
      d.style.colorScheme=e||'dark';
  }
  catch(e)
  {}
}() */