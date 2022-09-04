import React from "react";
import './FrontCard.css';
import bgCardFront from './bg-card-front.png';

function FrontCard({cardName, cardNumber}){
    return(
        <div className="FrontCard" style={{ 
            backgroundImage: `url("${bgCardFront}")` 
          }}>
            <div className="circle-container">
                <div className="first-circle"></div>
                <div className="second-circle"></div>
            </div>
            <p className="card-number">{cardNumber}</p>
            <div className="data-container">
                <p className="data-name">{cardName}</p>
                <p className="data-date">00/00</p>
            </div>
        </div>
    );
}

export { FrontCard }