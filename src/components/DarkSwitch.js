import React from 'react';

function ToggleSwitch({modeToggle, setModeToggle, pColor}) {
  // Define the boolean useState variable

  // Define a function to toggle the boolean value
  const handleToggle = () => {
    setModeToggle(prevState => !prevState);
  };

  return (
    <div 
      onClick={() => handleToggle()} 
      style={{
        width: '60px',
        height: '30px',
        background: 'none',
        display: 'inline-block',
        cursor: 'pointer',
        borderRadius: '15px',
        position: 'relative',
        border: `1px solid ${pColor}`
      }}
    >
      <div
        style={{
          width: '24px',
          height: '24px',
          backgroundColor: pColor,
          borderRadius: '50%',
          position: 'absolute',
          top: '1px',
          left: modeToggle ? '30px' : '1px',
          transition: 'left 0.3s',
          transform: 'translate(1px, 1px)'
        }}
      ></div>
    </div>
  );
}

export default ToggleSwitch;
