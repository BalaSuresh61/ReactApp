import { useState } from 'react'
import './Calander.css'
import leftArrow from '../assets/left-arrow.svg'
import rightArrow from '../assets/right-arrow.svg'

const days = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"]
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]


const Calander = () => {
    const [selectedDate, setSelectedDate] = useState(new Date())

    const daysInMonth = () => {
        const dayArray = [];

        const firstDay = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1)
        const lastDay = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0)

        for (let i = 0; i < firstDay.getDay(); i++) {
            dayArray.push(null)
        }
        for (let i = 1; i <= lastDay.getDate(); i++) {
            dayArray.push(new Date(selectedDate.getFullYear(), selectedDate.getMonth(), i))
        }
        // console.log(dayArray)

        return dayArray;
    }

    const isSameDate = (day1, day2) => {
        if (day1.getFullYear() === day2.getFullYear() && day1.getMonth() === day2.getMonth() && day1.getDate() === day2.getDate()) return true
    }
    const handleChangeMonth = (e) => {
        const newMonth = parseInt(e.target.value, 10);
        setSelectedDate(new Date(selectedDate.getFullYear(), newMonth, 1))
    }
    const handleChangeYear = (e) => {
        const newYear = parseInt(e.target.value, 10);
        setSelectedDate(new Date(newYear, selectedDate.getMonth(), 1))
    }
    const changeNextMonth = () => {
        setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 1))
    }
    const changePreviousMonth = () => {
        setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1, 1))
    }
    return (
        <div className="calander">
            <div className='calander-app-container'>
            <div className="header">
                <button onClick={changePreviousMonth}><img src={leftArrow} /></button>
                <select value={selectedDate.getMonth()} onChange={handleChangeMonth}>
                    {months.map((month, index) => (<option key={index} value={index}>{month}</option>))}
                </select>
                <select value={selectedDate.getFullYear()} onChange={handleChangeYear}>
                    {Array.from({ length: 10 }, (_, i) => selectedDate.getFullYear() - 5 + i).map((year) => (<option key={year}>{year}</option>))}
                </select>
                <button onClick={changeNextMonth}><img src={rightArrow} height={"15px"} /></button>
            </div>
            <div className="daysOfWeeks">
                {days.map((day, index) => (<div key={index}>{day}</div>))}
            </div>
            <div className="days">
                {daysInMonth().map((day, index) => (<div key={index} className={day ? (isSameDate(day, new Date())) ? 'day current' : 'day' : 'empty'}>{`${day ? day.getDate() : ''}`}</div>))}
            </div>
        </div>
        </div>
    )
}

export default Calander