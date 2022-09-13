import React from 'react'
import './CustomModal.css'
import {useState} from 'react';
import Modal from 'react-modal';
import CustomInput from '../customInput/CustomInput'
import CustomButton from '../customButton/CustomButton'


function CustomModal() {
  const [userData, setUserData] = useState({
    Title: "",
    Instructor: "",
    Description: "",
    PhotoUrl: "",
    TotalHours: "",
    Ratings: ""
    })

  function updateUserdata(e){
    const {value, name} = e.target
    setUserData(initialUserData => ({
      ...initialUserData,
      [name]: value
    }))
    console.log(userData)
  }

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      {/* <CustomButton onClick={openModal}  title = 'Create +' style = {{width: '20%', margin: '8px 0% auto'}} /> */}
      <CustomButton 
        onClick={openModal}  
        title = 'Create +' 
        style = {{
          marginRight: '20px',
          background: '#151D3B',
          color: 'white',
          padding: '10px 20px',
          width: '100px'
        }} 
      />
      <Modal className={'modal'}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <div className="modal-form">
        <form>
          <CustomInput placeholder='Title' name="Title" style = {{width: ' 100%'}} onChange={updateUserdata} />
          <CustomInput placeholder='Instructor' name="Instructor" style = {{width: '100%'}} onChange={updateUserdata}/>
          <CustomInput placeholder=' Description' name="Description" style = {{width: '100%'}} onChange={updateUserdata}/>
          <CustomInput placeholder='Photo-url' name="PhotoUrl" type ='text' style = {{width: '100%'}} onChange={updateUserdata}/>
          <CustomInput placeholder='Total-Hours' name="TotalHours" type ='text' style = {{width: '100%'}} onChange={updateUserdata}/>
          <CustomInput placeholder='Ratings' name="ratings" type ='text' style = {{width: '100%'}} onChange={updateUserdata}/>
          <CustomButton title = 'SUBMIT' style = {{width: '100%', margin: '8px 0% auto'}} />
        </form>
        </div>
        
      </Modal>
    </div>
  );
}

export default CustomModal