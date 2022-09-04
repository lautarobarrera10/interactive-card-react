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
      <Form>
        <InputCardName onChange={onChangeCardName} />
        <InputCardNumber onChange={onChangeCardNumber} />
        <InputContainer>
          <InputExpirationDate 
            onChangeExpirationMonth={onChangeExpirationMonth}
            onChangeExpirationYear={onChangeExpirationYear}
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
