import React from "react";

function FruitCounter ({fruit, resetState}) {

    const [counter, setCounter] = React.useState(0)

    // if (resetState) {
    //     setCounter(0)
    // }

    function handleMinusClick() {
        if (counter < 1) {
            return setCounter(0)
        }
        else {
            return setCounter(counter - 1)
        }
    }

    return <>
        <section>
            <h2>{fruit}</h2>
            <button
                type="button"
                onClick={handleMinusClick}
            >-</button>
            <p>{counter}</p>
            <button
                type="button"
                onClick={()=> setCounter(counter + 1)}
            >+</button>
        </section>
    </>
}

export default FruitCounter