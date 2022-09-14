import { GitlabLogoSimple } from 'phosphor-react'
import React from 'react'
import './AboutPage.css'
import gitlogo from './aboutAssets/gith.png'
import { Link,} from 'react-router-dom';
// import user from './users.json'

function AboutCard({img, github, name}) {
  return (
    <div>
           <div className='cardpics'>
               <img className='pics' src={img} alt="image" />
                   <h3>{name}</h3>
                <Link to={github}><img src={gitlogo} alt="" style={{width:"30px"}}/></Link> 
          </div>

    </div>
  )
}

export default AboutCard
