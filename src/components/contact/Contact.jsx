import React from 'react'
import './Contact.css'
import {FaBeer} from "react-icons/fa"
import {BsBoxSeamFill} from "react-icons/bs"
import toast,{Toaster} from 'react-hot-toast'
const Contact = () => {
    const handlesubmit = ()=>{
        const email = document.getElementById("cusemail")
        const value = email.value
        if(value === ''){
            return toast.error("No email")
        }return toast.success("Thank you for submit your email")
    }
  return (
    <>
        <div className='contactcontain'>
        <div className="contact-title">
            <h2><BsBoxSeamFill/></h2>
            <h1>Get our new content straight to your inblox</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, inventore.</p>
        </div>
        <div className='contact-footer'>
            <input id='cusemail' type="text" placeholder='Your email' />
            <button onClick={handlesubmit}>Submit</button>
        </div>
        
        <Toaster/>
        
    </div>
    <hr />
    </>

  )
}

export default Contact