import React from "react";

function Button(props){
    const{title,onClick}=props;

    return <button onClick={onClick}>
        {title || 'button'}
    </button>
}
export default Button;