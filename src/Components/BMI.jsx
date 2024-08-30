// import React from 'react'
import './BMI.css'
import bmiImg from '../../src/assets/bmi.png';
import { useState } from 'react';

const BMI = () => {

    const [height, setHeight] = useState('')
    const [weight, setWeight] = useState('')
    const [bmi, setBmi] = useState(null)
    const [bmiStatus, setBmiStatus] = useState('')
    const [error, setError] = useState('')

    const calculateBMI = () => {
        let bmiValue;
        let isValidHeight = /^\d+$/.test(height)
        let isValidWeight = /^\d+$/.test(weight)
        if (isValidHeight && isValidWeight) {
            let heightInMeter = height / 100;
            bmiValue = weight / (heightInMeter * heightInMeter)
            setBmi(bmiValue.toFixed(2))
            if (bmiValue < 18.5) {
                setBmiStatus("Under Weight")
            } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
                setBmiStatus("Normal Weight")
            } else if (bmiValue >= 24.9 && bmiValue < 29.9) {
                setBmiStatus("Over Weight")
            } else {
                setBmiStatus("Obese")
            }
            setError('')
        } else {
            setBmi(null)
            setBmiStatus('')
            setError("Enter a valid numeric values for height and weight")
        }

    }

    const clearValue = () => {
        setHeight('')
        setWeight('')
        setBmi(null)
        setBmiStatus('')
    }

    return (
        <div className="bmi-container">
            <div className='main'>
                <h1>BMI Calculator</h1>
                <div className="app-container">
                    <div className="img-box">
                        <img src={bmiImg} alt="image" />
                    </div>
                    <div className="data">
                        <div className="height-container">
                            {error && <p className='error-messages'>{error}</p>}
                            <label htmlFor="height">Height (cm)</label>
                            <input type="text" value={height} id="height" onChange={(e) => { setHeight(e.target.value) }} />
                        </div>
                        <div className="weight-container">
                            <label htmlFor="weight">Weight (Kg)</label>
                            <input type="text" value={weight} id="weight" onChange={(e) => { setWeight(e.target.value) }} />
                        </div>
                        <div className="buttons">
                            <button className='calculate' onClick={calculateBMI}>Calculate</button>
                            <button className='clear' onClick={clearValue}>Clear</button>
                        </div>
                        {bmi && <div className="result">
                            <p>Your BMI is {bmi}</p>
                            <p>{bmiStatus}</p>
                        </div>}
                        <footer className='footer'>
                            <p>Designed by <b>Bala</b></p>
                        </footer>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BMI