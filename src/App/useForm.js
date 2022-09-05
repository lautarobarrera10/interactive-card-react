import React from "react";

function useForm() {
    const [completedForm, setCompleteForm] = React.useState(false);
    const [nameError, setNameError] = React.useState(false);
    const [numberError, setNumberError] = React.useState(false);
    const [expirationDateError, setExpirationDateError] = React.useState(false);
    const [CVCError, setCVCError] = React.useState(false);

    const validateName = () => {
        // Validación del nombre
        const cardName = document.querySelector('#input-card-name');
        const DOMCardName = cardName.value;
        const namePattern = /^[A-Z]{3,}\s[A-Z]{3,}$/i; // Nombre y apellido
        const namePattern2 = /^[A-Z]{3,}\s[A-Z]{3,}\s[A-Z]{3,}$/i; // Nombre, segundo nombre y apellido
        const NameIsValid = namePattern.test(DOMCardName) || namePattern2.test(DOMCardName);
        return NameIsValid;
    }

    const validateNumber = () => {
        const cardNumber = document.querySelector('#input-card-number');
        const DOMCardNumber = cardNumber.value;
        const numberPattern = /^\d{16}$/; // 16 números
        const numberIsValid = numberPattern.test(DOMCardNumber);
        return numberIsValid;
    }

    const validateExpirationDate = () => {
        // Validación de la fecha de expiración
        const expirationMonth = document.querySelector('#first-date-input');
        const expirationYear = document.querySelector('#second-date-input');
        const DOMExpirationMonth = expirationMonth.value;
        const DOMExpirationYear = expirationYear.value;
        const expirationDatePattern = /^\d{2}$/; // 2 números
        const expirationDateIsValid = expirationDatePattern.test(DOMExpirationMonth) && expirationDatePattern.test(DOMExpirationYear);
        return expirationDateIsValid;
    }

    const validateCVC = () => {
        // Validación del CVC
        const CVC = document.querySelector('#input-cvc');
        const DOMCVC = CVC.value;
        const CVCPattern = /^\d{3}$/; // 3 números
        const CVCIsValid = CVCPattern.test(DOMCVC);
        return CVCIsValid;
    }

    const onSubmitForm = (event) => {
        // prevent default para evitar recargar la página
        event.preventDefault();

        // Validamos el nombre
        const nameIsValid = validateName();
        if (!nameIsValid) {
            setNameError(true);
        } else {
            setNameError(false);
        }

        // Validamos el número de tarjeta
        const numberIsValid = validateNumber();
        if (!numberIsValid) {
            setNumberError(true);
        } else {
            setNumberError(false);
        }

        // Validamos el vencimiento
        const expirationDateIsValid = validateExpirationDate();
        if (!expirationDateIsValid) {
            setExpirationDateError(true);
        } else {
            setExpirationDateError(false);
        }

        // Validamos el CVC
        const CVCIsValid = validateCVC();
        if (!CVCIsValid) {
            setCVCError(true);
        } else {
            setCVCError(false);
        }

        // Si todo está bien el estado de formulario completado pasa a verdadero
        if (nameIsValid && numberIsValid && expirationDateIsValid && CVCIsValid) {
            setCompleteForm(true);
        }
    }

    return ({
        completedForm,
        onSubmitForm,
        nameError,
        numberError,
        expirationDateError,
        CVCError
    });
}

export { useForm }