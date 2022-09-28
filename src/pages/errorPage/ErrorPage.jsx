import React from 'react';
import itflogo from '../../assets/itf_log.png';
import { Link } from "react-router-dom";
import './ErrorPage.css';


function ErrorPage() {
  return (
    <div className='error'>
        <div className='errorlogo'>
                <Link to='/' className='links'>
                    <img src={itflogo} alt="itflogo" style={{width:'6%', height:'6%', padding:'5px 5px', marginTop: '1rem'}}/>
                </Link>
        </div>
        <div className="errortext">
            <p> <span>404</span> </p>
            <p>Sorry, Page Not Found!</p>
        </div>
    </div>
  )
}

export default ErrorPage;