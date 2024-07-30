import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import Catagory from '../components/catagories/Catagory'
import Exbloc from '../components/exbloc/Exbloc'
import Contact from '../components/contact/Contact'
import Ot from '../components/Otresource/Ot'
import Footer from '../components/Footer/Footer'

import { useState,useEffect } from 'react'
import { fetchData } from '../Services/Globalservices'
import Loading from '../components/loading/Loading'
import { Toaster } from 'react-hot-toast'


const Index = () => {
    window.addEventListener("scroll",()=>{
        const nav = document.getElementById('nav')
        const logo = document.getElementById('logo')
        if(window.scrollY>200){
            nav.classList.add("bgnav")
            logo.classList.add("logoorg")
        }else{
            nav.classList.remove("bgnav")
            logo.classList.remove("logoorg")
        }
    })
    //articles
    const [data,setData] = useState([])
    //loading
    const [loading,setLoading] = useState(true)

    //usefetch
    useEffect(()=>{
        //fetchdata()
        fetchData({setLoading,setData})
        
},[])
    
  return (
    <div>
        {loading ? <Loading loading={loading}/> : 
        <> 
        <Navbar/>
        <Hero/>
        <Catagory/>
        <Exbloc post={data}/>
        <Contact/>
        <Ot post={data}/>
        <Footer/>
        <Toaster/> 
        </>     }

    </div>
  )
}

export default Index