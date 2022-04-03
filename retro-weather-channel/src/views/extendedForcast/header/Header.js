import './Header.css';
import Logo from '../../shared/logo/Logo'

function Header() {
  return (
    <div className="extended-forecast-header">
        <Logo/>
        <div className="extended-forecast-header-primary-text">
            <span className="location-text">Miami, FLorida</span>
            <span className="extended-forecast-title-text">Extended Forecast</span>
        </div>
        <div className="extended-forecast-header-secondary-text">
            <span className="time-text">12:49:03 PM</span>
            <span className="date-text">TUE NOV 5</span>
        </div>
    </div>
  );
}

export default Header;
