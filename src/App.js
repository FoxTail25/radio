// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import { Player } from './component/Player';
import  radioStation from './data/station.js';
import SelectStation from './component/SelectStation.jsx';

function App() {

let [selectedStation, setSelectedStation] = useState('')


  return (
    <div className="App">
      <div>
      RadioApp for my phone :)
      </div>
      <SelectStation {...{radioStation, setSelectedStation}}/>
      <Player selectedStation={selectedStation}/>
    </div>
  );
}

export default App;
