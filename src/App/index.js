import './App.css';
import { Main } from '../Main';
import { FrontCard } from '../FrontCard';
import { CardBack } from '../CardBack';
import { Form } from '../Form';
import { Button } from '../Button';

import { useFrontCard } from './useFrontCard';
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
    onChangeCardName
  } = useFrontCard();
  return (
    <div className="App">
      <Main>
        <CardBack />
      </Main>
      <FrontCard
        cardName={cardName}
        cardNumber={cardNumber}
      />
      <Form>
        <InputCardName onChange={onChangeCardName} />
        <InputCardNumber onChange={onChangeCardNumber} />
        <InputContainer>
          <InputExpirationDate />
          <InputCVC />
        </InputContainer>
        <Button> Confirmar </Button>
      </Form>
    </div>
  );
}

export default App;
