import React from 'react'
import CustomButton from '../customButton/CustomButton';
import './ContactItem.css'
function ContactItem() {
  return (
    <div className='contact-details'>
        <input type="checkbox" name="tick" id="tick" />
        <p className="serial-no item">1</p>
        <div className='contact-name item' >
             <p>John Doe</p>
        </div>
        <div className='contact-number item'>
            <p>08031839826</p>
        </div>
        <div className='contact-mail item'>johndoe@yahoo.com</div>
        <div className='contact-message item'> <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p> </div>
        <div className="item">
          <CustomButton title='x' style={{backgroundColor:'#202c46', color:'white', height: '5vh', padding: '0px', boxShadow: 'none'}}/>
        </div>
    </div>
    
  )
}

export default ContactItem;