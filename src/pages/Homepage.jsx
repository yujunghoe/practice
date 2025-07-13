import React from "react";
import styled from "styled-components";
import Write from "../component/write";
import Button from "../component/button";
import Header from "../component/header";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
function Home() {
    const posts = [
    { id: 1, title: '도겸이의 작은 정원', content: '안녕하세요! 씨앗입니다'},
    { id: 2, title: '학준이의 작은 꿈',content: '안녕하세요.김학준입니다.' },
    { id: 3, title: '하은이의 작은 키', content: '안녕하세요.158입니다.' }
];

const navigate=useNavigate();
const location = useLocation();

const newPost = location.state;
function handleClick(){
    alert('아직 미구현')
}

const handleonClick = ()=>{
    navigate('/write')
};

const fullPosts = newPost
    ? [{ id: posts.length + 1, ...newPost }, ...posts]
    : posts;

return (
    <>
    <Header></Header>
        <div>
        {fullPosts.map((post) => (
            <Write
            key={post.id}
            id={post.id}
            title={post.title}
            content={post.content}
            onClick={handleClick}
            />
        ))}
        </div>
        <Button title='글 작성하기'onClick={handleonClick}></Button>
    </>    
);
}
export default Home;