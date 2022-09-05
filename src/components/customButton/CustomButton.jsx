import React from 'react';
import './CustomButton.css';

function CustomButton({title, ...otherProps}) {
  return (
    <div>
        <button {...otherProps} className='button'>{title}<span className="text">Custom Button</span><span>Custom Button</span></button>
    </div>
  )
}

export default CustomButton;