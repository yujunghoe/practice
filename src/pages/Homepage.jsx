import React from "react";
import styled from "styled-components";
import Write from "../component/Write";
import Button from "../component/Button";
import Header from "../component/Header";
import { useNavigate } from "react-router-dom";
import useStore from "../Store";

function Home() {
const dummyPosts = [
    { id: 1, title: '도겸이의 작은 정원', content: '안녕하세요! 씨앗입니다' },
    { id: 2, title: '학준이의 작은 꿈', content: '안녕하세요.김학준입니다.' },
    { id: 3, title: '하은이의 작은 키', content: '안녕하세요.158입니다.' },
    ];

const {
    posts: userPosts,
    likes,
    dislikes,
    likedPosts,
    dislikedPosts,
    incrementLike,
    incrementDislike
    } = useStore();

const fullPosts = [...userPosts, ...dummyPosts]; // 사용자 글 + 더미 글 합침

const navigate = useNavigate();

const handleClick = () => {
    alert('아직 미구현');
    };

const handleOnClick = () => {
    navigate('/write');
    };

return (
    <>
        <Header />
        <div>
        {fullPosts.map((post) => (
            <div key={post.id} style={{ marginBottom: '20px' }}>
            <Write
                id={post.id}
                title={post.title}
                content={post.content}
                onClick={handleClick}
            />
            <button
                onClick={() => incrementLike(post.id)}
                disabled={likedPosts.includes(post.id)}
                style={{ marginRight: '10px' }}
            >
                👍 {likes[post.id] || 0}
            </button>

            </div>
        ))}
        </div>
        <Button title='글 작성하기' onClick={handleOnClick} />
    </>
    );
}

export default Home;
