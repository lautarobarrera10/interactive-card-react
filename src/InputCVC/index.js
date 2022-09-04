import React from "react";
import './InputCVC.css';

function InputCVC({onChange}) {
    return(
        <div className="input-cvc-container">
            <label htmlFor="input-cvc">CVC</label>
            <input 
                onChange={(event) => onChange(event.target.value)}
                placeholder="Ej: 123" 
                type='number' 
                id="input-cvc"
            />
        </div>
    );
}

export { InputCVC }