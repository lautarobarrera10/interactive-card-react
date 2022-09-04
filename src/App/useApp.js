import React from "react";

function useApp() {
    const [cardNumber, setCardNumber] = React.useState('0000 0000 0000 0000');

    const onChangeCardNumber = (newValue) => {
        // Validamos y actualizamos el estado de card number
        if (!newValue) {
            setCardNumber('0000 0000 0000 0000');
        } else if (newValue.length > 16) {
            setCardNumber(newValue.slice(0,16));
        } else {
            const valuePrimeraParte = newValue.slice(0,4);
            const valueSegundaParte = newValue.slice(4,8);
            const valueTerceraParte = newValue.slice(8,12);
            const valueCuartaParte = newValue.slice(12,16);
            setCardNumber(`${valuePrimeraParte} ${valueSegundaParte} ${valueTerceraParte} ${valueCuartaParte}`);
        }
        // Limitamos el número de carácteres en el input de card number
        const cardNumberInput = document.querySelector('#input-card-number');
        cardNumberInput.addEventListener('input', () => {
            if (cardNumberInput.value.length > 16) {
                cardNumberInput.value = cardNumberInput.value.slice(0,16); 
            }
        });
    }

    return({
        cardNumber,
        onChangeCardNumber,
    });
}

export { useApp }