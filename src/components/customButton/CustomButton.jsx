import React from 'react';
import './CustomButton.css';

function CustomButton({title, ...otherProps}) {
  return (
    <div>
        <button {...otherProps} className='button'><span className="text"></span>{title}</button>
    </div>
  )
}

export default CustomButton;