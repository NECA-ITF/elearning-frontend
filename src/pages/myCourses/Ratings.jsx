import React from 'react'
import {Star} from 'phosphor-react'
import './MyCourses.css'
function Ratings() {
  return (
    <div>
        <p>
        <Star size={20} color="#c9c9c9" weight="fill" onMouseOver={{color:'yellow', weight:'fill'}}/>
        <Star size={20} color="#c9c9c9" weight="fill" onMouseOver={{color:'yellow', weight:'fill'}}/>
        <Star size={20} color="#c9c9c9" weight="fill" onMouseOver={{color:'yellow', weight:'fill'}}/>
        <Star size={20} color="#c9c9c9" weight="fill" onMouseOver={{color:'yellow', weight:'fill'}}/>
        <Star size={20} color="#c9c9c9" weight="fill" onMouseOver={{color:'yellow', weight:'fill'}}/>
        </p>
    </div>
  )
}

export default Ratings