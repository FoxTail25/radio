import { Player } from './component/Player';
import radioStation from './data/station.js';
import SelectStation from './component/SelectStation.jsx';
import Header from './component/Header.jsx';

function App() {


  return (
    <div className="App">
      <Header />
      <SelectStation radioStation={radioStation} />
      <Player />
    </div>
  );
}

export default App;
