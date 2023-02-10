const setupPortfolioProject = () => {
  setupPortfolioProjectCarousel();
}

let totalTimesTrySetupPortfolioProjectCarousel = 20;
let currentTrySetupPortfolioProjectCarousel = 0;
let setupPortfolioProjectCarouselInterval;

const setupPortfolioProjectCarousel = () => {
  setupPortfolioProjectCarouselInterval = setInterval(() => {
    _setupPortfolioProjectCarousel();
  }, 200);
}

const _setupPortfolioProjectCarousel = () => {
  if (currentTrySetupPortfolioProjectCarousel === totalTimesTrySetupPortfolioProjectCarousel) {
    clearInterval(setupPortfolioProjectCarouselInterval);
    return;
  }
  currentTrySetupPortfolioProjectCarousel++;

  const imagesContainer = getImagesContainerElement();
  if (imagesContainer === undefined || imagesContainer === null) return;

  const images = getImages(imagesContainer);
  if (images === undefined || images === null) return;

  currentTrySetupPortfolioProjectCarousel = totalTimesTrySetupPortfolioProjectCarousel;

  images.forEach((image, index) => {
    image.style.transform = `translateX(${index * 100}%)`;
  });

  setTimeout(() => {
    imagesContainer.style.opacity = 1;

    images.forEach((image) => {
      image.style.transition = 'all 0.5s ease 0s';
    });

    setInterval(moveToNextImage, 3000);
  }, 100);
}

let currentImage = 0;

const moveToNextImage = () => {
  const imagesContainer = getImagesContainerElement();
  if (imagesContainer === undefined || imagesContainer === null) return;

  const images = getImages(imagesContainer);
  if (images === undefined || images === null) return;

  const totalImages = images.length - 1;

  if (currentImage === totalImages) {
    currentImage = 0;
  } else {
    currentImage++;
  }

  changeImage(currentImage);
}

const moveToPrevImage = () => {
  const imagesContainer = getImagesContainerElement();
  if (imagesContainer === undefined || imagesContainer === null) return;

  const images = getImages(imagesContainer);
  if (images === undefined || images === null) return;

  const totalImages = images.length - 1;

  if (currentImage === 0) {
    currentImage = totalImages;
  } else {
    currentImage--;
  }

  changeImage(currentImage);
}

const getImagesContainerElement = () => document.getElementById('portfolio-project-carousel-container');

const getImages = (imagesContainer) => imagesContainer.querySelectorAll('[class*="gatsby-image-wrapper"]');

const changeImage = (currentImage) => {
  const imagesContainer = getImagesContainerElement();
  if (imagesContainer === undefined || imagesContainer === null) return;

  const images = getImages(imagesContainer);
  if (images === undefined || images === null) return;

  images.forEach((images, index) => {
    images.style.transform = `translateX(${100 * (index - currentImage)}%)`;
  });
}

window.addEventListener('load', function() {
  setTimeout(() => {
    setupPortfolioProject();
  }, 100);
});
