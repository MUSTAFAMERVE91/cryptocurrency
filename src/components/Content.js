import React from 'react'
import { useRef,useState } from 'react'
import Crypto from '../assets/photo.webp'
import './Content.css'
export const Content = (props) => {
  const [formName, setFormName] = useState("");
   const [formEmail, setFormEmail] = useState("");

const userName = useRef("");
const userEmail = useRef("");
const updateFormName = (event) => {
   setFormName(event.target.value);
   if (event.target.value.length ) return;
   console.log("updateFormName", formName)
 }
 const formSubmitHandler = (event) => {
   event.preventDefault();
   
  props.onFormSubmit(userName.current.value,
    userEmail.current.value)
}
const clickButonHandler=() =>{
   alert("merhaba")
}

  return (
    <div id="_content" className='content'>
        <div className='container'>
           <div className='left'>
              <p>Buy & Sell Crypto 24/7 using your retirement account</p>
              <h1>Invest in Cryptocurreny with Your IRA</h1>
              <p>Buy, Sell, and store hundreds of cryptocurrencies</p>
              <div className='input-container'>
             <form onSubmit={formSubmitHandler}>
               <input type="text" placeholder='Enter Your name' name="Name" value={formName} onChange={updateFormName} />
              <input type="email"  placeholder='Enter Your email' name="Email"/>
              <button className='btn' onClick={clickButonHandler} >Learn More</button>
              </form>
              </div>
           </div>
           <div className='right'>
              <div className='img-container'>
                 <img src={Crypto} alt=''/>
              
              </div>
             
           </div>
        </div>
    </div>
  )
}
