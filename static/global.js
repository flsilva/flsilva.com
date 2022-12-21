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
  const changeThemeButton = document.getElementById('change-theme-button');
  if (changeThemeButton === null || changeThemeButton === undefined) return;

  changeThemeButton.addEventListener('click', function(event) {
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
  const hamburgerMenuButton = document.getElementById('hamburger-menu-button');
  if (hamburgerMenuButton === null || hamburgerMenuButton === undefined) return;

  hamburgerMenuButton.addEventListener('click', function(event) {
    document.getElementById('main-nav').classList.toggle('active');
  });

}

/* ###################################################################### */
/* ################# Home's Recommendations Carousel #################### */
/* ###################################################################### */

const setupHome = () => {
  setupRecommendationCarousel();
  setupRecommendationButtons();
  setupRecommendationsGestures();
}

const setupRecommendationCarousel = () => {
  const recommendationsContainer = getRecommendationsContainerElement();
  if (recommendationsContainer === undefined || recommendationsContainer === null) return;

  recommendationsContainer.addEventListener("click", function () {
    window.open('https://www.linkedin.com/in/flsilva/details/recommendations/?detailScreenTabIndex=0', '_blank');
  });

  const recommendations = getRecommendationsElement(recommendationsContainer);
  if (recommendations === undefined || recommendations === null) return;

  recommendations.forEach((recommendation, index) => {
    recommendation.style.transform = `translateX(${index * 100}%)`;
  });

  setTimeout(() => {
    getRecommendationsContainerElement().style.display = 'flex';
    getRecommendationsButtonsElement().style.display = 'flex';
  }, 100);
}

const moveToNextRecommendation = () => {
  const recommendationsContainer = getRecommendationsContainerElement();
  if (recommendationsContainer === undefined || recommendationsContainer === null) return;

  const recommendations = getRecommendationsElement(recommendationsContainer);
  if (recommendations === undefined || recommendations === null) return;

  const totalRecommendations = recommendations.length - 1;

  if (currentRecommendation === totalRecommendations) {
    currentRecommendation = 0;
  } else {
    currentRecommendation++;
  }

  changeRecommendation(currentRecommendation);
}

const moveToPrevRecommendation = () => {
  const recommendationsContainer = getRecommendationsContainerElement();
  if (recommendationsContainer === undefined || recommendationsContainer === null) return;

  const recommendations = getRecommendationsElement(recommendationsContainer);
  if (recommendations === undefined || recommendations === null) return;

  const totalRecommendations = recommendations.length - 1;

  if (currentRecommendation === 0) {
    currentRecommendation = totalRecommendations;
  } else {
    currentRecommendation--;
  }

  changeRecommendation(currentRecommendation);
}

let currentRecommendation = 0;

const setupRecommendationButtons = () => {
  const nextButton = document.getElementById("next-button");
  const prevButton = document.getElementById("prev-button");

  if (nextButton === undefined || nextButton === null || prevButton === undefined || prevButton === null) return;

  nextButton.addEventListener("click", function () {
    moveToNextRecommendation();
  });

  prevButton.addEventListener("click", function () {
    moveToPrevRecommendation();
  });

  changeRecommendation(currentRecommendation);
}

const setupRecommendationsGestures = () => {
  const recommendationsContainer = getRecommendationsContainerElement();
  if (recommendationsContainer === undefined || recommendationsContainer === null) return;

  let touchClientXStart = null;
  let touchClientYStart = null;

  const handleTouchStart = (event) => {
      const firstTouch = event.touches[0];
      touchClientXStart = firstTouch.clientX;
      touchClientYStart = firstTouch.clientY;
  };

  let touchClientXMove = null;
  let touchClientYMove = null;

  const handleTouchMove = (event) => {
      if (touchClientXStart === null || touchClientXStart === undefined || touchClientYStart === null || touchClientYStart === undefined) return;

      touchClientXMove = event.touches[0].clientX;
      touchClientYMove = event.touches[0].clientY;
  };

  const handleTouchEnd = () => {
    const touchClientXDiff = touchClientXStart - touchClientXMove;
    const touchClientYDiff = touchClientYStart - touchClientYMove;

    // Was it a mostly horizontal or vertical swipe gesture?
    if (Math.abs(touchClientXDiff) > Math.abs(touchClientYDiff) ) {
      if ( touchClientXDiff > 0 ) {
          /* right swipe */
          moveToNextRecommendation();
      } else {
          /* left swipe */
          moveToPrevRecommendation();
      }
    } else {
      if (touchClientYDiff > 0) {
          /* down swipe */
      } else {
          /* up swipe */
      }
    }

    /* reset values */
    touchClientXMove = null;
    touchClientYMove = null;
  }

  recommendationsContainer.addEventListener('touchstart', handleTouchStart, false);
  recommendationsContainer.addEventListener('touchmove', handleTouchMove, false);
  recommendationsContainer.addEventListener('touchend', handleTouchEnd, false);
}

const getRecommendationsContainerElement = () => document.getElementById('recommendations');

const getRecommendationsElement = (recommendationsContainer) => recommendationsContainer.querySelectorAll('[class*="recommendation-container"]');

const getRecommendationsButtonsElement = () => document.getElementById('recommendations-buttons');

const changeRecommendation = (currentRecommendation) => {
  const recommendationsContainer = getRecommendationsContainerElement();
  if (recommendationsContainer === undefined || recommendationsContainer === null) return;

  const recommendations = getRecommendationsElement(recommendationsContainer);
  if (recommendations === undefined || recommendations === null) return;

  recommendations.forEach((recommendation, index) => {
    recommendation.style.transform = `translateX(${100 * (index - currentRecommendation)}%)`;
  });

  const recommendationsButtons = document.getElementById('recommendations-buttons');
  if (recommendationsButtons === undefined || recommendationsButtons === null) return;

  const indicators = recommendationsButtons.querySelectorAll('[class*="recommendation-indicator"]');

  indicators.forEach((indicator, index) => {
    indicator.classList.toggle('active', currentRecommendation === index);
  });
}

/* ###################################################################### */
/* ############################## Global ################################ */
/* ###################################################################### */

window.addEventListener('load', function(event) {
  setTimeout(() => {
    setupTheming();
    setupNavMenu();
    setupHome();
  }, 1000);
});
