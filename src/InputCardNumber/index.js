import React from "react";

function InputCardNumber({onChange, value}) {
    return(
        <div>
            <label 
                htmlFor="input-card-number">
                    Número de tarjeta
            </label>
            <input 
                type={'number'}
                id="input-card-number"
                placeholder="Ej: 1234 5678 9123 4567"
                onChange={(event) => onChange(event.target.value)}
                value={value}
            />
        </div>
        
    );
}

export { InputCardNumber }