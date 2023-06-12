const setupHome = () => {
  setupRecommendationsLink();
}

let totalTimesTrySetupRecommendationsLink = 20;
let currentTrySetupRecommendationsLink = 0;
let setupRecommendationsLinkInterval;

const setupRecommendationsLink = () => {
  setupRecommendationsLinkInterval = setInterval(() => {
    _setupRecommendationsLink();
  }, 200);
}

const _setupRecommendationsLink = () => {
  if (currentTrySetupRecommendationsLink === totalTimesTrySetupRecommendationsLink) {
    clearInterval(setupRecommendationsLinkInterval);
    return;
  }
  currentTrySetupRecommendationsLink++;

  const recommendationsContainer = getRecommendationsListElement();
  if (recommendationsContainer === undefined || recommendationsContainer === null) return;

  currentTrySetupRecommendationsLink = totalTimesTrySetupRecommendationsLink;

  recommendationsContainer.addEventListener("click", function () {
    window.open('https://www.linkedin.com/in/flsilva/details/recommendations/?detailScreenTabIndex=0', '_self');
  });
}

const getRecommendationsListElement = () => document.getElementById('recommendations-list');

window.addEventListener('load', function() {
  setTimeout(() => {
    setupHome();
  }, 100);
});
