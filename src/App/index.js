import './App.css';
import { Main } from '../Main';
import { FrontCard } from '../FrontCard';
import { CardBack } from '../CardBack';
import { Form } from '../Form';
import { Input } from '../Input';
import { Button } from '../Button';

import { useFrontCard } from './useFrontCard';
import { InputCardNumber } from '../InputCardNumber';
import { InputCardName } from '../InputCardName';

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
