import React from "react";

function TextInputField ({text}) {

    return <>
        <label htmlFor="">
            {text}
            <input type="text"/>
        </label>
    </>
}

export default TextInputField