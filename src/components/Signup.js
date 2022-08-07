import React from 'react'
import Crypto from '../assets/defi1.webp';
import './Signup.css'

export const Signup = () => {
  return (
    <div className='signup'>
        <div className='container'>
            <div className='left'>
            <img src={Crypto} alt=''/>
            </div>
            <div className='right'>
                    <h2>Earn passive income with crypto.</h2>
                    <p>Earn up to 12% annual rewards on 30+ digital assets. Simply hold your assets in the app to automatically earn rewards at the end of each month with no lockups and no limits.</p>
            </div>
        </div>
    </div>
  )
}
