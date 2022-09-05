import React from "react";

function InputCardNumber({onChange, value, numberError}) {
    let inputErrorClass;
    if (numberError) {
        inputErrorClass = 'input-error';
    } else {
        inputErrorClass = '';
    }
    return(
        <div>
            <label 
                htmlFor="input-card-number">
                    Número de tarjeta
            </label>
            {numberError && <p className="errorMessage">Introduce un número de tarjeta válido</p>}
            <input 
                required
                type={'number'}
                id="input-card-number"
                placeholder="Ej: 1234 5678 9123 4567"
                onChange={(event) => onChange(event.target.value)}
                value={value}
                className={inputErrorClass}
            />
        </div>
        
    );
}

export { InputCardNumber }