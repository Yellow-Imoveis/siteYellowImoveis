import PropTypes from 'prop-types';
import { twMerge as tw } from 'tailwind-merge';

/**
 * @typedef {object} ImageProps
 * @property {string} src - image source
 * @property {number?} index - image index
 * @property {string?} containerClassName - container class name
 * @property {null | () => void} onClick - function to handle click event
 */

/**
 * Image component
 * @param {ImageProps} props - component props
 */
function Image({ src, index, containerClassName, onClick }) {
  return (
    <div
      className={tw("group relative", containerClassName)}
    >
      <img
        src={src}
        className={"object-cover w-full h-full"}
        alt={`property ${index && index + 1}`}
        onClick={onClick} />

      {/* hover effect */}
      <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>

      {/* centered overlay */}
      <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 invisible group-hover:visible">
        <button className="btn btn-icon bg-yellow-500 hover:bg-yellow-600 text-white rounded-full lightbox">
          <i className="uil uil-camera"></i>
        </button>
      </div>
    </div>
  );
}

// use PropTypes to validate the type of props passed to the component
Image.propTypes = {
  src: PropTypes.string.isRequired,
  index: PropTypes.number,
  containerClassName: PropTypes.string,
  onClick: PropTypes.func,
};

export { Image };