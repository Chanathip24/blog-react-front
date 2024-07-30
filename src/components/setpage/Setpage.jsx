import React from 'react'
import { useState } from 'react'
import './page.css'
import { AiFillLeftSquare,AiFillRightSquare } from "react-icons/ai";

const Setpage = ({totaldata,dataperpage,setPage}) => {
    const [curpage , setCurpage] = useState(1)
    const totalpage = Math.ceil(totaldata/dataperpage)
    
    const handleclickplus = ()=>{
        let page = null
        
        setCurpage((curpage)=> {
            
            if(curpage < totalpage){
                
                page = curpage + 1
                setPage(page)
                return curpage + 1
            }return curpage
        })
        
    }
    const handleclickminus = ()=>{
        let page = null
        
        setCurpage((curpage)=> {
            if(curpage > 1){
                
                page = curpage - 1
                setPage(page)
                return curpage-1
            }return curpage
        })
        
    }
    
  return (
    <div>
        <div className='pagcon'>
            <ul>
                <li onClick={handleclickminus}><AiFillLeftSquare/></li>
                <li onClick={handleclickplus}><AiFillRightSquare/></li>
            </ul>
        </div>

    </div>
  )
}

export default Setpage