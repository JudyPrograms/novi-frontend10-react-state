import React from "react";

function TextInputField ({label, register, name, errors, required}) {

    return <>
        <label>
            {label}
            <input type="text" {...register(name, {required: required})}/>
        </label>
        {/*DIT WERKT NIET:*/}
        {/*{errors.name && <p className="error-text">invullen vereist</p>}*/}
    </>
}

export default TextInputField