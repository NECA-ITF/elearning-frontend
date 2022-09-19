import React from 'react'
import CustomButton from '../../../../components/customButton/CustomButton'
import './Outline.css'
import CustomModal from '../../../../components/customModal/CustomModal'

function Outline({title, mData, mMode, API_URL, currentCourse, outline, currentCourseOutline, setCurrentCourseOutline, getOutline, getVideos}) {
    // console.log(API_URL)
    function deleteOutline(){
        fetch(`${API_URL}/api/outline`,{
            headers: {
                'Content-Type': 'application/json'
            },
            method: "DELETE",
            body: JSON.stringify({courseId: currentCourse, outlineId: outline._id})
        })
        .then(res => res.json())
        .then(res => {
            if(res.success) getOutline();
            alert(res.message);
        })
    }
    

    const data =[
        {title: ""},
        {video: ""}
      ]
      const mode = 'video'


  return (
    <div className="outline" style={{
        boxShadow: currentCourseOutline._id === outline._id ? "rgba(0, 0, 0, 0.65) 0px 5px 50px" : "",
        cursor: "pointer"
    }}
    onClick={() => { 
        setCurrentCourseOutline(outline);
        getVideos(outline);
    }}
    >
        <p>{title}</p>
        <div className="outlineBtns">
        <CustomModal data= {data} mode ={mode} API_URL={API_URL} currentCourse={currentCourse} currentCourseOutline={currentCourseOutline} getVideos={getVideos} />
            {/* <CustomButton title='ADD' 
            style={{
                marginRight: '20px',
                background: '#151D3B',
                color: 'white',
                padding: "8px 10px",
                borderRadius: '8px',
                width: '76px'
            }}
            /> */}
           <CustomButton title='DELETE' 
            style={{
                marginRight: '20px',
                background: '#151D3B',
                color: 'white',
                padding: "8px 10px",
                // borderRadius: '8px',
                width: '90px',
                textAlign: 'center'
            }} 
            onClick={() => { deleteOutline() }}
            />
        </div>
    </div>
    )
}

export default Outline