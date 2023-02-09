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


let totalTimesTrySetupTheming = 20;
let currentTrySetupTheming = 0;
let setupThemingInterval;

const setupTheming = () => {
  setupThemingInterval = setInterval(() => {
    _setupTheming();
  }, 200);
}

const _setupTheming = () => {
  if (currentTrySetupTheming === totalTimesTrySetupTheming) {
    clearInterval(setupThemingInterval);
    return;
  }
  currentTrySetupTheming++;

  const changeThemeButton = document.getElementById('change-theme-button');
  if (changeThemeButton === null || changeThemeButton === undefined) return;

  currentTrySetupTheming = totalTimesTrySetupTheming;

  changeThemeButton.addEventListener('click', function() {
    toggleTheme();
  });
}

if (currentTheme === undefined || currentTheme === null) {
  currentTheme = prefersDarkTheme.matches ? THEME_DARK_NAME : THEME_LIGHT_NAME;
}

changeTheme(currentTheme);

window.addEventListener('load', function() {
  setTimeout(() => {
    setupTheming();
  }, 100);
});
