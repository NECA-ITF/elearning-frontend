import React from 'react'
import CustomButton from '../customButton/CustomButton';
import './ContactItem.css'
function ContactItem({ msg, index }) {
  return (
    <div className='contact-details'>
        <input type="checkbox" name="tick" id="tick" />
        <p className="serial-no item">{index}</p>
        <div className='contact-name item' >
             <p>{msg.name}</p>
        </div>
        <div className='contact-number item'>
            <p>{msg.phone}</p>
        </div>
        <div className='contact-mail item'>{msg.email}</div>
        <div className='contact-message item'> <p>{msg.message}</p> </div>
        <div className="item">
          <CustomButton title='x' style={{backgroundColor:'#202c46', color:'white', height: '5vh', padding: '0px', boxShadow: 'none'}}/>
        </div>
    </div>
    
  )
}

export default ContactItem;