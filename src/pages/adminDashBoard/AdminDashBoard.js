import React from 'react'
import './AdminDashBoard.css'
import CustomButton from '../../components/customButton/CustomButton'
import AdminDashBoardOutlines from '../adminDashBoard/AdminDashBoardOutlines'

function AdminDashBoard() {
  return (
    <div id='adminDash'>
            <div id='adminDash-left'>
                <div id='admDashmarginTop'> 
                    <span className='sectiontabs'>All Courses</span>
                    <span className='sectiontabs'>All Outline</span>
                    <span className='sectiontabs'>All Users</span>
                </div>
            </div> 
            <div id='adminDash-right'>
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
                        {/* <video src={Movie}  width="200px" height='150px'/> */}
                     </div>
                </div>
        
            </div>

            <div id='adminDash-right'>
             <AdminDashBoardOutlines/>
             </div>
    </div>
  )
}

export default adminDashBoard