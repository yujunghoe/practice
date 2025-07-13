import React from "react";
import styled from "styled-components"

const Wrapper=styled.div`
    border: 1px solid black;
    border-radius: 10px;
    margin: 10px;
`
function Write({title,content,onClick,id}){
    return (
<Wrapper onClick={onClick}>
    <h2 style={{marginLeft:'10px'}}>{title||'제목'}</h2>
    <p style={{marginLeft:'10px'}}>{content||'내용'}</p>
    </Wrapper>
    );
}
export default Write;