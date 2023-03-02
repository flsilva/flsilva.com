const resizePreservingAspectRatio = (srcWidth, srcHeight, maxWidth, maxHeight) => {
  var ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);

  return { width: srcWidth*ratio, height: srcHeight*ratio };
}

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

  let imagesContainer = getImagesContainerElement();
  if (imagesContainer === undefined || imagesContainer === null) return;

  const isPortfolioIndexPage = document.getElementById('portfolio-page') ? true : false;
  let images;

  if (isPortfolioIndexPage) {
    imagesContainer = document.querySelectorAll('[class*="card-img-container"]');

    imagesContainer.forEach((imagesContainer, index) => {
      const images = getImages(imagesContainer);
      if (images === undefined || images === null) return;

      currentTrySetupPortfolioProjectCarousel = totalTimesTrySetupPortfolioProjectCarousel;

      let imgWidth = parseInt(imagesContainer.style.width, 10);
      const imgHeight = parseInt(imagesContainer.style.height, 10);
      let maxWidth = 0;
      const htmlElement = document.querySelector('html');
      if (htmlElement) maxWidth = htmlElement.clientWidth - 70;
      if (maxWidth > 960) maxWidth = 960;
      const newImageSize = resizePreservingAspectRatio(imgWidth, imgHeight, maxWidth, 960);

      imagesContainer.style.width = `${newImageSize.width}px`;
      imagesContainer.style.height = `${newImageSize.height}px`;

      images.forEach((image, index) => {
        image.style.width = `${newImageSize.width}px`;
        image.style.height = `${newImageSize.height}px`;
        image.style.transform = `translateX(${index * 100}%)`;
      });
    });
  } else {
    images = getImages(imagesContainer);
    if (images === undefined || images === null) return;

    currentTrySetupPortfolioProjectCarousel = totalTimesTrySetupPortfolioProjectCarousel;

    images.forEach((image, index) => {
      let imgWidth = parseInt(imagesContainer.style.width, 10);
      const imgHeight = parseInt(imagesContainer.style.height, 10);
      let maxWidth = 0;
      const htmlElement = document.querySelector('html');
      if (htmlElement) maxWidth = htmlElement.clientWidth - 70;
      if (maxWidth > 960) maxWidth = 960;
      const newImageSize = resizePreservingAspectRatio(imgWidth, imgHeight, maxWidth, 960);

      imagesContainer.style.width = `${newImageSize.width}px`;
      imagesContainer.style.height = `${newImageSize.height}px`;

      image.style.width = `${newImageSize.width}px`;
      image.style.height = `${newImageSize.height}px`;
      image.style.transform = `translateX(${index * 100}%)`;
    });
  }




  // If this is the Portfolio page (index with all images)
  // there's n carousel, just resiing images.
  if (isPortfolioIndexPage) return;

  // If it's a Portfolop project page then we proceed
  // with the logic that implements a single carousel of images.
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

const getImagesContainerElement = () => document.getElementById('portfolio-project-images-container');

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
