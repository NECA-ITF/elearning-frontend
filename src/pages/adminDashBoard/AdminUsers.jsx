import React from 'react'
import CustomButton from '../../components/customButton/CustomButton'
import Movie from '../../assets/media.io_3d1cbb22d5874411addc3e814ed6e5de.mp4'
import { Link } from 'react-router-dom'
import './AdminUsers.css'

function AdminDashBoardOutlines() {
  return (
    <div className='adminusers'>
        <div id='adminDash-left'>
                <div id='admDashmarginTop'> 
                     <CustomButton title="All Courses" style={{width: '90%', padding:'8px', textAlign : 'center' , fontSize:" 15px", display:'block'}}/>
                     <CustomButton title="All Outline" style={{width: '90%', padding:'8px', textAlign : 'center' , fontSize:" 15px", display:'block'}}/>
                     <CustomButton title="All Users" style={{width: '90%', padding:'8px', textAlign : 'center' , fontSize:" 15px", display:'block'}}/>
                </div>
                
            </div>
           <div id ='adminDash-right'>
           <div id='dr'>
                    <select name='Users'>
                        <option value="Courses" disabled selected>Users</option>
                        <option value={"pumpernickel"}>Ajibade Hamidat</option>
                        <option value="reeses">Daniel Uchenna</option>
                        <option value="reeses">Maryam Suleiman</option>
                        <option value="dave">Alexander Gabrielle</option>
                        <option value="dave">Daubry Martins</option>
                    </select>

                </div>
                
                 <div id='adminDash-right-container'>
                     <div id='adminDash-right-container-outlines'>
                        <div className='outlinedetails1'>
                            <span>Ajibade Hamidat</span> 
                            <div className='outineButtons'>
                                <CustomButton title="Delete" style={{width: '70px', padding:'8px', textAlign : 'center' , fontSize:" 15px", display:'block'}}/>
                               
                            </div>
                        </div>
                        <div className='outlinedetails1'>
                            <span>Daniel Uchenna</span> 
                            <div className='outineButtons'>
                                <CustomButton title="Delete" style={{width: '70px', padding:'8px', textAlign : 'center' , fontSize:" 15px", display:'block'}}/>
                               
                            </div>
                        </div>
                        <div className='outlinedetails1'>
                            <span>Maryam Suleiman</span> 
                            <div className='outineButtons'>
                                <CustomButton title="Delete" style={{width: '70px', padding:'8px', textAlign : 'center' , fontSize:" 15px", display:'block'}}/>
                               
                            </div>
                        </div>
                        <div className='outlinedetails1'>
                            <span>Alexander Gabrielle</span> 
                            <div className='outineButtons'>
                                <CustomButton title="Delete" style={{width: '70px', padding:'8px', textAlign : 'center' , fontSize:" 15px", display:'block'}}/>
                               
                            </div>
                        </div>
                        <div className='outlinedetails1'>
                            <span>Daubry Martins</span> 
                            <div className='outineButtons'>
                                <CustomButton title="Delete" style={{width: '70px', padding:'8px', textAlign : 'center' , fontSize:" 15px", display:'block'}}/>
                               
                            </div>
                        </div>
                        <div className='outlinedetails1'>
                            <span>Rabo Abdulsammad</span> 
                            <div className='outineButtons'>
                                <CustomButton title="Delete" style={{width: '70px', padding:'8px', textAlign : 'center' , fontSize:" 15px", display:'block'}}/>
                               
                            </div>
                        </div>
                        <div className='outlinedetails1'>
                            <span>Aluya Ebenezer</span> 
                            <div className='outineButtons'>
                                <CustomButton title="Delete" style={{width: '70px', padding:'8px', textAlign : 'center' , fontSize:" 15px", display:'block'}}/>
                               
                            </div>
                        </div>
                     </div>
                     <div id='adminDash-right-container-videos'>
                        <div className='videoContainer1'>
                            <video src={Movie}  controls/>
                            <p>Ajibade Hamidat </p>
                            <p>hamidat@gmail.com </p>
                            <p>08089453241</p>
                            <p></p>
                            <div className='videoButtons'>
                            <CustomButton title='Edit' style={{width:'70px', height:'30px',padding:'10px',fontSize:'10px'}}/>
                            <CustomButton title='Delete' style={{width:'70px', height:'30px',padding:'10px',fontSize:'10px'}}/>
                            </div>

                        </div>
                        
                     </div>
                </div>
            </div>
       </div>
            
  )
}

export default AdminDashBoardOutlines