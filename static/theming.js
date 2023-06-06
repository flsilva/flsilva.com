const THEME_NAME = 'theme';
const THEME_DARK_NAME = 'dark';
const THEME_LIGHT_NAME = 'light';

const prefersDarkTheme = window.matchMedia(`(prefers-color-scheme: ${THEME_DARK_NAME})`);

/*
 * Disabling theming for now.
 * There's an issue with Dark / Light theming.
 * The following was tested on macOS Ventura.
 * If the OS's theme is dark and you set the website to be light,
 * the website's background flashes black first then updates to white.
 * It's weird and annoying.

*/
// let currentTheme = localStorage.getItem(THEME_NAME);
let currentTheme = THEME_LIGHT_NAME;
/* */

let head;
let githubLightSyntaxHighlighterLinkStyle;
let githubDarkSyntaxHighlighterLinkStyle;

const setupExternalCssFiles = () => {
  head = document.getElementsByTagName('head')[0];

  githubLightSyntaxHighlighterLinkStyle = document.createElement('link');
  githubLightSyntaxHighlighterLinkStyle.rel = 'stylesheet';
  githubLightSyntaxHighlighterLinkStyle.href = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/github.min.css';
  githubLightSyntaxHighlighterLinkStyle.integrity = 'sha512-0aPQyyeZrWj9sCA46UlmWgKOP0mUipLQ6OZXu8l4IcAmD2u31EPEy9VcIMvl7SoAaKe8bLXZhYoMaE/in+gcgA==';
  githubLightSyntaxHighlighterLinkStyle.crossOrigin = 'anonymous';
  githubLightSyntaxHighlighterLinkStyle.referrerPolicy = 'no-referrer';

  githubDarkSyntaxHighlighterLinkStyle = document.createElement('link');
  githubDarkSyntaxHighlighterLinkStyle.rel = 'stylesheet';
  githubDarkSyntaxHighlighterLinkStyle.href = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/github-dark.min.css';
  githubDarkSyntaxHighlighterLinkStyle.integrity = 'sha512-rO+olRTkcf304DQBxSWxln8JXCzTHlKnIdnMUwYvQa9/Jd4cQaNkItIUj6Z4nvW1dqK0SKXLbn9h4KwZTNtAyw==';
  githubDarkSyntaxHighlighterLinkStyle.crossOrigin = 'anonymous';
  githubDarkSyntaxHighlighterLinkStyle.referrerPolicy = 'no-referrer';
}

const changeTheme = (colorTheme) => {
  if (colorTheme === THEME_DARK_NAME) {
    document.getElementsByTagName('html')[0].className = `${THEME_NAME}-${THEME_DARK_NAME}`;
    head.appendChild(githubLightSyntaxHighlighterLinkStyle);

    if (githubDarkSyntaxHighlighterLinkStyle.parent) {
      githubDarkSyntaxHighlighterLinkStyle.parent.removeChild(githubDarkSyntaxHighlighterLinkStyle);
    }
  } else {
    document.getElementsByTagName('html')[0].className = `${THEME_NAME}-${THEME_LIGHT_NAME}`;
    head.appendChild(githubDarkSyntaxHighlighterLinkStyle);

    if (githubLightSyntaxHighlighterLinkStyle.parent) {
      githubLightSyntaxHighlighterLinkStyle.parent.removeChild(githubLightSyntaxHighlighterLinkStyle);
    }
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

window.addEventListener('load', function() {
  setupExternalCssFiles();
  changeTheme(currentTheme);

  setTimeout(() => {
    setupTheming();
  }, 100);
});
