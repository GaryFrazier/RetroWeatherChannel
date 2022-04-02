import './ExtendedForecast.css';
import Panel from './panel/Panel'
import Header from './header/Header'

function ExtendedForecast() {
  return (
    <div className="extended-forecast">
        <div className='main-content'>
          <div className='header-section'>
            <div class="header-spacer"/>
            <Header />
            <div class="header-spacer"/>
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
