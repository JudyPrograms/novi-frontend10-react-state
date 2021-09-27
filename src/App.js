import React, {useState} from 'react'
import {useForm} from "react-hook-form"
import './App.css'
import logo from "./assets/screenshot-logo.png"
import FruitCounter from "./components/FruitCounter.js"
import TextInputField from "./components/TextInputField.js"
import RadioButton from "./components/RadioButton"
import Button from "./components/Button"


function App() {

    const {register, handleSubmit, formState: {errors}} = useForm()

    const [counter1, setCounter1] = useState(0)
    const [counter2, setCounter2] = useState(0)
    const [counter3, setCounter3] = useState(0)
    const [counter4, setCounter4] = useState(0)

    function resetCounters () {
        setCounter1(0)
        setCounter2(0)
        setCounter3(0)
        setCounter4(0)
    }

    function handleFormSubmit (data) {
        const fruitCount = {"Aardbeien": counter1, "Bananen": counter2, "Appels": counter3, "Kiwi's": counter4}
        console.log(data, fruitCount)
    }

    return (
        <>
            {/*FRUIT COUNTERS*/}
            <img id="header" src={logo} alt="logo"/>
            <FruitCounter
                fruit="🍓 Aardbeien"
                counter={counter1}
                handleMinusClick={() => counter1 < 1 ? setCounter1(0) : setCounter1(counter1 - 1)}
                handlePlusClick={() => setCounter1(counter1 + 1)}/>
            <FruitCounter
                fruit="🍌 Bananen"
                counter={counter2}
                handleMinusClick={() => counter2 < 1 ? setCounter2(0) : setCounter2(counter2 - 1)}
                handlePlusClick={() => setCounter2(counter2 + 1)}/>
            <FruitCounter
                fruit="🍏 Appels"
                counter={counter3}
                handleMinusClick={() => counter3 < 1 ? setCounter3(0) : setCounter3(counter3 - 1)}
                handlePlusClick={() => setCounter3(counter3 + 1)}/>
            <FruitCounter
                fruit="🍈 Kiwi's"
                counter={counter4}
                handleMinusClick={() => counter4 < 1 ? setCounter4(0) : setCounter4(counter4 - 1)}
                handlePlusClick={() => setCounter4(counter4 + 1)}/>

            <Button type="button" text="RESET" handleClick={resetCounters}/>

            {/*FORMULIER*/}
            <form action="" onSubmit={handleSubmit(handleFormSubmit)}>

                <TextInputField label="Voornaam" register={register} name="first-name" required={true} errors={errors}/>
                <TextInputField label="Achternaam" register={register} name="last-name" required={true} errors={errors}/>
                <TextInputField label="Leeftijd" register={register} name="age" required={true} errors={errors}/>
                <TextInputField label="Postcode" register={register} name="postal-code" required={true} errors={errors}/>

                <label>
                    Bezorgfrequentie
                    <select name="select-frequency" id="select-frequency" {...register("frequency")}>
                        <option value="weekly">iedere week</option>
                        <option value="biweekly">om de week</option>
                        <option value="monthly">iedere maand</option>
                    </select>
                </label>

                <label>
                    Bezorgmoment
                    <div className="radio-buttons-delivery">
                        <RadioButton label="Overdag" register={register}/>
                        <RadioButton label="Avond" register={register}/>
                    </div>
                </label>

                <label className="text-area-remarks">
                    Opmerking:
                    <textarea rows={5} {...register("remarks")}/>
                </label>

                <label className="checkbox-conditions">
                    <input type="checkbox" {...register("conditions", {required: "akkoord gaan vereist"})}/>
                    Ik ga akkoord met de voorwaarden
                </label>
                {/* DIT WERKT NIET:*/}
                {/*{errors.conditions && <p className="error-text">{errors.conditions.message}</p>}*/}

                <div className="send-button-container">
                    <Button type="submit" text="VERZEND"/>
                </div>

            </form>
        </>
    );
}

export default App;
