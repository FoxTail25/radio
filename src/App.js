import { useState } from 'react';
import { Player } from './component/Player';
import  radioStation from './data/station.js';
import SelectStation from './component/SelectStation.jsx';
import Header from './component/Header.jsx';

function App() {

let [selectedStation, setSelectedStation] = useState('')


  return (
    <div className="App">
      <Header/>
      <SelectStation {...{radioStation, setSelectedStation}}/>
      <Player selectedStation={selectedStation}/>
    </div>
  );
}

export default App;
