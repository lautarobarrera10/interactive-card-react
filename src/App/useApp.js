import React from "react";

function useApp() {
    const [cardNumber, setCardNumber] = React.useState('');
    const [cardName, setCardName] = React.useState('');
    const [cardMonth, setCardMonth] = React.useState('');
    const [cardYear, setCardYear] = React.useState('');
    const [cardCVC, setCardCVC] = React.useState('');

    const onChangeCardNumber = (newValue) => {
        const cardNumberDOM = document.querySelector('.card-number');
        const cardNumberInput = document.querySelector('.card-number-input');

        cardNumberInput.addEventListener('input', () => {
            if (cardNumberInput.value.length > 16) {
                cardNumberInput.value = cardNumberInput.value.slice(0,16); 
            }
        })

        if (newValue && newValue.length <= 16) {
            const valuePrimeraParte = newValue.slice(0,4);
            const valueSegundaParte = newValue.slice(4,8);
            const valueTerceraParte = newValue.slice(8,12);
            const valueCuartaParte = newValue.slice(12,16);
            const valueSeparadoPorEspacios = `${valuePrimeraParte} ${valueSegundaParte} ${valueTerceraParte} ${valueCuartaParte}`;

            cardNumberDOM.textContent = valueSeparadoPorEspacios;
        } else {
            cardNumberDOM.textContent = '0000 0000 0000 0000';
        }
    }

    return({
        cardNumber, 
        setCardNumber,
        cardName,
        setCardName,
        cardMonth, 
        setCardMonth,
        cardYear, 
        setCardYear,
        cardCVC, 
        setCardCVC,
        onChangeCardNumber,
    });
}

export { useApp }