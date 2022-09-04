import React from "react";
import './InputExpirationDate.css';

function InputExpirationDate({onChangeExpirationMonth, onChangeExpirationYear}) {
    return(
        <div className="expiration-date-container">
            <label htmlFor="first-date-input">
                Vencimiento (mes/año)
            </label>
            <div className="date-container">
                <input 
                    onChange={(event) => onChangeExpirationMonth(event.target.value)} 
                    id="first-date-input" 
                    placeholder='MES' 
                    type='number'/>
                <input 
                    onChange={(event) => onChangeExpirationYear(event.target.value)}
                    placeholder='AÑO' 
                    type='number'
                    id="second-date-input"/>
            </div>
        </div>
    );
}

export { InputExpirationDate }