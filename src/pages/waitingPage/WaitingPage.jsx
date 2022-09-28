import React from 'react';
import './WaitingPage.css';
import waiting from '../../assets/waitingPage/waiting.jpg';


function WaitingPage() {
  return (
    <div className='waiting-page'>
        <div className="waiting-body">
            <div className="waiting-text">
                <h1>Waiting...</h1>
            </div>
            <div className="waiting-img">
              <img src={waiting} alt="waiting" className='waiting-pic'/>
            </div>
        </div>
    </div>
  )
}

export default WaitingPage;