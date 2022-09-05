import React from "react";
import './InputExpirationDate.css';

function InputExpirationDate({onChangeExpirationMonth, onChangeExpirationYear, expirationDateError}) {
    let inputErrorClass;
    if (expirationDateError) {
        inputErrorClass = 'input-error';
    } else {
        inputErrorClass = '';
    }
    return(
        <div className="expiration-date-container">
            <label htmlFor="first-date-input">
                Vencimiento (mes/año)
            </label>
            {expirationDateError && <p className="errorMessage">Introduce una fecha de vencimieto válida</p>}
            <div className="date-container">
                <input 
                    required
                    onChange={(event) => onChangeExpirationMonth(event.target.value)} 
                    id="first-date-input" 
                    placeholder='MES' 
                    type='number'
                    className={inputErrorClass}/>
                <input 
                    required
                    onChange={(event) => onChangeExpirationYear(event.target.value)}
                    placeholder='AÑO' 
                    type='number'
                    id="second-date-input"
                    className={inputErrorClass}/>
            </div>
        </div>
    );
}

export { InputExpirationDate }