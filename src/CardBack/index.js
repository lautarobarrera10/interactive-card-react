import React from "react";
import './CardBack.css';
import bgCardBack from './bg-card-back.png';

function CardBack() {
    return(
        <div className="CardBack" style={{ 
            backgroundImage: `url("${bgCardBack}")` 
          }}>
            <p className="code-security">000</p>
        </div>
    );
}

export { CardBack }