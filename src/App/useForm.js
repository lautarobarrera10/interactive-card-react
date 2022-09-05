import React from "react";

function useForm() {
    const [completedForm, setCompleteForm] = React.useState(false);
    const [nameError, setNameError] = React.useState(false);

    const onSubmitForm = (event) => {
        // prevent default para evitar recargar la página
        event.preventDefault();

        const cardName = document.querySelector('#input-card-name');
        const DOMName = cardName.value;
        const patron = /^[A-Z]+\s[A-Z]+$/i; // Nombre y apellido
        const patron2 = /^[A-Z]+\s[A-Z]+\s[A-Z]+$/i; // Nombre, segundo nombre y apellido
        const NameIsValid = patron.test(DOMName) || patron2.test(DOMName);
        
        if (NameIsValid) {
            setNameError(false);
        } else {
            setNameError(true);
        }
    }

    const resetApp = (event) => {
        // prevent default para evitar recargar la página
        event.preventDefault();
        setCompleteForm(false);
    }

    return ({
        completedForm,
        onSubmitForm,
        resetApp,
        nameError
    });
}

export { useForm }