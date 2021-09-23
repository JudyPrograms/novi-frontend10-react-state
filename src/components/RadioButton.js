import React from "react"

function RadioButton ({label}) {
    return <>
        <input type="radio" id={label}/>
        <label className="radio-label" htmlFor={label}>
            {label}
        </label>
    </>
}

export default RadioButton