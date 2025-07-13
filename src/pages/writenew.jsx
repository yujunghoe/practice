import React from "react";
import Button from "../component/button";
import { useState } from "react";
import Header from "../component/header";
import { useNavigate } from "react-router-dom";


function Writenew(){
    const [title,setTitle]=useState('')
    const [content,setContent]=useState('')
    const navigate=useNavigate();
    const handlechange=()=>{
        navigate("/", { state: { title, content } });
    };
    return(
        <>
        <Header/>
        <input
        type="text"
        value={title}
        placeholder="제목을 입력해주세요."
        onChange={(e)=> setTitle(e.target.value)}
        style={{
            height:'50px',width:'1000px',margin:'30px'  
        }}
        >    
        </input>
        
        
        <textarea
        type="text"
        value={content}
        placeholder="내용을 입력해주세요."
        onChange={(e)=> setContent(e.target.value)}
        style={{
            height:'400px',width:'1000px',margin:'30px'  
        }}
        ></textarea>
        <div>
        <Button title='글 작성하기' onClick={handlechange}/>
        </div>
        </>
);

}
export default Writenew;