import React from 'react'
import './Dropdown.css'
import { useState } from 'react';
import { ImCross } from "react-icons/im";
import { generateRandomPastelColor } from '../../../Services/Globalservices';
const Dropdown = ({toggledropdown,isOpen}) => {
    
  const  color = "#FF0000"
  return (
    <div className="dropdown" style={isOpen ? {opacity:1}:{opacity:0}} >
        <div>Edit</div>
        <div>Delete</div>
        <div onClick={toggledropdown}><ImCross style={{color : color}}/></div>

    </div> 
  )
}

export default Dropdown