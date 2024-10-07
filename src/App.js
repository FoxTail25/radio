import { useDispatch, useSelector } from 'react-redux';
import { Player } from './component/Player';
import SelectStation from './component/SelectStation.jsx';
import { stop } from './features/player/playerSlice.js';
import { userSelected } from './features/station/stationSlice.js';

function App() {

  let selectedStation = useSelector((state) => state.radio_station.user_selected_station)
  let playPause_state = useSelector((state) => state.play.play_pause_state)
  const dispatch = useDispatch()
  
  window.ononline = (event) => {
    console.log("ononline You are now connected to the network.");
    let data = JSON.parse(localStorage.getItem('radio'))
    if(data) {
      dispatch(userSelected(data[0]))
      localStorage.removeItem('radio')
    }
  };
  window.onoffline = (event) => {
    console.log('offline')
    localStorage.setItem('radio', JSON.stringify([selectedStation, playPause_state]))
    dispatch(stop())
    dispatch(userSelected(''))
  };
  
  
  return (
    <div className="App">
      <main>
        <SelectStation />
        <Player />
      </main>
    </div>
  );
}

export default App;
