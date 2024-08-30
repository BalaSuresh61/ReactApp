import { useEffect, useState } from 'react'
import './DigitalClock.css'

const DigitalClock = () => {
    const [currentTime, setCurrentTime] = useState(new Date())

    useEffect(() => {
        const timer = setInterval(() => {
            // console.log("hi")
            setCurrentTime(new Date())
            // console.log(currentTime)
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    const addZero = (time) => {
        return time < 10 ? `0${time}` : time
    }

    const formatDate = (date) => {
        const options = { weekday: "long", year: "numeric", day: "numeric", month: "long" }
        return date.toLocaleDateString(undefined, options);
    }
    return (
        <div className="digital-clock">
            <div className="digital-app-container">
                <h1>Digital Clock</h1>
                <div className="time">{addZero(currentTime.getHours())} : {addZero(currentTime.getMinutes())} : {addZero(currentTime.getSeconds())} {currentTime.getHours() > 12 ? "PM" : "AM"}</div>
                <div className="date">{formatDate(currentTime)} </div>
            </div>
        </div>
    )
}

export default DigitalClock