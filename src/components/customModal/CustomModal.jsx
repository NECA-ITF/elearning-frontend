import React from 'react'
import './CustomModal.css'
import {useState,useEffect} from 'react';
import Modal from 'react-modal';
import CustomInput from '../customInput/CustomInput'
import CustomButton from '../customButton/CustomButton'
import axios from 'axios';

function CustomModal({ data, mode, API_URL, currentCourse, getCourses, getOutline, getVideos, currentCourseOutline }) {
  const [file, setFile] = useState(null)
  const [courseData, setCourseData] = useState({})
  const [courseDataKeys,setCourseDataKeys] = useState([])
  const [uploadPercentage, setUploadPercentage] = useState(0)

  const finalObj = {};
  for(let i = 0; i < data.length; i++ ) {
    Object.assign(finalObj, data[i]);
  }

  useEffect(()=>{
    const newData = {...finalObj}
    // setCourseData(newData)
    setCourseDataKeys([...Object.keys(newData)])
  },[])

  function updateCoursedata(e){
    const { value, name } = e.target
    setCourseData(initialUserData => ({
      ...initialUserData,
      [name]: value
    }))
    // console.log(courseData);
  }
  
  function handleFileChange(e){
    const { files } = e.target;
    setFile(files[0]);
    // console.log(files[0]);
  }
  
  function createCourse(e){
    e.preventDefault();
    const formData = new FormData();
    
    // console.log(Object.fromEntries(course));
    
    
    if(mode === "course"){
      if(courseData.instructor.trim().split(" ").length < 2){
        return alert("Instructor must have at least two names");
      }
    formData.append("courseData", JSON.stringify(courseData));
    formData.append("file", file);
      
      fetch(`${API_URL}/api/course`, {
        // headers: {
      //   'Content-Type': 'application/json'
      // },
      method: "POST",
      // body: JSON.stringify(Object.fromEntries(course))
      body: formData
      // file: JSON.stringify({name: ""})
    })
    .then(res => res.json())
    .then(res => {
      alert(res.message)
      if(res.success) {
        closeModal();
        getCourses();
      }
    })
  }

  
  if(mode === "outline"){
    // console.log(API_URL)
    // console.log(JSON.stringify({courseId: currentCourse._id, ...courseData}))
    axios.post(`${API_URL}/api/outlines`, {
        courseId: currentCourse._id,
        ...courseData
      })
    // .then(res => res.json())
    .then(res => {
      // console.log(res)
      alert(res.data.message)
      if(res.data.success) {
        closeModal();
        getOutline();
      } 
    })

  }

  if(mode === "video"){
    formData.append("videoData", JSON.stringify({
      courseId: currentCourse._id,
      outlineId: currentCourseOutline._id,
      ...courseData
    }));
    formData.append("file", file);

    const options = {
      onUploadProgress: (progressEvent) => {
       const {loaded, total} = progressEvent;
    let percent = Math.floor((loaded * 100)/ total)
    console.log(`${loaded}kb of ${total}kb | ${percent}%`);
  
      if(percent < 100){
      setUploadPercentage(percent)
      }
  }}

    // return console.log(API_URL);
    //  console.log(currentCourseOutline)
    // console.log(JSON.stringify({courseId: currentCourse._id, ...courseData}))
    axios.post(`${API_URL}/api/videos`, formData, options
      )
    // .then(res => res.json())
    // .then(res => console.log(res))
    .then(res => {
      alert(res.data.message)
      if(res.data.success) {
        closeModal();
        getVideos(currentCourseOutline);
      } 
    })
    .catch((err) => console.log(err))
  }
  
  if(mode === "user"){
    console.log(courseData);
    fetch(`${API_URL}/auth/user/register`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify({ ...courseData, isAdmin: true })
    })
    .then(res => res.json())
    .then(res => console.log(res))
  }
  
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
        title = {mode === 'video' ?'ADD':'Create +' }
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
          {uploadPercentage}
            {/* <CustomInput placeholder='Title' name="Title" style = {{width: ' 100%'}} onChange={updateCoursedata} />
            <CustomInput placeholder='Instructor' name="Instructor" style = {{width: '100%'}} onChange={updateCoursedata}/>
            <CustomInput placeholder=' Description' name="Description" style = {{width: '100%'}} onChange={updateCoursedata}/>
            <CustomInput placeholder='Photo-url' name="PhotoUrl" type ='text' style = {{width: '100%'}} onChange={updateCoursedata}/>
            <CustomInput placeholder='Total-Hours' name="TotalHours" type ='text' style = {{width: '100%'}} onChange={updateCoursedata}/> */}
            {/* <CustomInput placeholder='Ratings' name="ratings" type ='text' style = {{width: '100%'}} onChange={updateCoursedata}/> */}
            {
              courseDataKeys.map((button,index)=>(
                <>
                  {button.toLowerCase() === "file" ? <p style={{color: "white"}}>file</p> : ""}
                  {button.toLowerCase() === "video" ? <p style={{color: "white"}}>video</p> : ""}
                  <CustomInput
                  key={index}
                  placeholder={`${button.toUpperCase()} ${button.toLowerCase() === "requirements" ? "(HTML, CSS, NodeJS)" : ""}`}
                  name={button}
                  value={courseData[button]}
                  type = {button.toLowerCase() === ("thumbnail") || button.toLowerCase() === ("video") ? 'file' : 'text' }
                  style = {{width: '100%'}} 
                  onChange={button.toLowerCase() === ("thumbnail") || button.toLowerCase() === ("video") ? handleFileChange : updateCoursedata}
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