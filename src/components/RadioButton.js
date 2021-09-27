import React from "react"

function RadioButton ({label, register}) {
    return <>
        <input type="radio" id={label} value={label} {...register("delivery")}/>
        <label className="radio-label" htmlFor={label}>
            {label}
        </label>
    </>
}

export default RadioButton