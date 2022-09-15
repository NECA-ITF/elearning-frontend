import React from 'react'
import CustomButton from '../../../../components/customButton/CustomButton'
import './Outline.css'
// import CustomModal from '../../../../components/customModal/CustomModal'

function Outline({title, mData, mMode, API_URL, currentCourse, outline, setCurrentCourseOutline}) {
    function deleteOutline(){
        fetch(`${API_URL}/api/outline`,{
            headers: {
                'Content-Type': 'application/json'
            },
            method: "DELETE",
            body: JSON.stringify({courseId: currentCourse, outlineId: outline._id})
        })
        .then(res => res.json())
        .then(res => console.log(res))
    }
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
            }} 
            onClick={() => { setCurrentCourseOutline(outline) }}
            />
           <CustomButton title='DELETE' 
            style={{
                marginRight: '20px',
                background: '#151D3B',
                color: 'white',
                padding: "8px 10px",
                borderRadius: '8px',
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