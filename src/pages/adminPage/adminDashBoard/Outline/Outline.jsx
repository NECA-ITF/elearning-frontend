import React from 'react'
import CustomButton from '../../../../components/customButton/CustomButton'
import './Outline.css'
// import CustomModal from '../../../../components/customModal/CustomModal'

function Outline({title, mData, mMode, API_URL}) {
  return (
    <div className="outline">
        <p>{title}</p>
        <div className="outlineBtns">
        {/* <CustomModal data = {mData} mode ={mMode} API_URL={API_URL} /> */}
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