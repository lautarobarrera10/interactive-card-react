import React from "react";
import './InputExpirationDate.css';

function InputExpirationDate() {
    return(
        <div className="expiration-date-container">
            <label htmlFor="first-date-input">
                Vencimiento (mes/año)
            </label>
            <div className="date-container">
                <input id="first-date-input" placeholder='MES' type='number'/>
                <input placeholder='AÑO' type='number'/>
            </div>
        </div>
    );
}

export { InputExpirationDate }