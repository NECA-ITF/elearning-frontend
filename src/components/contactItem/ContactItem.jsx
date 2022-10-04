import React from 'react'
import CustomButton from '../customButton/CustomButton';
import './ContactItem.css'
function ContactItem({ msg, index }) {
  return (
    <div className='contact-rex'>
       <div className='contact-list'>
            <ul>
              <li className='item'>No:</li>
              <li className='item'>Name:</li>
              <li className='item'>Phone Number:</li>
              <li className='item'>E-mail:</li>
              <li className='item'>Message:</li>
              {/* <li className='item-sent'>Time Sent</li> */}
            </ul>
          </div>

    <div className='contact-details'>
        <p className="serial-no item">{index}</p>
        <div className='contact-name-item' >
             <p>{msg.name}</p>
        </div>
        <div className='contact-number-item'>
            <p>{msg.phone}</p>
        </div>
        <div className='contact-mail-item'>{msg.email}</div>
        <div className='contact-message-item'> <p>{msg.message}</p> </div>
        <div className='contact-time-item'> <p>Time Sent:--</p><p>{msg.createdAt}</p> </div>
        {/* <div className="item">
          <CustomButton title='x' style={{backgroundColor:'#202c46', color:'white', height: '5vh', padding: '0px', boxShadow: 'none'}}/>
        </div> */}
    </div>
    
    </div>
  )
}

export default ContactItem;