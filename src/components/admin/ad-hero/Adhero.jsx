import React from 'react'
import './Adhero.css'

//page
import Allproject from '../allProject/Allproject'
import Alluser from '../allUser/Alluser'

const Adhero = ({post,client}) => {
  return (
    <div>
        <div className='Dashboard'>
          <Allproject post={post}/>
          <Alluser/>
        </div>

    </div>
  )
}

export default Adhero