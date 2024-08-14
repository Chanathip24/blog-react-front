import React, { useEffect } from 'react'
import './Allproject.css'
import { AiOutlineAppstore,AiOutlineBars } from "react-icons/ai";
import Adcard from '../ad-card/Adcard';
import { useState } from 'react';
import { getfullMonthname } from '../../../Services/Globalservices';
import axios from 'axios';
const Allproject = ({post}) => {
    const [isActive,setActive] = useState(false)
    const date = new Date()
    const datenum = date.getDate()
    const month = getfullMonthname(date.getMonth())

    //total blogs and users
    const [data,setData] = useState({
        Blog : 0,
        Users : 0
    })

    const {Blog,Users} = data

    const fetchtotal = async ()=>{
        try {
            const res = await axios.get("http://localhost:8000/api/data/gettotal")
            if(res.status === 200){
                setData({Blog: res.data.Blog[0].Blog, Users : res.data.Users[0].Users})
            }
        } catch (error) {
            console.log("Fetch total error",error)
        }

    }
    useEffect(()=>{
        fetchtotal()
    },[])
  return (
    <div className='adcontainer'>
        {/*Top of container */}
        <div className='adheader'>
            {/* Title of container */}
            <div className='ad-title'>
                <h2>Project</h2>
                <h2>{month},{datenum}</h2>
            </div>

            {/* Status */}
            <div className='ad-title-secondary'>
                <div className='ad-blog'>
                    <div className='ad-blog-data'>
                        <h2>{Blog}</h2>
                        <p>Total Blog</p>
                    </div>
                    <div className='ad-blog-data'>
                        <h2>{Users}</h2>
                        <p>Total Users</p>
                    </div>
                </div>
                <div className="ad-blog">
                    <h2 className='show'><AiOutlineAppstore/></h2>
                    <h2 className='show'><AiOutlineBars/></h2>
                </div>
            </div>
        </div>

        {/* Card of each blog */}
        <div className='allblog'>
            <div className="storeblog">
                {post ? post.map((item,index)=>(
                    
                    <Adcard post={item} key={index}/>
                )) : <h1>No data</h1>}
                

            </div>
        </div>



    </div>
  )
}

export default Allproject