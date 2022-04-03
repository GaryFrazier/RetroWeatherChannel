import './App.css';
import ExtendedForecast from '../extendedForcast/ExtendedForecast';

function App() {
  return (
    <div className="App crt">
        <button className="info-icon">Settings</button>
        <ExtendedForecast />
    </div>
  );
}

export default App;
