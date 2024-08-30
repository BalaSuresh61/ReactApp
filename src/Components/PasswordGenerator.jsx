import { useState } from 'react'
import './PasswordGenerator.css'

const PasswordGenerator = () => {
    const [length,setLength]=useState(8)
    const [includeUppercase,setIncludeUppercase]=useState(true)
    const [includeLowercase,setIncludeLowercase]=useState(true)
    const [includeNumbers,setIncludeNumbers]=useState(true)
    const [includeSymbols,setIncludeSymbols]=useState(true)
    const [password,setPassword]=useState('')
    const [error,SetError]=useState("")

    const generatePassword=()=>{
        let charSet='';
        if(includeUppercase) charSet+="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if(includeLowercase) charSet+="abcdefghijklmnopqrstuvwxyz";
        if(includeNumbers) charSet+='0123456789';
        if(includeSymbols) charSet+='!@#$%^&*()';
        let rendomPassword='';
        for(let i=0;i<length;i++){
            const randomIndex=Math.floor(Math.random()*charSet.length);
            rendomPassword +=charSet[randomIndex];
        }
        setPassword(rendomPassword);
        
    }
    const copyToClipboard=()=>{
        navigator.clipboard.writeText(password)
    }
    const setPasswordLength=(e)=>{
        const userInput=e.target.value;
        if(userInput>60){
            SetError("Enter less than 60 in password length")
            // setLength(8)
            setPassword('')
        }else{
            SetError('')
            setLength(userInput)
        }
    }

    return (
        <div className="password-generator">
            <div className="pass-gen-app-container">
            <h3>STRONG PASSWORD GENERATOR</h3>
            <div className="pass-gen-input-container">
                
                <label htmlFor="pwdlength">Password Length:</label>
                {error&&<p>{error}</p>}
                <input type="number" id="pwdlength" value={length} onChange={setPasswordLength}/>
            </div>
            <div className="checkbox">
                <div className='box'>
                    <input type="checkbox" id="upperCase" checked={includeUppercase} onChange={(e)=>setIncludeUppercase(e.target.checked)} />
                    <label htmlFor="upperCase">Include Uppercase</label>
                </div>
                <div className='box'>
                    <input type="checkbox" id="lowerCase" checked={includeLowercase} onChange={(e)=>setIncludeLowercase(e.target.checked)}/>
                    <label htmlFor="lowerCase">Include Lowercase</label>
                </div>
                <div className='box'>
                    <input type="checkbox" id="numbers" checked={includeNumbers} onChange={(e)=>setIncludeNumbers(e.target.checked)}/>
                    <label htmlFor="numbers">Include Numbers</label>
                </div>
                <div className='box'>
                    <input type="checkbox" id="symbol" checked={includeSymbols} onChange={(e)=>setIncludeSymbols(e.target.checked)}/>
                    <label htmlFor="symbol" >Include Symbol</label>
                </div>
            </div>
            <button onClick={generatePassword}>Generate Password</button>
            <div className="pass-result">
                <textarea readOnly id="output" value={password}></textarea>
                {/* <input type="text" id="output" readOnly value={password} className='input'/> */}
                <button onClick={copyToClipboard}>Copy</button>
            </div>
        </div>
        </div>
    )
}

export default PasswordGenerator