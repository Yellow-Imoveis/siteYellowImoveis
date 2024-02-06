import PropTypes from 'prop-types';
import { twMerge as tw } from 'tailwind-merge';

/**
 * @typedef {object} ControlProps
 * @property {string} id - id attribute
 * @property {string?} containerClassName - container class name
*/

/**
 * Control component used to render the control buttons for the image slider
 * @param {ControlProps} props - component props
 */
function Control({id, containerClassName}) {
  return (
    <div 
      id={id} 
      className={tw("flex justify-between pointer-events-none", containerClassName)}
    >
      {/* left button  */}
      <button 
        id="tns-prev-button" 
        className="btn btn-icon rounded-full bg-yellow-400 hover:bg-yellow-500 p-4 pointer-events-auto"
      >
        <i className="uil uil-angle-left-b text-3xl text-slate-900/60 flex justify-center pr-[2px]"></i>
      </button>
      
      {/* right button */}
      <button 
        id="tns-next-button" 
        className="btn btn-icon rounded-full bg-yellow-400 hover:bg-yellow-500 p-4 pointer-events-auto"
      >
        <i className="uil uil-angle-right-b text-3xl text-slate-900/60 flex justify-center pl-[2px]"></i>
      </button>
    </div>  
  );
}

Control.propTypes = {
  id: PropTypes.string.isRequired,
  containerClassName: PropTypes.string,
};

export { Control };