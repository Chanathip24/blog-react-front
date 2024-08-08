import React from 'react'
import { useState ,useEffect} from 'react'
import axios from 'axios'
import { Toaster,toast } from 'react-hot-toast'
const Register = ({handleclick,setAuthorize}) => {
  


  const [data,setData] = useState({
    username:"",
    email : "",
    fname : "",
    lname : "",
    password : ""
  })


  const handlechange = (e)=>{
    setData((prev)=>({...prev,[e.target.name] : e.target.value}))
    
  }
  const handlesubmit = async (event)=>{
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/api/register",data)
      if(response.data.status === "success"){
        console.log("success")
        setAuthorize(true)
      }else{
        toast.error(response.data.message)
      }
    } catch (error) {
      toast.error("Email or username is already registed")
    }

  }

  
  return (
    <div className="mainlogin">
      <div className='login'>
        <h1>Register</h1>
        <div className="login-input">
          <input type="text" placeholder='Username' onChange={handlechange} name='username'/>
          <input type="email" name='email' onChange={handlechange} placeholder='Email'/>
          <input type="text" name='fname' onChange={handlechange} placeholder='Firstname' />
          <input type="text" name="lname" onChange={handlechange} placeholder='Lastname'/>
          <input type="password" placeholder='Password' onChange={handlechange} name='password'/>
        </div>
        <button onClick={handlesubmit} >Register</button>
        <p>Already have an account? <span onClick={handleclick}>Login</span></p>
      </div>
      <Toaster/>
    </div>

  )
}

export default Register