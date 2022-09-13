import React from 'react'
import './CustomModal.css'
import {useState,useEffect} from 'react';
import Modal from 'react-modal';
import CustomInput from '../customInput/CustomInput'
import CustomButton from '../customButton/CustomButton'


function CustomModal({data, route, API_URL}) {
  const [thumbnail, setThumbnail] = useState(null)
  const [courseData, setCourseData] = useState({})
  const [userDataKeys,setCourseDataKeys] = useState([])

  const finalObj = {};
  for(let i = 0; i < data.length; i++ ) {
    Object.assign(finalObj, data[i]);
  }

  useEffect(()=>{
    const newData = {...finalObj}
    setCourseData(newData)
    setCourseDataKeys([...Object.keys(newData)])
  },[])

  function updateCoursedata(e){
    const { value, name } = e.target
    setCourseData(initialUserData => ({
      ...initialUserData,
      [name]: value
    }))
    // console.log(courseData)
  }
  
  function handleFileChange(e){
    const { files } = e.target;
    setThumbnail(files);
    console.log(files);
  }
  
  function createCourse(e){
    e.preventDefault();
    const course = new FormData();
    course.append("courseData", courseData);
    course.append("file", thumbnail[0]);
    // console.log(Object.fromEntries(course));

    // fetch(`${API_URL}/api/course`, {
    //   // headers: {
    //   //   'Content-Type': 'application/json'
    //   // },
    //   method: "POST",
    //   // body: JSON.stringify(course)
    //   body: JSON.stringify(JSON.stringify(Object.fromEntries(course)))
    // })
    // .then(res => res.json())
    // .then(res => console.log(res))
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
        ariaHideApp={false}
      >
        <div className="modal-form">
          <form onSubmit={createCourse}>
            {/* <CustomInput placeholder='Title' name="Title" style = {{width: ' 100%'}} onChange={updateCoursedata} />
            <CustomInput placeholder='Instructor' name="Instructor" style = {{width: '100%'}} onChange={updateCoursedata}/>
            <CustomInput placeholder=' Description' name="Description" style = {{width: '100%'}} onChange={updateCoursedata}/>
            <CustomInput placeholder='Photo-url' name="PhotoUrl" type ='text' style = {{width: '100%'}} onChange={updateCoursedata}/>
            <CustomInput placeholder='Total-Hours' name="TotalHours" type ='text' style = {{width: '100%'}} onChange={updateCoursedata}/> */}
            {/* <CustomInput placeholder='Ratings' name="ratings" type ='text' style = {{width: '100%'}} onChange={updateCoursedata}/> */}
            {
              userDataKeys.map((button,index)=>(
                <>
                {button.toLowerCase() === "thumbnail" ? <p style={{color: "white"}}>Thumbnail</p> : ""}
                <CustomInput
                key={index}
                placeholder={button.toUpperCase()}
                name={button}
                type = {button.toLowerCase() === "thumbnail" ? 'file' : 'text' }
                style = {{width: '100%'}} 
                onChange={button.toLowerCase() === "thumbnail" ? handleFileChange : updateCoursedata}
                />
                </>
              ))
            }

            <CustomButton title = 'SUBMIT' style = {{width: '100%', margin: '8px 0% auto'}} />
        </form>
        </div>
      </Modal>
    </div>
  );
}

export default CustomModal