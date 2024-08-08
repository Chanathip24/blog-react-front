import React from 'react'

import Adnav from '../components/admin/ad-nav/Adnav'
import Adhero from '../components/admin/ad-hero/Adhero'
import { checkauth } from '../Services/Globalservices'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Loading from '../components/loading/Loading'
import axios from 'axios'
import { fetchData } from '../Services/Globalservices'
const Admin = () => {
  axios.defaults.withCredentials = true
  const navigate = useNavigate()
  const [post,setData] = useState(null)
  const [authorize,setAuthorize] = useState(null)
  const [loading,setLoading] = useState(true)
  const cookie = async()=>{
    try {
      const result = await checkauth()
      setAuthorize(result)
    } catch (error) {
      setAuthorize(false)
    }finally{
      setLoading(false)
    }
  }
  useEffect(()=>{
    cookie()
    
    if(authorize == false) navigate('/login')
  },[authorize])

  useEffect(()=>{
    fetchData({setLoading,setData})
  },[])
  return (
    <div>
      {loading ? <Loading loading={loading}/> :
      <>
        <Adnav/>
        <Adhero post={post}/>
      </>   
      }

    </div>
  )
}

export default Admin