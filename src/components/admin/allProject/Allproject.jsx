import React from 'react'
import './Allproject.css'
import { AiOutlineAppstore,AiOutlineBars } from "react-icons/ai";
import Adcard from '../ad-card/Adcard';
const Allproject = () => {
  return (
    <div className='adcontainer'>
        {/*Top of container */}
        <div className='adheader'>
            {/* Title of container */}
            <div className='ad-title'>
                <h2>Project</h2>
                <h2>December,12</h2>
            </div>

            {/* Status */}
            <div className='ad-title-secondary'>
                <div className='ad-blog'>
                    <div className='ad-blog-data'>
                        <h2>45</h2>
                        <p>In Progress</p>
                    </div>
                    <div className='ad-blog-data'>
                        <h2>24</h2>
                        <p>Upcoming</p>
                    </div>
                    <div className='ad-blog-data'>
                        <h2>62</h2>
                        <p>Total Projects</p>
                    </div>
                </div>
                <div className="ad-blog">
                    <h2><AiOutlineAppstore/></h2>
                    <h2><AiOutlineBars/></h2>
                </div>
            </div>
        </div>

        {/* Card of each blog */}
        <div className='allblog'>
            <div className="storeblog">
                <Adcard/>
                <Adcard/>
                <Adcard/>
                <Adcard/>
            </div>
        </div>



    </div>
  )
}

export default Allproject