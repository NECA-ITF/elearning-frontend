import React from 'react';
import "./ContactItems.css";
import ContactItem from '../contactItem/ContactItem';
function ContactItems() {
  return (
    <div className='contact-wrapper'>
      <div className='contact-heading'>
          <div className='contact-us'><h4>Contact Us Messages</h4></div>
          <div className='contact-list'>
            <ul>
              <li className='item'>No:</li>
              <li className='item'>Name:</li>
              <li className='item'>Phone Number:</li>
              <li className='item'>E-mail:</li>
              <li className='item'>Message:</li>
              <li className='item'>Delete:</li>
            </ul>
          </div>
          <div className="contact-item">
            <ContactItem />
            <ContactItem />
            <ContactItem />
          </div>
          <div className='contact-enteries'>
            <div className='enteries'>
              <ul>
              <li>Show</li>
              <li><span>{3}</span></li>
              <li>Enteries</li>
              </ul>
              
            </div>
            <div className='contact-arrow'>
              <ul>
              <li>{'<'}</li>
              <li>{'>'}</li>
              </ul>
            </div>
          </div>
      </div>
    </div>
  )
}

export default ContactItems;