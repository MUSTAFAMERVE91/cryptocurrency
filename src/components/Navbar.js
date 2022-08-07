import React, { useState } from 'react';
import {FaBars,FaTimes} from 'react-icons/fa';
import "./Navbar.css";

export const Navbar = () => {
    const [click,setClick] =useState(false)
    const handleClickHumburger=() =>
    setClick(!click);
  return (
    <div className='header'>
        <div className='container'>
        <h1>Crypto<span className='primary'>Info</span></h1>
        <ul className={click ? 'nav-menu active': 'nav-menu' }>
          <li>
             <a href="#Home">Home</a>
          </li>
          <li>
             <a href="_content">Signup</a>
          </li>
          <li>
             <a href="#Earn">Featured</a>
          </li>
          <li>
             <a href="#Earn">News</a>
          </li>
          <li>
             <a href="#Contact">Contact</a>
          </li>
        </ul>
        <div className='register'>
            <button className='btn'>Connect</button>
        </div>
        <div className='hamburger' onClick={handleClickHumburger}>
        {click ? <FaTimes size={20} style={{color:"#333"}}/>:<FaBars size={20} style={{color:"#333"}}/> }
        </div>
        </div>
       
    </div>
  )
}
