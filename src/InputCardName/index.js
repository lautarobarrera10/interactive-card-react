import React from "react";

function InputCardName({onChange, nameError}) {
    let inputErrorClass;
    if (nameError) {
        inputErrorClass = 'input-error';
    } else {
        inputErrorClass = '';
    }
    console.log(nameError)
    return(
        <div>
            <label
                htmlFor="input-card-name">
                    Nombre en la tarjeta
            </label>
            {nameError && <p className="errorMessage">Introduce un nombre válido</p>}
            <input 
                type={'name'}
                id="input-card-name"
                placeholder="Ej: Lautaro Barrera"
                onChange={(event) => onChange(event.target.value)}
                className={inputErrorClass}
            />
        </div>
    );
}

export { InputCardName }