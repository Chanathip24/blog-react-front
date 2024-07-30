import React from 'react'
import './Card.css'
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { getMonthname } from '../../Services/Globalservices';
const Card = ({data}) => {
    //tran isostr
    const date = new Date(data.publishedAt)

    const monthnum = date.getMonth()
    const getdate = date.getDate()

    //getmonthname
    const mn = getMonthname(monthnum)
  return (
    <div className="card">
        <div className="card-pic"> 
            <img src={data.urlToImage ? data.urlToImage : "https://t3.ftcdn.net/jpg/04/62/93/66/360_F_462936689_BpEEcxfgMuYPfTaIAOC1tCDurmsno7Sp.jpg"}/>
            <div className="card-catastore">
                <p className='card-catagory'>Apple</p>
            </div>
        </div>
        <div className='caption'>
            <div className='captionst'>
                <h1>Description</h1>
                <p>{data.description}</p>
            </div>

        </div>
        <div className="card-title">
            <p className='card-title-p'>{data.title}</p>
            <span><FaArrowUpRightFromSquare/></span>
        </div>
        <div className='card-info'>
            <p>{getdate} {mn}</p>
            <li>{data.author}</li>
        </div>
    </div>
  )
}

export default Card