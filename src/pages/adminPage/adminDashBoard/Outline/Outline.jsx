import React from 'react'
// import CustomButton from '../../../../components/customButton/CustomButton'
import './Outline.css'
import CustomModal from '../../../../components/customModal/CustomModal'
import CustomToast from '../../../../components/customToast/CustomToast'

function Outline({title, mData, mMode, API_URL, currentCourse, outline, setCurrentCourseOutline, getOutline, getVideos}) {
    // console.log(API_URL)
    const currentCourseOutline = JSON.parse(localStorage.getItem('currentCourseOutline'));
    function deleteOutline(){
        if(!window.confirm("Are you sure you want to delete this outline?")) return;
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
            // alert(res.message);
        })
    }
    
    const toastStyle= {
        marginRight: '20px',
        background: '#151D3B',
        color: 'white',
        padding: "8px 10px",
        // borderRadius: '8px',
        width: '90px',
        textAlign: 'center'
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
        localStorage.setItem('currentCourseOutline', JSON.stringify(outline));
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
           {/* <CustomButton title='DELETE' 
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
            /> */}
            <CustomToast content="deleted Sucessfully" status='success' title='DELETE' style={toastStyle} payload={deleteOutline}/>
        </div>
    </div>
    )
}

export default Outline