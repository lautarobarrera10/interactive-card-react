import React from "react";
import './InputCVC.css';

function InputCVC({onChange, CVCError}) {
    let inputErrorClass;
    if (CVCError) {
        inputErrorClass = 'input-error';
    } else {
        inputErrorClass = '';
    }
    return(
        <div className="input-cvc-container">
            <label htmlFor="input-cvc">CVC</label>
            {CVCError && <p className="errorMessage">Introduce un CVC válido</p>}
            <input 
                required
                onChange={(event) => onChange(event.target.value)}
                placeholder="Ej: 123" 
                type='number' 
                id="input-cvc"
                className={inputErrorClass}
            />
        </div>
    );
}

export { InputCVC }