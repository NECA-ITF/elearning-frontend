// import React from 'react'
import AboutCard from './AboutCard'
import './AboutPage.css'

function AboutList({userss}) {
  return (
    <div>
        {userss.map((userz) =>(
            <AboutCard
            key={userz.id.toString()}
            img={userz.img}
            // github={userz.github_link}
            name={userz.name}
            />
        ))}
    </div>
  )
}

export default AboutList