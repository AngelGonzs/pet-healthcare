import React from 'react'
import "./Button.css"

function Button({text,className,func}){
    if(className === "linkButton") return(
        <button className={className}>
            {text}
        </button>
    );

    if(className === "funcButton") return(
        <button className={className}
        onClick={func}>
            {text}
        </button>
    );
    
}

export default Button;