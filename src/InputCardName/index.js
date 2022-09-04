import React from "react";
import './InputCardName.css';

function InputCardName({onChange}) {
    return(
        <div>
            <label
                htmlFor="input-card-name" 
                className="label-card-name">
                    Nombre en la tarjeta
            </label>
            <input 
                type={'name'}
                id="input-card-name" 
                className="input-card-name" 
                placeholder="Ej: Lautaro Barrera"
                onChange={(event) => onChange(event.target.value)}
            />
        </div>
    );
}

export { InputCardName }