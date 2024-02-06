/**
 * Control component used to render the control buttons for the image slider
 */
function Control({id}) {
  return (
    <div 
      id={id} 
      className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pb-10 px-4 pointer-events-none"
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

export { Control };