/**
 * Calculate the number of items to show in the slider
 * @param {number} length - actual number of images
 * @param {number} target - target number of images to show
 * @returns 
 */
function calcItemsSpace(length, target) {
  if (length >= target) return target;    
  return length;
};

/**
 * Create carousel settings
 * @param {{src: string, position: number}[]} images - array of image objects
 * @returns {object} 
 */
function createCarouselSettings(images) {
  return {
    loop: false, // disable loop
    mouseDrag: true, // enable drag image to move around
    items: 1, // show 1 image at a time by default
    gutter: 10, // space between images
    controls: false, // hide control buttons (prev/next)
    navPosition: "bottom",
    responsive: {
      768: {
        items: calcItemsSpace(images.length, 2.2)
      },
      1400: {
        items: calcItemsSpace(images.length, 3.4),
      },
    }
  };

}

export { createCarouselSettings };