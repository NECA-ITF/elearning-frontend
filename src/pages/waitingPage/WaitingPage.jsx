import React from 'react';
import './WaitingPage.css';
import waiting from '../../assets/waitingPage/waiting1.png';
// import CustomButton from '../../components/customButton/CustomButton';


function WaitingPage() {
  return (
    <div className='waiting-page'>
        <div className="waiting-body">
            <div className="waiting-text">
                <h1>Waiting...</h1>
                <p>Please, Wait! This won't take long.</p>
                {/* <CustomButton title='Take a chill pill' style={{ 
                    marginBottom: "10px",
                    padding: "10px 5px",
                    display:"block",
                    width:'100%'
                }} /> */}

            </div>
            <div className="waiting-img">
              <img src={waiting} alt="waiting" className='waiting-pic'/>
            </div>
        </div>
    </div>
  )
}

export default WaitingPage;