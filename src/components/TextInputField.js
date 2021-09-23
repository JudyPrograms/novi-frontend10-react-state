import React from "react";

function TextInputField ({label}) {

    return <>
        <label>
            {label}
            <input type="text"/>
        </label>
    </>
}

export default TextInputField