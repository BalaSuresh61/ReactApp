import { useEffect, useState } from 'react'
import './Advice.css'
const Advice = () => {
    const [advice, setAdvice] = useState('Click the button to get your Advice');
    const [count, setCount] = useState(0)
    async function getAdvice() {
        const res = await fetch('https://api.adviceslip.com/advice')
        // console.log(url)
        const data = await res.json()
        console.log(data)
        setAdvice(data.slip.advice)
        setCount(count + 1)
        console.log(count)
    }
    useEffect(() => {
        getAdvice()
    }, []);

    return (
        <div className="advice-container">
            <div className='advice-app-container'>
                <h3>{advice}</h3>
                <button onClick={getAdvice}>Get Advice</button>
                <p>you have read <b>{count}</b> pieces of advice</p>
            </div>
        </div>
    )
}

export default Advice