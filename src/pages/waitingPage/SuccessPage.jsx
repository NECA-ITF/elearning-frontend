import React from 'react'
import './WaitingPage.css';
import success from '../../assets/waitingPage/success-removebg-preview .png';
import CustomButton from '../../components/customButton/CustomButton';
import { Link } from "react-router-dom";


function SuccessPage() {
  return (
    <div className='waiting-page'>
    <div className="waiting-body">
        <div className="waiting-text">
            <h1>Successful!</h1>
        <Link to='/login' className="links">
            <CustomButton title='Proceed to log in'style={{ 
                    marginBottom: "10px",
                    padding: "10px 5px",
                    display:"block",
                    width:'220px'
                }}/>
        </Link>

        </div>
        <div className="waiting-img">
          <img src={success} alt="waiting" className='waiting-pic'/>
        </div>
    </div>
</div>
  )
}

export default SuccessPage