import React from 'react'
import './Dropdown.css'

import { ImCross } from "react-icons/im";
import axios from 'axios';
import {toast,Toaster} from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


const Dropdown = ({toggledropdown,isOpen,id}) => {
  const navigate = useNavigate()
  const  color = "#FF0000" //red
  const handledelete = async ()=> {
    const res = await axios.post("http://localhost:8000/api/blog/delete/"+id)
    
  }
  const handleedit = () =>{
    navigate('/edit/'+id)
    
  }
  return (
    <div className="dropdown" style={isOpen ? {opacity:1}:{opacity:0}} >
        <div onClick={handleedit}>Edit</div>
        <div onClick={handledelete}>Delete</div>
        <div onClick={toggledropdown}><ImCross style={{color : color}}/></div>

    </div> 
  )
}

export default Dropdown