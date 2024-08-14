import React from 'react'
import './Usercard.css'
import { FaRegStar,FaStar } from "react-icons/fa6";
import { useState } from 'react';
const Usercard = ({user}) => {
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
                <img src={user.urlToImage} alt="" />
            </div>

            <div className='user-name'>
                <h3>{user.username}</h3>
                <div className="star">
                {star ? <FaStar onClick={toggledropdown}/> : <FaRegStar onClick={toggledropdown}/>}
            </div>
            </div>


        </div>

        <div className="user-detail">  
            <p>{user.email}</p>
            <p>{user.fname}</p>
        </div>

        
    </div>
    <hr />
    </>

  )
}

export default Usercard