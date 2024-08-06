import React from 'react'
import './Login.css'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Toaster,toast } from 'react-hot-toast'
const Login = ({handleclick,setAuthorize}) => {
  const navigate = useNavigate()
  const [data,setData] = useState({
    username: "",
    password:""
  })

  const handlechange = (e)=>{
    setData((prev)=>({...prev,[e.target.name]:e.target.value}))
  }
  const handlesubmit = async (event)=>{
    event.preventDefault()
    try {
      const response = await axios.post("http://localhost:8000/api/login",data)
      if(response.data.status === "pass"){
        setAuthorize(true)
      }else{
        toast.error(response.data.message)
      }
    } catch (error) {
      toast.error("Password or username is wrong")
    }

  }
  return (
    <div className='mainlogin'>
      <div className='login'>
        <h1>Login</h1>
        <div className="login-input">
          <input type="text" placeholder='Username' onChange={handlechange} name='username' />
          <input type="Password" placeholder='Password' onChange={handlechange} name='password'/>
        </div>
        <button onClick={handlesubmit}>Login</button>
        <p>Don't have an account? <span onClick={handleclick}>Register</span></p>
      </div>
    <Toaster/>
    </div>
  )
}

export default Login