/* ###################################################################### */
/* ############################## Theming ############################### */
/* ###################################################################### */

const THEME_NAME = 'theme';
const THEME_DARK_NAME = 'dark';
const THEME_LIGHT_NAME = 'light';

const prefersDarkTheme = window.matchMedia(`(prefers-color-scheme: ${THEME_DARK_NAME})`);
let currentTheme = localStorage.getItem(THEME_NAME);

const changeTheme = (colorTheme) => {
  if (colorTheme === THEME_DARK_NAME) {
    document.getElementsByTagName('html')[0].className = `${THEME_NAME}-${THEME_DARK_NAME}`;
  } else {
    document.getElementsByTagName('html')[0].className = `${THEME_NAME}-${THEME_LIGHT_NAME}`;
  }

  currentTheme = colorTheme;

  try {
    localStorage.setItem(THEME_NAME, currentTheme);
  } catch (error) {
    // do nothing. user's device is probably full.
  }
}

const toggleTheme = () => {
  currentTheme === THEME_DARK_NAME ? changeTheme(THEME_LIGHT_NAME) : changeTheme(THEME_DARK_NAME);
}

prefersDarkTheme.addEventListener('change', function (event) {
  const colorTheme = event.matches ? THEME_DARK_NAME : THEME_LIGHT_NAME;

  changeTheme(colorTheme)
});

const setupTheming = () => {
  document.getElementById('change-theme-button').addEventListener('click', function(event) {
    toggleTheme();
  });
}

if (currentTheme === undefined || currentTheme === null) {
  currentTheme = prefersDarkTheme.matches ? THEME_DARK_NAME : THEME_LIGHT_NAME;
}

changeTheme(currentTheme);

/* ###################################################################### */
/* ############################# Menu Nav ############################### */
/* ###################################################################### */

const setupNavMenu = () => {
  console.log('setupNavMenu() - document.getElementById("hamburger-menu-button"): ', document.getElementById('hamburger-menu-button'));
  document.getElementById('hamburger-menu-button').addEventListener('click', function(event) {
    document.getElementById('main-nav').classList.toggle('active');
  });

}

/* ###################################################################### */
/* ############################## Global ################################ */
/* ###################################################################### */

window.addEventListener('load', function(event) {
  setTimeout(() => {
    setupTheming();
    setupNavMenu();
  }, 1000);
});
