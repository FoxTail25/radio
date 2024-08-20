import { Player } from './component/Player';
import SelectStation from './component/SelectStation.jsx';
import { SettingBtn } from './component/SettingBtn.jsx';

function App() {


  return (
    <div className="App">
      <main>
        {/* <SettingBtn /> */}
        <SelectStation />
        <Player />
      </main>
    </div>
  );
}

export default App;
