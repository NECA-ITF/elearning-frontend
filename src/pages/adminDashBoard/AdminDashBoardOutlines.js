import React from 'react'
import CustomButton from '../../components/customButton/CustomButton'
import Movie from '../../assets/media.io_3d1cbb22d5874411addc3e814ed6e5de.mp4'


function AdminDashBoardOutlines() {
  return (
    <div>
                <div id='dropDownContainer'>
                    <select name='Courses'>
                        <option value="Courses" disabled selected>Courses</option>
                        <option value={"pumpernickel"}>Introduction to HTML</option>
                        <option value="reeses">Introduction to CSS</option>
                        <option value="reeses">React I</option>
                        <option value="dave">Introduction to Python</option>
                        <option value="dave">Node JS</option>
                    </select>
                    <CustomButton title="+ Create" style={{width: '120px', padding:'8px', textAlign : 'center' }}/>
                </div>
                
                 <div id='adminDash-right-container'>
                     <div id='adminDash-right-container-outlines'>
                        <div className='outlinedetails'>
                            <span>Introduction to HTML</span> 
                            <div className='outineButtons'>
                                <CustomButton title="Add" style={{width: '70px', padding:'8px', textAlign : 'center' , fontSize:" 15px", display:'block'}}/>
                                <CustomButton title=" Cancel" style={{width: '70px', padding:'8px', textAlign : 'center' , fontSize:" 15px"}}/>
                                {/* <CustomButton title="Progress" style={{width: '70px', padding:'8px', textAlign : 'center' , fontSize:" 15px"}}/> */}
                            </div>
                        </div>
                        <div className='outlinedetails'>
                            <span>Introduction to CSS</span> 
                            <div className='outineButtons'>
                                <CustomButton title="Add" style={{width: '70px', padding:'8px', textAlign : 'center' , fontSize:" 15px", display:'block'}}/>
                                <CustomButton title=" Cancel" style={{width: '70px', padding:'8px', textAlign : 'center' , fontSize:" 15px"}}/>
                                {/* <CustomButton title="Progress" style={{width: '70px', padding:'8px', textAlign : 'center' , fontSize:" 15px"}}/> */}
                            </div>
                        </div>
                        <div className='outlinedetails'>
                            <span>React I</span> 
                            <div className='outineButtons'>
                                <CustomButton title="Add" style={{width: '70px', padding:'8px', textAlign : 'center' , fontSize:" 15px", display:'block'}}/>
                                <CustomButton title=" Cancel" style={{width: '70px', padding:'8px', textAlign : 'center' , fontSize:" 15px"}}/>
                                {/* <CustomButton title="Progress" style={{width: '70px', padding:'8px', textAlign : 'center' , fontSize:" 15px"}}/> */}
                            </div>
                        </div>
                        <div className='outlinedetails'>
                            <span>Introduction to Python</span> 
                            <div className='outineButtons'>
                                <CustomButton title="Add" style={{width: '70px', padding:'8px', textAlign : 'center' , fontSize:" 15px", display:'block'}}/>
                                <CustomButton title=" Cancel" style={{width: '70px', padding:'8px', textAlign : 'center' , fontSize:" 15px"}}/>
                                {/* <CustomButton title="Progress" style={{width: '70px', padding:'8px', textAlign : 'center' , fontSize:" 15px"}}/> */}
                            </div>
                        </div>
                        <div className='outlinedetails'>
                            <span>Node JS</span> 
                            <div className='outineButtons'>
                                <CustomButton title="Add" style={{width: '70px', padding:'8px', textAlign : 'center' , fontSize:" 15px", display:'block'}}/>
                                <CustomButton title=" Cancel" style={{width: '70px', padding:'8px', textAlign : 'center' , fontSize:" 15px"}}/>
                                {/* <CustomButton title="Progress" style={{width: '70px', padding:'8px', textAlign : 'center' , fontSize:" 15px"}}/> */}
                            </div>
                        </div>
                     </div>
                     <div id='adminDash-right-container-videos'>
                        <div className='videoContainer'>
                            <video src={Movie}  controls/>
                            <p>HTML course I</p>
                            <div className='videoButtons'>
                            <CustomButton title='Edit' style={{width:'70px', height:'30px',padding:'10px',fontSize:'10px'}}/>
                            <CustomButton title='Delete' style={{width:'70px', height:'30px',padding:'10px',fontSize:'10px'}}/>
                            </div>

                        </div>
                        <div className='videoContainer'>
                            <video src={Movie}  controls/>
                            <p>HTML course II</p>
                            <div className='videoButtons'>
                            <CustomButton title='Edit' style={{width:'70px', height:'30px',padding:'10px',fontSize:'10px' }}/>
                            <CustomButton title='Delete' style={{width:'70px', height:'30px',padding:'10px',fontSize:'10px'}}/>
                            </div>
                        </div>
                        
                     </div>
                </div>
    </div>
  )
}

export default AdminDashBoardOutlines