import React from "react";

function FruitCounter ({fruit, state}) {

    const [counter, setCounter] = React.useState(0)

    if (state) {
        setCounter(0)
    }

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
            <div>
                <button
                    className="count-button"
                    type="button"
                    onClick={handleMinusClick}
                >-</button>
                <p>{counter}</p>
                <button
                    className="count-button"
                    type="button"
                    onClick={()=> setCounter(counter + 1)}
                >+</button>
            </div>
        </section>
    </>
}

export default FruitCounter