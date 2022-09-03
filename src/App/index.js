import './App.css';
import { Main } from '../Main';
import { FrontCard } from '../FrontCard';
import { CardBack } from '../CardBack';
import { Form } from '../Form';
import { Input } from '../Input';
import { Button } from '../Button';

import { useApp } from './useApp';

function App() {
  const {
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
    onChangeCardNumber } = useApp();
  return (
    <div className="App">
      <Main>
        <CardBack />
      </Main>
      <FrontCard />
      <Form>
        <Input 
          type={'name'}
          text={'Carholder Name'}
          placeholder={'e.g. Jane Appleseed'}
        />
        <Input 
          type={'number'}
          text={'Card Number'}
          placeholder={'e.g. 1234 5678 9123 4567'}
          onchange={onChangeCardNumber}
          customClass={'card-number-input'}
        />
        <Input 
          type={'special'}
        />
        <Button>
          Confirm
        </Button>
      </Form>
    </div>
  );
}

export default App;
