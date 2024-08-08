import React, { useState, useEffect } from "react";
import Create from "../components/Create/Create";
import { checkauth } from "../Services/Globalservices";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Cblog = () => {
    //navigate
    const navigate = useNavigate()
  //cookie
  axios.defaults.withCredentials = true
  const [Authorize, setAuthorize] = useState(null);
  const cookie = async () => {
    try {
        const result = await checkauth();
        setAuthorize(result)
    } catch (error) {
        setAuthorize(false)
    }
    
  };
  useEffect(() => {
    cookie();
    if(Authorize === false) navigate('/login')
  }, [Authorize]);
    

  return (
    <div>
      <Create />
    </div>
  );
};

export default Cblog;
