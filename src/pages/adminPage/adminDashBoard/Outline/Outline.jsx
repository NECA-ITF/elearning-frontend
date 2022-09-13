import React from 'react'
import CustomButton from '../../../../components/customButton/CustomButton'
import './Outline.css'

function Outline({title}) {
  return (
    <div className="outline">
        <p>{title}</p>
        <div className="outlineBtns">
            <CustomButton title='ADD' 
            style={{
                marginRight: '20px',
                background: '#151D3B',
                color: 'white',
                padding: "8px 10px",
                borderRadius: '8px',
                width: '76px'
            }} />
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