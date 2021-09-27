import React from "react";

function FruitCounter ({fruit, counter, handleMinusClick, handlePlusClick, register}) {

    return <>
        <section>
            <h2>{fruit}</h2>
            <div>
                <button
                    className={counter > 0 ? "count-button-red" : "count-button"}
                    type="button"
                    onClick={handleMinusClick}
                >-</button>
                <p className={counter > 0 ? "counter-red" : "counter"}>{counter}</p>
                <button
                    className={counter > 0 ? "count-button-red" : "count-button"}
                    type="button"
                    onClick={handlePlusClick}
                >+</button>
            </div>
        </section>
    </>
}

export default FruitCounter