import './ExtendedForecast.css';
import Panel from './panel/Panel'

function ExtendedForecast() {
  return (
    <div className="extended-forecast">
        <div className='main-content'>
          <div className='header-section'>

          </div>
          <div className='panel-section'>
            <Panel />
            <Panel />
            <Panel />
          </div>
        </div>
        <div className='footer'>
          Clear
        </div>
    </div>
  );
}

export default ExtendedForecast;
