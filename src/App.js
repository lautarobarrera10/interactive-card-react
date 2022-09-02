import './App.css';
import { Main } from './Main';
import { FrontCard } from './FrontCard';
import { CardBack } from './CardBack';

function App() {
  return (
    <div className="App">
      <Main>
        <CardBack />
      </Main>
      <FrontCard />
    </div>
  );
}

export default App;
