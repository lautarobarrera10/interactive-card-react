import React from "react";
import './Form.css';
import iconComplete from './icon-complete.svg';
import { Button } from '../Button';

function Form({children}) {
    const [completedForm, setCompletedForm] = React.useState(true);
    if (completedForm) {
        return(
            <div className="completed-container">
                <img src={iconComplete}/>
                <h2 className="completed-title">¡Gracias!</h2>
                <p className="completed-text">Hemos añadido los datos de su tarjeta</p>
                <Button>Continuar</Button>
            </div>
        );
    }
    return(
        <form className="form">
            {children}
        </form>
    );
}

export { Form }