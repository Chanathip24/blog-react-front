import React from 'react'
import './Dropdown.css'
import { useState } from 'react';
import { ImCross } from "react-icons/im";


const Dropdown = ({toggledropdown,isOpen,id}) => {
    
  const  color = "#FF0000" //red
  
  return (
    <div className="dropdown" style={isOpen ? {opacity:1}:{opacity:0}} >
        <div>Edit</div>
        <div>Delete</div>
        <div onClick={toggledropdown}><ImCross style={{color : color}}/></div>

    </div> 
  )
}

export default Dropdown