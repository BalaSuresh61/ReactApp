// import React from 'react'
import { useState } from "react"
import './QRGenerator.css'
const QRGenerator = () => {
    const [img,setImg]=useState()
    const [loading,setLoading]=useState(false)
    const [inputData,setInputData]=useState()
    const [inputSize,setInputSize]=useState('150')
    async function generateQR(){
        setLoading(true)
        console.log("inputData: "+inputData)
        console.log("inputSize: "+inputSize)
        try {
            const url = `https://api.qrserver.com/v1/create-qr-code/?size=${inputSize}x${inputSize}&data=${inputData}`
            setImg(url)
        } catch (error) {
            console.log(error)
        }finally{
            setLoading(false)
        }
    }
    function downloadQR(){
        fetch(img)
        .then((response)=>response.blob())
        .then((blob)=>{
            const link = document.createElement("a")
            link.href=URL.createObjectURL(blob)
            link.download('qrcode.png')
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
        })
        .catch((error)=>{
            console.log("Error downloading QR code",error);

        })
    };
  return (
    <div className="qr-app">
        <div className='qr-app-container'>
        <h1>QR CODE GENERATOR</h1>
        {loading && <p> Loading...</p>}
        {img && <img src={img} className='qr-img'/>}
        <label htmlFor='dataInput' className='input-lebel'>Data for QR code</label>
        <input type="text" id='dataInput' placeholder='Enter data for QR code' onChange={(e)=>{setInputData(e.target.value)}}/>
        <label htmlFor='sizeInput' className='input-lebel'>Image Size</label>
        <input type='text' id='sizeInput'placeholder='Enter image size. eg:150' onChange={(e)=>{setInputSize(e.target.value)}}/>
        <div className="buttons">
            <button className='generate-button' onClick={()=>{
                generateQR()
            }}>Generate</button>
            <button className='download-button'
            onClick={downloadQR}>Download</button>
        </div>
        <p className='footer'>Designd By <b> Bala</b></p>
    </div>
    </div>
  )
}

export default QRGenerator