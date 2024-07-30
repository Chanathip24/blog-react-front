import React from 'react'
import './Catagory.css'
import { FaScrewdriverWrench } from "react-icons/fa6"
import { AiFillCodepenCircle,AiFillCamera } from "react-icons/ai";
import { PiPictureInPictureFill } from "react-icons/pi";
import { GiAnimalHide } from "react-icons/gi";
import { FaRobot } from "react-icons/fa";
const Catagory = () => {
  return (
    <div >
        <div className='catagory'>
            <div className='cata_con'>
                <ul>
                    <li><FaScrewdriverWrench/> Tools</li>
                    <li>< AiFillCodepenCircle/> Shader</li>
                    <li><AiFillCamera/> modeling</li>
                    <li><PiPictureInPictureFill/>Artist</li>
                    <li><GiAnimalHide/>Animation</li>
                    <li><FaRobot/>Generative</li>
                </ul>
            </div>
        </div>
        <hr />
    </div>
  )
}

export default Catagory