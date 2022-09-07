import React from "react";

function InputCardName({onChange, nameError}) {
    let inputErrorClass;
    if (nameError) {
        inputErrorClass = 'input-error';
    } else {
        inputErrorClass = '';
    }
    return(
        <div>
            <label
                htmlFor="input-card-name">
                    Nombre en la tarjeta
            </label>
            {nameError && <p className="errorMessage">Introduce un nombre válido</p>}
            <input 
                required
                type="text"
                id="input-card-name"
                placeholder="Ej: Lautaro Barrera"
                onChange={(event) => onChange(event.target.value)}
                className={inputErrorClass}
            />
        </div>
    );
}

export { InputCardName }