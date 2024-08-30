/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import './FAQ.css'

const FAQContainer = ({ question, answer }) => {
    const [show, setShow] = useState(false)

    const handleShow = () => [
        setShow(!show)
    ]
    return (
        <div className={`faq-container ${show ? 'active' : ''}`}>
            <div className="faq-header" onClick={handleShow}>{question}</div>
            <div className="faq-body">
                <div className="faq-body-content">{answer}</div>
            </div>
        </div>
    )
}

const FAQ = ({ data }) => {
    return (
        <div className="faq">
            <div className='faq-app-container'>
                <h1>FAQs</h1>
                {data.map((item) => (<FAQContainer key={item.id} question={item.Question} answer={item.Answer} />))}
            </div>
        </div>
    )
}

export default FAQ