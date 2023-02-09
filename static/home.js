const setupHome = () => {
  setupRecommendationCarousel();
  setupRecommendationButtons();
  setupRecommendationsGestures();
}

let totalTimesTrySetupRecommendationCarousel = 20;
let currentTrySetupRecommendationCarousel = 0;
let setupRecommendationCarouselInterval;

const setupRecommendationCarousel = () => {
  setupRecommendationCarouselInterval = setInterval(() => {
    _setupRecommendationCarousel();
  }, 200);
}

const _setupRecommendationCarousel = () => {
  if (currentTrySetupRecommendationCarousel === totalTimesTrySetupRecommendationCarousel) {
    clearInterval(setupRecommendationCarouselInterval);
    return;
  }
  currentTrySetupRecommendationCarousel++;

  const recommendationsContainer = getRecommendationsContainerElement();
  if (recommendationsContainer === undefined || recommendationsContainer === null) return;

  recommendationsContainer.addEventListener("click", function () {
    window.open('https://www.linkedin.com/in/flsilva/details/recommendations/?detailScreenTabIndex=0', '_blank');
  });

  const recommendations = getRecommendationsElement(recommendationsContainer);
  if (recommendations === undefined || recommendations === null) return;

  currentTrySetupRecommendationCarousel = totalTimesTrySetupRecommendationCarousel;

  recommendations.forEach((recommendation, index) => {
    recommendation.style.transform = `translateX(${index * 100}%)`;
  });

  recommendationsContainer.style.display = 'flex';
  getRecommendationsButtonsElement().style.display = 'flex';
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

let totalTimesTrySetupRecommendationCarouselButtons = 20;
let currentTrySetupRecommendationCarouselButtons = 0;
let setupRecommendationCarouselButtonsInterval;

let currentRecommendation = 0;

const setupRecommendationButtons = () => {
  setupRecommendationCarouselButtonsInterval = setInterval(() => {
    _setupRecommendationButtons();
  }, 200);
}

const _setupRecommendationButtons = () => {
  if (currentTrySetupRecommendationCarouselButtons === totalTimesTrySetupRecommendationCarouselButtons) {
    clearInterval(setupRecommendationCarouselButtonsInterval);
    return;
  }
  currentTrySetupRecommendationCarouselButtons++;

  const nextButton = document.getElementById("next-button");
  const prevButton = document.getElementById("prev-button");

  if (nextButton === undefined || nextButton === null || prevButton === undefined || prevButton === null) return;

  currentTrySetupRecommendationCarouselButtons = totalTimesTrySetupRecommendationCarouselButtons;

  nextButton.addEventListener("click", function () {
    moveToNextRecommendation();
  });

  prevButton.addEventListener("click", function () {
    moveToPrevRecommendation();
  });

  changeRecommendation(currentRecommendation);
}

let totalTimesTrySetupRecommendationCarouselGestures = 20;
let currentTrySetupRecommendationCarouselGestures = 0;
let setupRecommendationCarouselGesturesInterval;

const setupRecommendationsGestures = () => {
  setupRecommendationCarouselGesturesInterval = setInterval(() => {
    _setupRecommendationsGestures();
  }, 200);
}

const _setupRecommendationsGestures = () => {
  if (currentTrySetupRecommendationCarouselGestures === totalTimesTrySetupRecommendationCarouselGestures) {
    clearInterval(setupRecommendationCarouselGesturesInterval);
    return;
  }
  currentTrySetupRecommendationCarouselGestures++;

  const recommendationsContainer = getRecommendationsContainerElement();
  if (recommendationsContainer === undefined || recommendationsContainer === null) return;

  currentTrySetupRecommendationCarouselGestures = totalTimesTrySetupRecommendationCarouselGestures;

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

window.addEventListener('load', function() {
  setTimeout(() => {
    setupHome();
  }, 100);
});
