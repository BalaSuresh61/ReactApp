// import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import FoodCart from "./Components/FoodCart"
// import Cart from './Components/Cart';
import Quiz from "./Components/Quiz"

import Calander from "./Components/Calander"

import FAQ from "./Components/FAQ"

import DigitalClock from "./Components/DigitalClock"
import PasswordGenerator from "./Components/PasswordGenerator"

import CurrencyConverter from "./Components/CurrencyConverter"

import Advice from "./Components/Advice"
// import Form from "./Components/Form"
import QRGenerator from "./Components/QRGenerator"
// import Flex from './Components/Flex'
import BMI from './Components/BMI'
import Weather from './Components/Weather'

import Profile from './Components/Profile';
import WelcomePage from './Components/WelcomePage';
const App = () => {
  // return (<>
  //   <Profile name="Bala Suresh" city="Tirunelveli" status={true}
  //   description="Backend Developer" 
  //   skills={["HTML","CSS","JavaScript","NodeJs","Mysql","Java"]}/>
  //   <Profile name="Bala Suresh" city="Tirunelveli" status={true}
  //   description="Backend Developer" 
  //   skills={["HTML","CSS","JavaScript","NodeJs","Mysql","Java"]}/>

  // </>)
  const faq_data = [
    { id: 1, Question: "What is ReactJS", Answer: "ReactJS is a JavaScript library used to build reusable components for the view layer in MVC architecture. It is highly efficient and uses a virtual DOM to render components. It works on the client side and is written in JSX." },
    {
      id: 2, Question: "Explain the building blocks of React?", Answer: `The five main building blocks of React are:

Components: These are reusable blocks of code that return HTML.
JSX: It stands for JavaScript and XML and allows you to write HTML in React.
Props and State: props are like function parameters and State is similar to variables.
Context: This allows data to be passed through components as props in a hierarchy.
Virtual DOM: It is a lightweight copy of the actual DOM which makes DOM manipulation easier.`},
    { id: 3, Question: "What is virtual DOM in React?", Answer: "React uses Virtual DOM which is like a lightweight copy of the actual DOM(a virtual representation of the DOM). So for every object that exists in the original DOM, there is an object for that in React Virtual DOM. It is the same, but it does not have the power to directly change the layout of the document. Manipulating DOM is slow, but manipulating Virtual DOM is fast as nothing gets drawn on the screen. So each time there is a change in the state of our application, the virtual DOM gets updated first instead of the real DOM." }
  ]

  const quiz_data = [
    { id: 1, Question: "Which hook is used to manage state in a functional component?", Options: ['useState', 'useEffect', 'useContext', 'useReducer'], Answer: 'useState' },
    { id: 2, Question: "How do you pass data from a parent component to a child component in React?", Options: ['state', 'props', 'context', 'ref'], Answer: 'props' },
    { id: 3, Question: "Which React hook is used to perform side effects in a functional component?", Options: ['useEffect', 'useState', 'useContext', 'useCallback'], Answer: 'useEffect' },
    { id: 4, Question: "How do you handle a click event in React?", Options: ['onClick', 'onChange', 'clickHandler', 'addEventListner'], Answer: 'onClick' }
  ]
  return (
    <>
      {/* <QRGenerator /> */}
      {/* <Form /> */}
      {/* <Advice /> */}
      {/* <Flex /> */}
      {/* <Weather /> */}
      {/* <BMI /> */}
      {/* <CurrencyConverter /> */}
      {/* <DigitalClock /> */}
      {/* <PasswordGenerator /> */}
      {/* <FAQ data={data}/> */}
      {/* <Calander /> */}
      {/* <Quiz data={quiz_data}/> */}
      {/* <FoodCart /> */}

      {/* <> */}
      <BrowserRouter>
        <div className="weather-route">
          <Routes>
            <Route path='/' element={<WelcomePage />} />
            <Route path='/profile' element={<Profile name="Bala Suresh" city="Tirunelveli" status={true}
              description="Backend Developer"
              skills={["HTML", "CSS", "JavaScript", "NodeJs", "Mysql", "Java"]} />} />
            <Route path='/QrGenerator' element={<QRGenerator />} />
            <Route path='/advice' element={<Advice />} />
            <Route path='/bmi' element={<BMI />} />
            <Route path='/weather' element={<Weather />} />
            <Route path='/currencyConverter' element={<CurrencyConverter />} />
            <Route path='/digitalClock' element={<DigitalClock />} />
            <Route path='/passwordGenerator' element={<PasswordGenerator />} />
            <Route path='/faq' element={<FAQ data={faq_data} />} />
            <Route path='/calander' element={<Calander />} />
            <Route path='/quiz' element={<Quiz data={quiz_data} />} />
            <Route path='/foodCart/*' element={<FoodCart />} />
            {/* <Route path='/foodCart/cart' element={<Cart />} /> */}
          </Routes>
        </div>
      </BrowserRouter>
      {/* </> */}
    </>
  )
}


export default App