import React from 'react';
import './App.css';
import { Main } from '../Main';
import { FrontCard } from '../FrontCard';
import { CardBack } from '../CardBack';
import { Form } from '../Form';
import { Button } from '../Button';

import { useCards } from './useCards';
import { InputCardNumber } from '../InputCardNumber';
import { InputCardName } from '../InputCardName';
import { InputContainer } from '../InputContainer';
import { InputExpirationDate } from '../InputExpirationDate';
import { InputCVC } from '../InputCVC';

import { useForm } from './useForm';

function App() {
  const {
    cardNumber,
    onChangeCardNumber,
    cardName,
    onChangeCardName,
    expirationMonth,
    onChangeExpirationMonth,
    expirationYear,
    onChangeExpirationYear,
    CVC,
    onChangeCVC
  } = useCards();

  const {
      completedForm,
      onSubmitForm,
      resetApp,
      nameError,
      numberError,
      expirationDateError
  } = useForm();

  return (
    <div className="App">
      <Main>
        <CardBack cvc={CVC} />
      </Main>
      <FrontCard
        cardName={cardName}
        cardNumber={cardNumber}
        expirationMonth={expirationMonth}
        expirationYear={expirationYear}
      />
      <Form
        completedForm={completedForm}
        onSubmitForm={onSubmitForm}
        resetApp={resetApp}
      >
        <InputCardName onChange={onChangeCardName} nameError={nameError} />
        <InputCardNumber onChange={onChangeCardNumber} numberError={numberError} />
        <InputContainer>
          <InputExpirationDate 
            onChangeExpirationMonth={onChangeExpirationMonth}
            onChangeExpirationYear={onChangeExpirationYear}
            expirationDateError={expirationDateError}
          />
          <InputCVC 
            onChange={onChangeCVC}
          />
        </InputContainer>
        <Button> Confirmar </Button>
      </Form>
    </div>
  );
}

export default App;
