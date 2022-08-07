import React from 'react'
/*import { BrowserRouter, Route, Routes } from 'react-router-dom';*/
import { Navbar } from './components/Navbar';
import {Content} from './components/Content';
import {Featured} from './components/Featured';
import {Signup} from './components/Signup';
import './App.css';
import { useState } from "react";
import Data from "./Data";
import Card from "./Card";
import Buttons from "./Buttons";
import Footer from './components/Footer'

export function App() {
  const formSubmitHandler = (name, email) => {
    console.log(name, email)
  }
  const [item, setItem] = useState(Data);
  const menuItems = [...new Set(Data.map((Val) => Val.category))];

  const filterItem = (curcat) => {
    const newItem = Data.filter((newVal) => {
      return newVal.category === curcat;
    });
    setItem(newItem);
  };
  return (
    <>
    <Navbar />
    <Content onFormSubmit={formSubmitHandler} />
    <Featured/>
    <Signup/>
    <Buttons 
    filterItem={filterItem}
    setItem={setItem}
    menuItems={menuItems}
  />
  
  <Card item={item} />
  <Footer/>
    </>
  );
}