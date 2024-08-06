import React from 'react'
import Login from '../admin/Login/Login'
import Register from '../admin/Register/Register'
import { useState,useEffect } from 'react'
import { checkauth } from '../../Services/Globalservices'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const Mainlogin = () => {
    axios.defaults.withCredentials = true;
    const [authorize,setAuthorize] = useState(null)
    const navigate = useNavigate()

    const cookie = async ()=>{
        try {
            const result = await checkauth()
            setAuthorize(result)
        } catch (error) {
            setAuthorize(false)
            console.log(error)
        }

    }
    //check register
    const [isRegis,setRegis] = useState(false)
    const handleclick = ()=>{
        setRegis(!isRegis)
    }
    useEffect(()=>{
        cookie()
        
    },[])
    useEffect(()=>{
        if(authorize === true) navigate('/Admin')
    },[authorize])
 
  return (
    <div>
        {isRegis ? <Register handleclick={handleclick} setAuthorize={setAuthorize}/> :  <Login handleclick={handleclick} setAuthorize={setAuthorize}/>}
        
    </div>
  )
}

export default Mainlogin