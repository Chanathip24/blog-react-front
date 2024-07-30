import React from 'react'
import './Footer.css'
import { SiAbstract } from "react-icons/si";
import Footer2 from '../Footer2/Footer2'

const Footer = () => {
  return (
    <>
        <div className='footer'>
        <div className="ft-title">
          <div className="titlecon">
                <h1><SiAbstract/></h1>
                <h1>Title</h1>
            </div>

            <p>Blog Template by <span>Chanathip</span></p>
        </div>
        <div className="ft-pages">
            <h2>Pages</h2>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
        <div className="ft-admin">
            <h2>Admin</h2>
            <ul>
                <li>Edit</li>
                <li>Update</li>
                <li>Delete</li>
            </ul>
        </div>
        
    </div>
    <hr />
    <Footer2/>
    </>

  )
}

export default Footer