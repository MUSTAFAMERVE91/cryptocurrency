import React from "react";
import './Card.css'
 
const Card = ({ item }) => {          
  return (
    <>
    <div className="coin-news">
      <div className="container">
          {item.map((Val) => {
            return (
              <div
                key={Val.id}>
                <div>
                  <img src={Val.img} alt={Val.title} className="img" />
                </div>
                <div>
                  <div className="card-title">
                    {Val.title};
                  </div>
                  <div className="card-text">{Val.desc}</div>
                </div>
              </div>
    
            );
          })}
        </div>
        </div>

    </>
  );
};
 
export default Card;