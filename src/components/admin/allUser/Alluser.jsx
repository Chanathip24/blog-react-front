import React from 'react'
import Usercard from '../usercard/Usercard'
import './Alluser.css'
import { useState } from 'react'
const Alluser = () => {
   
  return (
    <div>
        <div className="all-card">
            <div className="all-card-title">
                <h1>Latest Client</h1>
            </div>
            <hr />
            <div className="all-card-data">
                <Usercard/>
                <Usercard/>
                <Usercard/>
                <Usercard/>
            </div>
        </div>
    </div>
  )
}

export default Alluser