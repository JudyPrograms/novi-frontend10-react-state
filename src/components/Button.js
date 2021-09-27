import React from "react"

function Button ({type, text, handleClick}) {
    return <>
        <button
            className="normal-button"
            type={type}
            onClick={handleClick}
        >{text}</button>
    </>
}

export default Button