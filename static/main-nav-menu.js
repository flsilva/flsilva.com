let totalTimesTrySetupNavMenu = 20;
let currentTrySetupNavMenu = 0;
let setupNavMenuInterval;

const setupNavMenu = () => {
  setupNavMenuInterval = setInterval(() => {
    _setupNavMenu();
  }, 200);
}

const _setupNavMenu = () => {
  if (currentTrySetupNavMenu === totalTimesTrySetupNavMenu) {
    clearInterval(setupNavMenuInterval);
    return;
  }
  currentTrySetupNavMenu++;

  const hamburgerMenuButton = document.getElementById('hamburger-menu-button');
  if (hamburgerMenuButton === null || hamburgerMenuButton === undefined) return;

  currentTrySetupNavMenu = totalTimesTrySetupNavMenu;

  hamburgerMenuButton.addEventListener('click', function() {
    document.getElementById('main-nav').classList.toggle('active');
  });

}

window.addEventListener('load', function() {
  setTimeout(() => {
    setupNavMenu();
  }, 100);
});
