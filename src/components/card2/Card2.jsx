import React from 'react'
import './Card2.css'
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { getMonthname } from '../../Services/Globalservices';

const Card2 = ({data}) => {
    const date = new Date(data.publishedAt)
    const day= date.getUTCDate()
   const mn = getMonthname(date.getUTCMonth())
   
  return (
    <>
    <div className='card2'>
        
        <div className="card2-img">
            <img src={data.urlToImage ? data.urlToImage:"https://i.redd.it/4yos3xl8ocw91.jpg"} alt="" />
            <div className='caption2'>
                <div className='caption2-body'>
                    <h3>Description</h3>
                    <p>{data.description}</p>
                </div>

            </div>
        </div>

        <div className="card2-title">
            <h2>{data.title}</h2>
            <FaArrowUpRightFromSquare/>
        </div>
        <div className="card2-detail">
            <p>{day} {mn}</p>
            <p>{data.author ? data.author : "No author"}</p>
        </div>
    </div>
    </>
  )
}

export default Card2