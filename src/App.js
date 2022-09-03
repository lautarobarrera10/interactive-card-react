import './App.css';
import { Main } from './Main';
import { FrontCard } from './FrontCard';
import { CardBack } from './CardBack';
import { Form } from './Form';
import { Input } from './Input';

function App() {
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
        />
        <Input 
          type={'special'}
        />
      </Form>
    </div>
  );
}

export default App;
