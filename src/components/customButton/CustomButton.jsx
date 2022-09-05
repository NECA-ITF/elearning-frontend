import React from 'react';
import './CustomButton.css';

function CustomButton({title, ...otherProps}) {
  return (
    <div>
        <button {...otherProps} className='button'>{title}<span>{title}</span></button>
    </div>
  )
}

export default CustomButton;