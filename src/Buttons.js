import React from "react";
import Data from "./Data";
import './Button.css'

const Buttons = ({ filterItem, setItem, menuItems }) => {
  return (
    <>
    
    <div className="buttons">
    <div className="container">
    <h1>Crypto News<span> Today</span></h1>
        {menuItems.map((Val, id) => {
          return (
            <button className="btn"
              onClick={() => filterItem(Val)}
              key={id}
            >
              {Val}
            </button>
          );
        })}
        <button className="btn"
          onClick={() => setItem(Data)}
        >
          All
        </button>
        </div>
        </div>
    </>
  );
};

export default Buttons;