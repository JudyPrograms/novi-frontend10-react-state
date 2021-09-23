import React from "react"

function Button ({value, handleOnClick}) {
    return <>
        <button
            className="normal-button"
            type="button"
            onClick={handleOnClick}
        >{value}</button>
    </>
}

export default Button