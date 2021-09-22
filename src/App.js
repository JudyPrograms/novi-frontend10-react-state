import React from 'react';
import './App.css';
import logo from "./assets/screenshot-logo.png"
import FruitCounter from "./components/FruitCounter.js"
import TextInputField from "./components/TextInputField.js"

// console.assert()

function App() {

    function resetHandler () {
        // reset counters in all FruitCounter components
        // return true
    }

    return (
        <>
            <img id="header" src={logo} alt="logo"/>
            <FruitCounter fruit="Aardbeien" resetState={resetHandler}/>
            <FruitCounter fruit="Bananen"/>
            <FruitCounter fruit="Appels"/>
            <FruitCounter fruit="Kiwi's"/>
            <button
                className="reset-button"
                type="button"
                onClick={resetHandler}
            >reset</button>
            <form action="">
                <TextInputField text="Voornaam"/>
                <TextInputField text="Achternaam"/>
                <TextInputField text="Leeftijd"/>
                <TextInputField text="Postcode"/>

                <label htmlFor="">
                    Bezorgfrequentie
                    <select name="frequency" id="frequency">
                        <option value="weekly">iedere week</option>
                        <option value="biweekly">om de week</option>
                        <option value="monthly">iedere maand</option>
                    </select>
                </label>

                <fieldset>
                    <input type="radio" id="day"/>
                    <label htmlFor="day">
                        Overdag
                    </label>
                    <input type="radio" id="night"/>
                    <label htmlFor="night">
                        's Avonds
                    </label>
                </fieldset>



            </form>
        </>
    );
}

export default App;
