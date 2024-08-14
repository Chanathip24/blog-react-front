import React from 'react'
import Usercard from '../allusercard/Usercard'
import './Alluser.css'
import { useState, useEffect} from 'react'
import axios from 'axios'
const Alluser = () => {
    const [users , setUsers] = useState([])
   const alluser = async ()=>{
    try {
        const res = await axios.get("http://localhost:8000/api/user/getall")
        setUsers(res.data.result)
        
    } catch (error) {
        console.log(error)
    }
      
   }
   //useeffect to fetch here 
   useEffect(()=>{
        alluser()
   },[])
  return (
    <div>
        <div className="all-card">
            <div className="all-card-title">
                <h2>Latest Client</h2>
            </div>
            <hr />
            <div className="all-card-data">
                {users.map((item,index)=>{
                    return <Usercard key={index} user={item}/>
                })}
                

            </div>
            
        </div>
    </div>
  )
}

export default Alluser