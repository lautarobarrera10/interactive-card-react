import React from "react";
import './Form.css';
import iconComplete from './icon-complete.svg';
import { Button } from '../Button';

function Form({children, completedForm, onSubmitForm}) {
    if (completedForm) {
        return(
            <form className="completed-container">
                <img src={iconComplete} alt="icon-complete"/>
                <h2 className="completed-title">¡Gracias!</h2>
                <p className="completed-text">Hemos añadido los datos de su tarjeta</p>
                <Button>Continuar</Button>
            </form>
        );
    }
    return(
        <form className="form" onSubmit={onSubmitForm}>
            {children}
        </form>
    );
}

export { Form }