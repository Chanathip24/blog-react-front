import React from 'react'
import Blog from '../components/blog/Blog'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import Hero from '../components/Hero/Hero'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'
const MainBlog = () => {
    const {id} = useParams()
    const [posts , setPosts] = useState([])
    const post = posts[0]
    const getblogbyid = async (myid)=>{
        try {
            const res = await axios.get("http://localhost:8000/api/blog/" + myid)
            setPosts(res.data)
            
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        getblogbyid(id)
        
    },[])
    
  return (
    <>
    <Navbar/>
    <Hero/>
    {posts.map((item,index)=>(
        <Blog post={item}/>
    ))}
    
    <Footer/>
    </>
  )
}

export default MainBlog