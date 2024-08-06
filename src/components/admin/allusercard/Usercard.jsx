import React from 'react'
import './Usercard.css'
import { FaRegStar,FaStar } from "react-icons/fa6";
import { useState } from 'react';
const Usercard = () => {
    const [star , setStar] = useState(false)

    //toggle star
    const toggledropdown = () => {
        setStar(!star)
    }
    
    
  return (
    <>
        <div className='usercard'>
        
        <div className="user-title">
            
            <div className='userpic'>
                <img src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg" alt="" />
            </div>

            <div className='user-name'>
                <h3>Chanathip</h3>
                <div className="star">
                {star ? <FaStar onClick={toggledropdown}/> : <FaRegStar onClick={toggledropdown}/>}
            </div>
            </div>


        </div>

        <div className="user-detail">  
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, pariatur?</p>
        </div>

        
    </div>
    <hr />
    </>

  )
}

export default Usercard