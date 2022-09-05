import React from "react";

function useForm() {
    const [completedForm, setCompleteForm] = React.useState(false);
    const [nameError, setNameError] = React.useState(false);
    const [numberError, setNumberError] = React.useState(false);
    const [expirationDateError, setExpirationDateError] = React.useState(false);
    const [CVCError, setCVCError] = React.useState(false);

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

        // Validación de la fecha de expiración
        const expirationMonth = document.querySelector('#first-date-input');
        const expirationYear = document.querySelector('#second-date-input');
        const DOMExpirationMonth = expirationMonth.value;
        const DOMExpirationYear = expirationYear.value;
        const expirationDatePattern = /^\d{2}$/; // 2 números
        const expirationDateIsValid = expirationDatePattern.test(DOMExpirationMonth) && expirationDatePattern.test(DOMExpirationYear);
        if (expirationDateIsValid) {
            setExpirationDateError(false);
        } else {
            setExpirationDateError(true);
        }

        // Validación del CVC
        const CVC = document.querySelector('#input-cvc');
        const DOMCVC = CVC.value;
        const CVCPattern = /^\d{3}$/; // 3 números
        const CVCIsValid = CVCPattern.test(DOMCVC);
        if (CVCIsValid) {
            setCVCError(false);
        } else {
            setCVCError(true);
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
        numberError,
        expirationDateError,
        CVCError
    });
}

export { useForm }