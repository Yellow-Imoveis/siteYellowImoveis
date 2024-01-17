const SetaDireita = ({size}) => {
  return (
    <svg width={`${size || 60}px`} height={`${size || 60}px`} viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" fill="white"/>
      <path d="M9.5 7L14.5 12L9.5 17" stroke="#000000" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export default SetaDireita;