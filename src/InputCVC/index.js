import React from "react";
import './InputCVC.css';

function InputCVC() {
    return(
        <div className="input-cvc-container">
            <label htmlFor="input-cvc">CVC</label>
            <input placeholder="Ej: 123" type='number' id="input-cvc"/>
        </div>
    );
}

export { InputCVC }