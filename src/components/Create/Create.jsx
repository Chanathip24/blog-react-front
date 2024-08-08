import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Create.css";
import { toast, Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { IoArrowBackCircle } from "react-icons/io5"
const Create = () => {
  const navigate = useNavigate();
  const date = new Date();
  const [data, setData] = useState({
    author: "",
    title: "",
    description: "",
    urlToImage: "",
    publishedAt: date,
    content: "",
  });
  const handlechange = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/api/create", data);
      if (res.data.message === "Success") {
        toast.success("Blog is created");
        setTimeout(() => {
          navigate("/Admin");
        }, 2000);
      } else {
        return toast.error(res.data.message);
      }
    } catch (error) {
      toast.error("Can't created blog kub");
    }
  };
  return (
    <div className="storecreate">
      
      <div className="Createcard">
        <div className="exit" onClick={()=>{
            navigate("/Admin")
        }}><IoArrowBackCircle/></div>
        <h1>Create a blog</h1>
        <div className="cc-storeinput">
            <label htmlFor="title">Title</label>
            <input
            type="text"
            onChange={handlechange}
            name="title"
            placeholder="Title"
            />

            <label htmlFor="title">Content</label>
            <textarea
            name="content"
            onChange={handlechange}
            placeholder="Content..."
            id=""
            />

            <label htmlFor="title">Description</label>
            <textarea
            name="description"
            onChange={handlechange}
            placeholder="Description..."
            id=""
            />

            <label htmlFor="title">ImageURL</label>
            <input
            type="text"
            name="urlToImage"
            onChange={handlechange}
            placeholder="Image"
            />

            <label htmlFor="title">Author</label>
            <input
            type="text"
            name="author"
            onChange={handlechange}
            placeholder="Author"
            />

            <button onClick={handlesubmit}>Create</button>
        </div>
        

      </div>
      <Toaster />
    </div>
  );
};

export default Create;
