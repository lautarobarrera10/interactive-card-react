import React from "react";
import './CardBack.css';
import bgCardBack from './bg-card-back.png';

function CardBack({cvc}) {
    return(
        <div className="CardBack" style={{ 
            backgroundImage: `url("${bgCardBack}")` 
          }}>
            <p className="code-security">{cvc}</p>
        </div>
    );
}

export { CardBack }