import React from 'react';
import './WaitingPage.css';
import waiting from '../../assets/waitingPage/waiting1.png';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
// import CustomButton from '../../components/customButton/CustomButton';


function WaitingPage() {
  const navigate = useNavigate();
  useEffect(()=>{
    setTimeout(() => {
      navigate('/success-page')
    }, 3000)
  },[])

  return (
    <div className='waiting-page'>
        <div className="waiting-body">
            <div className="waiting-text">
                <h1>Waiting...</h1>
                <p>Please, Wait! This won't take long.</p>
            </div>
            <div className="waiting-img">
              <img src={waiting} alt="waiting" className='waiting-pic'/>
            </div>
        </div>
    </div>
  )
}

export default WaitingPage;