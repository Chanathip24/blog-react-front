import React from 'react'
import { BsThreeDotsVertical } from "react-icons/bs"
import './Adcard.css'
import { useState,useEffect } from 'react'
//random pastelcolor
import { generateRandomPastelColor } from '../../../Services/Globalservices'
const Adcard = () => {
    const [isOpen,setOpen] = useState(false)
    const [color, setColor] = useState('')

    //setbgcolor of card
    useEffect(()=>{
        setColor(generateRandomPastelColor())
    },[])
    const cardstyle = {
        backgroundColor: color,
        borderRadius : 10,
    }
    const toggledropdown = ()=>{
        setOpen(!isOpen)
        
    }
    //เหลือ style dropdown and adjust
  return (
    <div>
            
            {/* status detail */}
            <div className="ad-details" style={cardstyle}>
            {/* fetch data card */}
            {isOpen ?   
            <div className='dropdown'>
                    <select name="" id="">
                        <option value="">Edit</option>
                        <option value="">Delete</option>
                    </select>
            </div> : null}

                <div className="ad-details-data">
                    <div className='ad-card-date'>
                        
                        <p>December 10, 2020</p>
                        <div className='carddropdownstore'>
                            <BsThreeDotsVertical className='carddropdown'  onClick={toggledropdown}/>
                        </div>
                        
                        

                    </div>

                    <div className='ad-card-title'>
                        <h4>Title</h4>
                        <h5>Catagory</h5>
                    </div>

                    <hr />
                    <div className='ad-card-detail'>
                        <div className='ad-card-detail-img'>
                            <img src="https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg" alt="" />
                        </div>
                        <div className='caldate'>
                            <p>3 Days ago</p>
                        </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Adcard