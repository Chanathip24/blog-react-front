import React from 'react'
import './Exbloc.css'
import Card from '../card/Card'
import { useState } from 'react'



const Exbloc = ({post}) => {
    
    //data
    const [data,setData] = useState(post)
    
    //active page for pagination or cut data
    const curdata = data.slice(6,8)
  return (
    <>

        <div>
            <div className='mycard'>
            {curdata.map((item,index)=>(
                
                <Card key={index} data={item}/>
            )
            )}
            </div>

        </div>

        
        
        
        
        <hr />
    </>
  )
}

export default Exbloc