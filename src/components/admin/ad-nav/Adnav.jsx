import React from "react";
import "./Adnav.css";
import { FaSearch, FaMoon, FaRegMoon } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";
import { useState } from "react";
import { FaBell } from "react-icons/fa";
import { IoMdExit } from "react-icons/io";
import { logout } from "../../../Services/Globalservices";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Adnav = () => {
  const navigate = useNavigate()
  const lo = ()=>{
    if(logout()) navigate('/login')
  }
  //go to create page
  const gtc = ()=>{
    navigate('/create')
  }
  
  const [isDark, setDark] = useState(false);
  return (
    <div className="ad-nav">
      <div className="nav-logo">
        <h3>Dashboard</h3>
      </div>
      <div className="inputstore">
        <input type="text" className="nav-input" placeholder="Search" />
        <FaSearch />
      </div>
      <div className="nav-addon">
        {isDark ? (
          <span>
            <FaMoon />
          </span>
        ) : (
          <span>
            <FaRegMoon />
          </span>
        )}
        <span>
          <FaCirclePlus onClick={gtc}/>
        </span>
        <span>
          <FaBell />
        </span>
        <span>
          <IoMdExit onClick={lo} />
        </span>
      </div>
      <div className="nav-username">
        <img
          src="https://st3.depositphotos.com/1017228/18878/i/450/depositphotos_188781580-stock-photo-handsome-cheerful-young-man-standing.jpg"
          alt=""
        />
        <h3>Chanathip C.</h3>
      </div>
    </div>
  );
};

export default Adnav;
