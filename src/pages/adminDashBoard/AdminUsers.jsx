import React from 'react'
import './AdminUsers.css'
import CustomButton from '../../components/customButton/CustomButton'
import gith from './adminAssets/gith.png'
import linkd from './adminAssets/linkd.png'
import ebenezer from './adminAssets/ebenezer.JPG'


function adminUsers() {
  return (
    <div id='adminDash'>
            <div id='adminDash-left'>
                <div id='admDashmarginTop'> 
                    <span className='sectiontabs'>All Courses</span>
                    <span className='sectiontabs'>All Outline</span>
                    <span className='sectiontabs'>All Users</span>
                </div>
            </div> 

        <div className='ab'>
            <h2>All Users</h2>
        {/* <div className='about'></div> */}
        </div>

        <div className='aboutpage'>
                <div className='ebenezer'>
                    <img src={ebenezer} alt="logo" width={250}/>
                </div>
                <div className='font'><h2>Aluya Ebenezer</h2></div>
                <div className='socials'>
                <img className='gitpix' src={gith} alt="g-icon" />
                <img className='linkdpix' src={linkd} alt="l-icon"/>
                </div>
        </div>
    </div>


    
  )
}

export default adminUsers