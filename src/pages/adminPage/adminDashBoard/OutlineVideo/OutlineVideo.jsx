import React from 'react'
import video from "../../../../assets/media.io_3d1cbb22d5874411addc3e814ed6e5de.mp4"
import CustomButton from '../../../../components/customButton/CustomButton'
import './OutlineVideo.css'
function OutlineVideo({ API_URL, video, currentCourse, currentCourseOutline, getVideos }) {
    function deleteVideo(){
        // console.log({outlineId: currentCourseOutline._id, videoId: video._id})
        fetch(`${API_URL}/api/video`,{
            headers: {
                'Content-Type': 'application/json'
            },
            method: "DELETE",
            body: JSON.stringify({outlineId: currentCourseOutline._id, videoId: video._id})
        })
        .then(res => res.json())
        .then(res => {
            if(res.success) getVideos(currentCourseOutline);
            alert(res.message);
        })
    }
  return (
    <div className="outlineVideo">
        <video src={`${API_URL}/${video.url}`} width='250' height='150' controls poster={`${API_URL}/${currentCourse.thumbnail}`} />
        <div className="outlineVidDes">
            <p>{video.title}</p>
            <div className="outlineVidBtn">
            {/* <CustomButton title='ADD' 
                style={{
                    marginRight: '20px',
                    background: '#151D3B',
                    color: 'white',
                    padding: "8px 10px",
                    borderRadius: '8px',
                    width: '50px',
                    fontSize: '10px'
                }} /> */}
                <CustomButton title='DELETE' 
                style={{
                    margin: '0',
                    background: '#151D3B',
                    color: 'white',
                    padding: "8px 10px",
                    borderRadius: '8px',
                    width: '60px',
                    fontSize: '10px',
                    textAlign: 'center'
                }} 
                onClick={() => { deleteVideo() }}
                />
            </div>
        </div>
    </div>
                        
  )
}

export default OutlineVideo