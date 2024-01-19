import PropTypes from 'prop-types';
import { Image } from './PropertyDetailHero.image';

/**
 * PropertyDetailHero component
 * @param {object} props - component props
 * @param {{src: string, position: number}[]} props.images - array of image objects
 * @param {null | (index: number) => void} props.onClick - function to handle click event
 */
function Root({ images, onClick }) {
  if (images.length === 0) return null;

  const firstImage = images[0];
  const restImages = images.slice(1);

  if (images.length === 1) return (
    <Image
      src={firstImage.src} 
      containerClassName={"h-[500px]"}
    />
  )

  return (
    // 4x4 grid 
    <div className="relative px-2 grid grid-cols-4 grid-rows-4 gap-2 h-screen md:h-[500px]">
      {/* mobile: 4x2  */}
      {/* desktop: 2x4  */}
      <Image 
        src={firstImage.src}
        index={0}
        containerClassName="col-span-4 row-span-2 md:col-span-2 md:row-span-4"
        onClick={() => onClick?.(0)}
      /> 

      {/* mobile: 2x1  */}
      {/* desktop: 1x2  */}
      {restImages.map((image, index) => {
        return <Image 
          index={index + 1} 
          key={image.src}
          src={image.src} 
          containerClassName={"col-span-2 row-span-1 md:col-span-1 md:row-span-2"}
          onClick={() => onClick?.(index + 1)}
        />
      })}
    </div>
  )
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