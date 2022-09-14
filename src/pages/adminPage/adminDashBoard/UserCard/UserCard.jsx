import React from 'react'
import CustomButton from '../../../../components/customButton/CustomButton'
import './UserCard.css'

function Outline({title}) {
  return (
    <div className="usercard">
        <p>{title}</p>
        <div className="usercardBtns">
           <CustomButton title='DELETE' 
            style={{
                marginRight: '20px',
                background: '#151D3B',
                color: 'white',
                padding: "8px 10px",
                borderRadius: '8px',
                width: '90px',
                textAlign: 'center'
            }} />
        </div>
    </div>
    )
}

export default Outline