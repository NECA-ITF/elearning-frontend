import React from 'react';
import './CustomInput.css';

function CustomInput({placeholder, type, ...otherProps}) {
  return (
    <div>
        <input {...otherProps} placeholder={placeholder} type={type} className='input' />
    </div>
  )
}

export default CustomInput;