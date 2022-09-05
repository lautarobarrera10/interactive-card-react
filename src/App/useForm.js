import React from "react";

function useForm() {
    const [completedForm, setCompleteForm] = React.useState(false);
    const [nameError, setNameError] = React.useState(false);
    const [numberError, setNumberError] = React.useState(false);

    const onSubmitForm = (event) => {
        // prevent default para evitar recargar la página
        event.preventDefault();

        // Validación del nombre
        const cardName = document.querySelector('#input-card-name');
        const DOMCardName = cardName.value;
        const namePattern = /^[A-Z]{3,}\s[A-Z]{3,}$/i; // Nombre y apellido
        const namePattern2 = /^[A-Z]{3,}\s[A-Z]{3,}\s[A-Z]{3,}$/i; // Nombre, segundo nombre y apellido
        const NameIsValid = namePattern.test(DOMCardName) || namePattern2.test(DOMCardName);
        if (NameIsValid) {
            setNameError(false);
        } else {
            setNameError(true);
        }

        // Validación del número de tarjeta
        const cardNumber = document.querySelector('#input-card-number');
        const DOMCardNumber = cardNumber.value;
        const numberPattern = /^\d{16}$/; // 16 números
        const numberIsValid = numberPattern.test(DOMCardNumber);
        if (numberIsValid) {
            setNumberError(false);
        } else {
            setNumberError(true);
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
        nameError,
        numberError
    });
}

export { useForm }