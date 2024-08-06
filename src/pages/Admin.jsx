import React from 'react'

import Adnav from '../components/admin/ad-nav/Adnav'
import Adhero from '../components/admin/ad-hero/Adhero'
import { checkauth } from '../Services/Globalservices'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const Admin = () => {
  axios.defaults.withCredentials = true
  const navigate = useNavigate()
  const [authorize,setAuthorize] = useState(null)
  const cookie = async()=>{
    try {
      const result = await checkauth()
      setAuthorize(result)
    } catch (error) {
      setAuthorize(false)
    }
  }
  useEffect(()=>{
    cookie()
    if(authorize == false) navigate('/login')
  },[authorize])
  return (
    <div>
        <Adnav/>
        <Adhero/>
    </div>
  )
}

export default Admin