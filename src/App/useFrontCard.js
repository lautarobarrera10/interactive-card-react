import React from "react";

function useFrontCard() {
    const [cardName, setCardName] = React.useState('Lautaro Barrera');
    const [cardNumber, setCardNumber] = React.useState('0000 0000 0000 0000');

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

    return({
        cardNumber,
        onChangeCardNumber,
        cardName,
        onChangeCardName
    });
}

export { useFrontCard }