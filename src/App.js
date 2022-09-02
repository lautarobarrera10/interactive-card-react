import './App.css';
import { Main } from './Main';
import { FrontCard } from './FrontCard';

function App() {
  return (
    <div className="App">
      <Main>
        <FrontCard className="FrontCard" />
      </Main>
    </div>
  );
}

export default App;
