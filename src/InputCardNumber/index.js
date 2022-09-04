import React from "react";
import './InputCardNumber.css';

function InputCardNumber({onChange, value}) {
    return(
        <div>
            <label 
                htmlFor="input-card-number" 
                className="label-card-number">
                    Card Number
            </label>
            <input 
                id="input-card-number" 
                className="input-card-number" 
                placeholder="e.g. 1234 5678 9123 4567"
                onChange={(event) => onChange(event.target.value)}
                value={value}
            />
        </div>
        
    );
}

export { InputCardNumber }