import PropTypes from 'prop-types';
import TinySlider from "tiny-slider-react";
import { createCarouselSettings } from './PropertyDetailHero.config';
import { Image } from './PropertyDetailHero.image';
import { Control } from './PropertyDetailHero.control';

/**
 * @typedef {object} RootProps
 * @property {{src: string, position: number}[]} images - array of image objects
 * @property {null | (index: number) => void} onClick - function to handle click event
 */

/**
 * PropertyDetailHero component
 * @param {RootProps} props - component props
 */
function Root({ images, onClick }) {
  if (images.length === 0) return null;
  
  if (images.length === 1) {
    return (
      <div className="flex justify-center">
        <Image 
          src={images[0].src} 
          containerClassName={"h-[500px] w-[1100px]"} 
          onClick={onClick} 
        />
      </div>
    )
  }

  return (
    <div className="relative">
      {/* slider */}
      <TinySlider settings={createCarouselSettings(images)}>
        {images.map((image, index) => (
          <Image
            key={index} 
            index={index} 
            src={image.src} 
            containerClassName={"h-[500px]"}
            onClick={() => onClick(index)} 
          />
        ))}      
      </TinySlider>

      <Control 
        id="tns-controls" 
        containerClassName="absolute top-1/2 -translate-y-1/2 left-0 right-0 pb-10 px-4"
      />
    </div>
  );
}

// use PropTypes to validate the type of props passed to the component
Root.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      position: PropTypes.string.isRequired,
    })
  ).isRequired,

  onClick: PropTypes.func,
};

export { Root };