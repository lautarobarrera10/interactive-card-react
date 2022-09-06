import React from "react";
import './Form.css';
import iconComplete from './icon-complete.svg';
import { Button } from '../Button';

function Form({children, completedForm, onSubmitForm, checkindForm}) {
    let formClass;
    if (completedForm) {
        formClass = 'completed-container';
    } else {
        formClass = 'form';
    }

    return(
        <form className={formClass} onSubmit={onSubmitForm}>

            {checkindForm && <p className="checking-form-text">Validando la información...</p>}

            {completedForm && 
            <React.Fragment>
            <img src={iconComplete} alt="icon-complete"/>
            <h2 className="completed-title">¡Gracias!</h2>
            <p className="completed-text">Hemos añadido los datos de su tarjeta</p>
            <Button>Continuar</Button>
            </React.Fragment>}

            {!completedForm && children}
        </form>
    );
}

export { Form }