import React, { useState } from "react";
import Button from "../component/Button";
import Header from "../component/Header";
import { useNavigate } from "react-router-dom";
import useStore from "../Store";

function Writenew() {
const [title, setTitle] = useState('');
const [content, setContent] = useState('');
const navigate = useNavigate();
const addPost = useStore((state) => state.addPost);

const handleChange = () => {
    if (!title || !content) {
    alert("제목과 내용을 입력해주세요.");
    return;
    }
    addPost({ title, content });
    navigate("/");
    };

    return (
    <>
        <Header />
        <input
        type="text"
        value={title}
        placeholder="제목을 입력해주세요."
        onChange={(e) => setTitle(e.target.value)}
        style={{ height: '50px', width: '1000px', margin: '30px' }}
        />
        <textarea
        value={content}
        placeholder="내용을 입력해주세요."
        onChange={(e) => setContent(e.target.value)}
        style={{ height: '400px', width: '1000px', margin: '30px' }}
        />
        <div>
        <Button title="글 작성하기" onClick={handleChange} />
        </div>
    </>
  );
}

export default Writenew;
