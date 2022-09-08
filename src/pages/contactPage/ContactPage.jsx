import React from "react";
import img from '../../assets/image4.jpg';
import logo from '../../assets/itf_log.png';
import CustomInput from '../../components/customInput/CustomInput';
import CustomButton from '../../components/customButton/CustomButton';
import './ContactPage.css'
function ContactPage(){
    return(
        <div className="smallContc">
          <form className='formc'>
            <div className="colc">          
              <h2>Send Us A Message</h2>
              <CustomInput placeholder='Your full name*' style = {{width: '100%', marginTop: '-2.2%'}} />
              <CustomInput placeholder='Email*' style = {{width: '100%', marginTop: '-2.2%'}} />
              <CustomInput placeholder='Phone number*' style = {{width: '100%', marginTop: '-2.2%'}} />
              <textarea placeholder="Write us a message" cols="20" rows="8"></textarea>
              <CustomButton title = 'LOG IN' style = {{width: '100%', margin: '8px 0% 0'}} />
            </div>
          </form>
        <div className="col-2c">
          <img src={img} alt = 'learning' />
          <div className="absc">
            <div className="flexc">
              <img src={logo} alt="Logo" className='imgc'/>
              <p>Eduspot</p>
            </div>
            <h1>Welcome Back!</h1>
          </div>
        </div>
      </div>  
    )
}

export default ContactPage;