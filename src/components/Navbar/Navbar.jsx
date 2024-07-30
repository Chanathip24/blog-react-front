import React from 'react'
import '../Navbar/Navbar.css'
import { AiFillFire } from "react-icons/ai";
const Navbar = () => {

  return (
    <nav id='nav'>
        <ul>
            <li><a href="https://google.com">About</a></li>
            <li className='test'>Contact</li>
            
        </ul>
        <h1 className='logo' id='logo'><AiFillFire/>Blog</h1>
        <div className='contain'>
          <input type="text" className='rounded' placeholder='Search' />
        </div>
        
    </nav>
  )
}

export default Navbar