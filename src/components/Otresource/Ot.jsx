import React from 'react'
import './ot.css'
import Card2 from '../card2/Card2'
import { useState } from 'react'
const Ot = ({post}) => {
    const data= post
    //cut data
    const curdata = data.slice(0,3)
    
  return (
    <>
    <div className='o-container'>
        <div className='Other'>
            <div className='Other-title'>
                <h1>Other posts you might like</h1>
                <button>All posts</button>
            </div>
            <div className='card-container'>
                {curdata.map((item,index)=>(
                    <Card2 data={item} key={index}/>
                ))}
               
            </div>
            
        </div>
    </div>

    <hr />
    </>
  )
}

export default Ot