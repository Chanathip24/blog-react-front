import React from 'react'
import './ft2.css'
import { FaLinkedin,FaFacebook,FaGithub } from "react-icons/fa";
const Footer2 = () => {
  return (
    <div className='ft2'>
        <div className='ft2-copy'>© Blog All right reserved. Powered by Chanathip</div>
        <div className='ft2-logo'>
            <ul>
                <li><FaLinkedin/></li>
                <li><FaFacebook/></li>
                <li><FaGithub/></li>
            </ul>
        </div>
    </div>
  )
}

export default Footer2