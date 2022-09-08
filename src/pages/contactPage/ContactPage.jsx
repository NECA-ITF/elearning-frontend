import React from "react";
import img from '../../assets/image4.jpg';
import logo from '../../assets/itf_log.png';
import CustomInput from '../../components/customInput/CustomInput';
import CustomButton from '../../components/customButton/CustomButton';
import { MapPin, Phone, EnvelopeSimple } from 'phosphor-react'
import './ContactPage.css'
import { Link } from "react-router-dom";

function ContactPage(){
    return(
        <div className="smallContc">
          <form className='formc'>
            <div className="colc">
                <img src={logo} alt="Logo" className="img" />          
              <h2>Send Us A Message</h2>
              <CustomInput placeholder='Your full name*' style = {{width: '100%', marginTop: '-2.2%'}} />
              <CustomInput placeholder='Email*' style = {{width: '100%', marginTop: '-2.2%'}} />
              <CustomInput placeholder='Phone number*' style = {{width: '100%', marginTop: '-2.2%'}} />
              <textarea placeholder="Write us a message" cols="20" rows="4" id="textc"></textarea>
              <Link to='/'>
              <CustomButton title = 'SUBMIT' style = {{width: '100%', margin: '8px 0% 0'}} />
              </Link>
            </div>
          </form>
        <div className="col-2c">
          <img src={img} alt = 'learning' />
          <div className="absc">
            <h1 style={{textAlign: 'left', marginTop: '12%'}}>Contact Us</h1>
            <div className="groupc" style={{margin: '80px 0 0'}}>
                <MapPin size={32} />  
                <span>Address</span>
            </div>
            <span className="movec">No6 Ademola Adetokubo Cresent Maitama</span><br /><br />
            <div className="groupc">
                <Phone size={32} /> 
                <span> Let Talk</span>
            </div>
            <span className="movec">08917529499</span><br /><br />
            <div className="groupc">
                <EnvelopeSimple size={32} />
                <span>General Support</span>
            </div>
            <span className="movec">contact@example.com</span><br /><br />
          </div>
        </div>
      </div>  
    )
}

export default ContactPage;