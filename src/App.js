import React from 'react';
import './App.css';
import logo from "./assets/screenshot-logo.png"
import FruitCounter from "./components/FruitCounter.js"
import TextInputField from "./components/TextInputField.js"
import RadioButton from "./components/RadioButton";
import Button from "./components/Button";

// console.assert()

function App() {

    let resetState = false

    function handleReset () {
        resetState = true
        // reset counters in all FruitCounter components
        // return true
    }

    function handleSend () {
        // reset counters in all FruitCounter components
        // return true
    }

    return (
        <>
            {/*FRUIT COUNTERS*/}
            <img id="header" src={logo} alt="logo"/>
            <FruitCounter fruit="Aardbeien" state={resetState}/>
            <FruitCounter fruit="Bananen"/>
            <FruitCounter fruit="Appels"/>
            <FruitCounter fruit="Kiwi's"/>
            <Button value="RESET" onClickHandler={handleReset}/>

            {/*FORMULIER*/}
            <form action="">

                <TextInputField label="Voornaam"/>
                <TextInputField label="Achternaam"/>
                <TextInputField label="Leeftijd"/>
                <TextInputField label="Postcode"/>

                <label>
                    Bezorgfrequentie
                    <select name="frequency" id="frequency">
                        <option value="weekly">iedere week</option>
                        <option value="biweekly">om de week</option>
                        <option value="monthly">iedere maand</option>
                    </select>
                </label>

                <label>
                    Bezorgmoment
                    <div className="radio-buttons">
                        <RadioButton label="Overdag"/>
                        <RadioButton label="'s Avonds"/>
                    </div>
                </label>

                <label className="form-text-area">
                    Opmerking:
                    <textarea rows={5}/>
                </label>

                <label className="form-checkbox">
                    <input type="checkbox"/>
                    Ik ga akkoord met de voorwaarden
                </label>

                <div className="send-button">
                    <Button value="VERZEND" handleOnClick={handleSend()}/>
                </div>

            </form>
        </>
    );
}

export default App;
