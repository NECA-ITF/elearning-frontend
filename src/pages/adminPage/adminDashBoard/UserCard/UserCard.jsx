import React from 'react'
import CustomButton from '../../../../components/customButton/CustomButton'
import CustomToast from '../../../../components/customToast/CustomToast'
import './UserCard.css'

function Outline({title, user, currentUser, deleteUser, ...otherProps}) {
    const toastStyle={
        marginRight: '20px',
        background: '#151D3B',
        color: 'white',
        padding: "8px 10px",
        borderRadius: '8px',
        width: '90px',
        textAlign: 'center'
    }
  return (
    <div className="usercard"
    style={{
        boxShadow: currentUser._id === user._id ? "rgba(0, 0, 0, 0.65) 0px 5px 50px" : "",
    }}
    {...otherProps}>
        <p>{title}</p>
        <div className="usercardBtns">
        <CustomToast content="deleted Sucessfully" status='success' title='DELETE' style={toastStyle} payload={deleteUser(user._id)}/>
           {/* <CustomButton title='DELETE' 
            style={{
                marginRight: '20px',
                background: '#151D3B',
                color: 'white',
                padding: "8px 10px",
                borderRadius: '8px',
                width: '90px',
                textAlign: 'center'
            }}
            onClick={() => { deleteUser(user._id) }}
            /> */}
        </div>
    </div>
    )
}

export default Outline