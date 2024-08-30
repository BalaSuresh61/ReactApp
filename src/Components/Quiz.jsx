/* eslint-disable react/prop-types */
// import React from 'react'
import { useEffect, useState } from 'react'
import './Quiz.css'


const Quiz = ({data}) => {
    const [show, setShow] = useState(false)
    const [score,setScore]=useState(0)
    const [question,setQuestion]=useState(0)
    const [timer,setTimer]=useState(10)
    // console.log(data)
    const checkAnswer=(e)=>{
        let answer=e.target.value
        if(data[question].Answer===answer){
            // console.log("correct")
            setScore((e)=>e+1)
        }
        if(data[question].id===data.length){
            setShow(true)
            // setQuestion(0)
        }
        setQuestion((e)=>e+1)
        setTimer(10)

    }
    const handleRestart=()=>{
        setShow(false)
        setScore(0)
        setQuestion(0)
        setTimer(10)
    }
    useEffect(()=>{
        let interval;
        if(timer > 0 && !show){
            interval=setInterval(()=>{
                setTimer((prevTimer)=>prevTimer-1)
                // console.log(timer)
            },1000)
        }
        else{
            clearInterval(interval)
            setShow(true)
        }

        return (()=>clearInterval(interval))
    },[timer, score, show])
    return (
        <div className="quiz-app">
            <div className='quiz-app-container'>
            {show ? (
                <div className="quiz-result" >
                    <h2>Your Score : {score}/{data.length}</h2>
                    <button onClick={handleRestart}>Restart</button>
                </div>) : (
                <div className="quiz-section">
                    <h2>Question {question+1}</h2>
                    <div className="question-area">
                        <p>{data[question].Question}</p>
                    </div>
                    <div className="options">
                        {data[question].Options.map((option)=>(<button key={option} onClick={checkAnswer} value={option}>{option}</button>))}
                    </div>
                    <div className="timer">
                        <p>Time Left: <span>{timer}s</span></p>
                    </div>
                </div>
            )}
            <div className="footer">
                <p>Designed By <span>Bala</span></p>
            </div>
        </div>
        </div>
    )
}

export default Quiz