import { useEffect, useState } from 'react'
import './CurrencyConverter.css'
import axios from 'axios'
const CurrencyConverter = () => {
    const [result,setResult]=useState()
    const [exchangeRate,setExchangeRate]=useState()
    const [amount,setAmount]=useState(1)
    const [fromCurrency,setFromCurrency]=useState("USD")
    const [toCurrency,setToCurrency]=useState("INR")


    useEffect(()=>{
        const getExchangeRate=async()=>{
            try {
                let url=`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;
                const response=await axios.get(url);
                console.log(response)
                setExchangeRate(response.data.rates[toCurrency])
                console.log("exchangeRate:",{exchangeRate})
                setResult((amount*exchangeRate).toFixed(2))
            } catch (error) {
                console.log(error)
            }
        }
        getExchangeRate()
    },[amount, exchangeRate, fromCurrency, toCurrency])

    // const setamount=(e)=>{
    //     let floorAmount=(e.target.value).toFixed(2)
    //     setAmount(floorAmount)
    // }
    return (
        <div className="currency-converter">
            <div className="currency-app-container">
            <div className='box'>
                <img src="currency.png" alt="Image"  />
            </div>
            <div className="header">CURRENCY CONVERTER</div>
            <div className='data'>
                <div className="amount-container">
                    <label htmlFor="amount"  >Amount</label>
                    <input type="number" id="amount" value={amount} onChange={(e)=>{setAmount(e.target.value)}}/>
                </div>
                <div className="from-currency">
                    <label htmlFor="from">From Currency</label>
                    {/* <input type="text" id="from" /> */}
                    <select  id="from" onChange={(e)=>{setFromCurrency(e.target.value)}}>
                        <option value="USD">USD - United States Doller</option>
                        <option value="EUR">EUR - Euro</option>
                        <option value="GBP">GBP - British Pound Sterling</option>
                        <option value="JPY">JPY - Japanesh Yen</option>
                        <option value="AUD">ASD - Australian Doller</option>
                        <option value="CAD">CAD - Canadian Doller</option>
                        <option value="CNY">CNY - Chinesh Yuan</option>
                        <option value="INR">INR - Indian Rupee</option>
                        <option value="BRL">BRL - Brazilian Real</option>
                        <option value="ZAR">ZAR - South African Rand</option>
                    </select>
                </div>
                <div className="to-currency">
                    <label htmlFor="to">To Currency</label>
                    <select  id="to" onChange={(e)=>{setToCurrency(e.target.value)}}>
                        <option value="USD">USD - United States Doller</option>
                        <option value="EUR">EUR - Euro</option>
                        <option value="GBP">GBP - British Pound Sterling</option>
                        <option value="JPY">JPY - Japanesh Yen</option>
                        <option value="AUD">ASD - Australian Doller</option>
                        <option value="CAD">CAD - Canadian Doller</option>
                        <option value="CNY">CNY - Chinesh Yuan</option>
                        <option value="INR">INR - Indian Rupee</option>
                        <option value="BRL">BRL - Brazilian Real</option>
                        <option value="ZAR">ZAR - South African Rand</option>
                    </select>
                </div>
                {result &&<div className="result">
                    <p>{amount} {fromCurrency} is equal to {result} {toCurrency}</p>
                    {/* <textarea name="result" id="" readOnly value={`${amount} ${fromCurrency} is equal to ${result} ${toCurrency}`}></textarea> */}
                </div>}
            </div>
        </div>
        </div>
    )
}

export default CurrencyConverter