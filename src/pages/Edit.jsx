import React,{useState,useEffect} from 'react'
import { checkauth } from '../Services/Globalservices';
import axios from 'axios';
import './css/Edit.css'
import { useNavigate, useParams } from 'react-router-dom';
import { Toaster,toast } from 'react-hot-toast';
const Edit = () => {
    axios.defaults.withCredentials = true
    const navigate = useNavigate()
    const [data , setData ] = useState({
        title : "",
        content : "",
        description: "",
        urlToImage : "",
        catagory : "Unknown"
    })


    const [Authorize, setAuthorize] = useState(null);
    const cookie = async () => {
      try {
          const result = await checkauth();
          setAuthorize(result)
      } catch (error) {
          setAuthorize(false)
      }
      
    };

    const handlechange = (e)=>{
        setData((prev)=>({...prev,[e.target.name]:e.target.value}))
        
    }
    const {id} = useParams()
    const handleclick = async (e) =>{
        e.preventDefault()
        try {
            const res = await axios.put("http://localhost:8000/api/blog/edit/"+id,data)
            console.log(res)
            if(res.statusText === "OK") {
                toast.success(`Edit Success`, {
                    style: {
                      border: '1px solid #713200',
                      padding: '16px',
                      color: '#713200',
                    },
                    iconTheme: {
                      primary: '#713200',
                      secondary: '#FFFAEE',
                    },
                  });
                setTimeout(() => {
                    navigate('/')
                }, 3000);
            }
            
        } catch (error) {
            toast.error("Error kub อ้วน")
            console.log(error)
        }
 
    }
    useEffect(() => {
      cookie();
      if(Authorize === false) navigate('/login')
    }, [Authorize]);
  return (
    <div className='edit'>
        <div className='e-card'>
            
            <h2>Edit your blog</h2>
            
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


            <label htmlFor="">Catagory</label>
            <select name="catagory"  onChange={handlechange}>
              <option value="Unknown"></option>
              <option value="Tools" >Tools</option>
              <option value="Shader">Shader</option>
              <option value="Modeling">Modeling</option>
              <option value="Artist">Artist</option>
              <option value="Animation">Animation</option>
              <option value="Generative">Generative</option>
            </select>
            <button onClick={handleclick} >Create</button>
        </div>
        
        
    <Toaster/>
    </div>
  )
}

export default Edit