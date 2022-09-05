import React from "react";

function useCards() {
    const [cardName, setCardName] = React.useState('Lautaro Barrera');
    const [cardNumber, setCardNumber] = React.useState('0000 0000 0000 0000');
    const [expirationMonth, setExpirationMonth] = React.useState('00');
    const [expirationYear, setExpirationYear] = React.useState('00');
    const [CVC, setCVC] = React.useState('000');

    const onChangeCardName = (newValue) => {
        // Limitamos la cantidad de carácteres a 25
        const cardNameInput = document.querySelector('#input-card-name');
        cardNameInput.addEventListener('input', () => {
            if (cardNameInput.value.length > 25) {
                cardNameInput.value = cardNameInput.value.slice(0,25); 
            }
        });
        // Validamos y actualizamos el estado de card name
        if (!newValue) {
            setCardName('Lautaro Barrera');
        } else {
            setCardName(newValue);
        }  
    }

    const onChangeCardNumber = (newValue) => {
        // Limitamos el número de carácteres en el input de card number
        const cardNumberInput = document.querySelector('#input-card-number');
        cardNumberInput.addEventListener('input', () => {
            if (cardNumberInput.value.length > 16) {
                cardNumberInput.value = cardNumberInput.value.slice(0,16); 
            }
        });
        // Validamos y actualizamos el estado de card number
        if (!newValue) {
            setCardNumber('0000 0000 0000 0000');
        } else {
            const valuePrimeraParte = newValue.slice(0,4);
            const valueSegundaParte = newValue.slice(4,8);
            const valueTerceraParte = newValue.slice(8,12);
            const valueCuartaParte = newValue.slice(12,16);
            setCardNumber(`${valuePrimeraParte} ${valueSegundaParte} ${valueTerceraParte} ${valueCuartaParte}`);
        }
    }

    const onChangeExpirationMonth = (newValue) => {
        // Limitamos la cantidad de carácteres a 2
        const input = document.querySelector('#first-date-input');
        input.addEventListener('input', () => {
            if (input.value.length > 2) {
                input.value = input.value.slice(0,2); 
            }
        });
        // Validamos y actualizamos el estado de card name
        if (!newValue) {
            setExpirationMonth('00');
        } else {
            setExpirationMonth(newValue);
        }  
    }

    const onChangeExpirationYear = (newValue) => {
        // Limitamos la cantidad de carácteres a 2
        const input = document.querySelector('#second-date-input');
        input.addEventListener('input', () => {
            if (input.value.length > 2) {
                input.value = input.value.slice(0,2); 
            }
        });
        // Validamos y actualizamos el estado de card name
        if (!newValue) {
            setExpirationYear('00');
        } else {
            setExpirationYear(newValue);
        }  
    }

    const onChangeCVC = (newValue) => {
        // Limitamos la cantidad de carácteres a 3
        const input = document.querySelector('#input-cvc');
        input.addEventListener('input', () => {
            if (input.value.length > 3) {
                input.value = input.value.slice(0,3); 
            }
        });
        // Validamos y actualizamos el estado de card name
        if (!newValue) {
            setCVC('000');
        } else {
            setCVC(newValue);
        } 
    }
 
    return({
        cardName,
        onChangeCardName,
        cardNumber,
        onChangeCardNumber,
        expirationMonth,
        onChangeExpirationMonth,
        expirationYear,
        onChangeExpirationYear,
        CVC,
        onChangeCVC
    });
}

export { useCards }