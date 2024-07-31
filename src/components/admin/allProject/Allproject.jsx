import React from 'react'
import './Allproject.css'
import { AiOutlineAppstore,AiOutlineBars } from "react-icons/ai";
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

        {/* status detail */}
        <div className="ad-details">
            {/* fetch data */}
            <div className="ad-details-data">
                <div>
                    <h4>This is the title</h4>
                    <h5>Catagory</h5>
                    <p>December 10,2020</p>
                </div>
                <hr />
                <div>
                    <p>Written by</p>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Allproject