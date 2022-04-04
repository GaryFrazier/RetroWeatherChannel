import './Header.css';
import React, { useEffect } from 'react';
import Logo from '../../shared/logo/Logo'
import moment from 'moment';

function Header(props) {
  const date = moment();
  const [dateState, setDateState] = React.useState(moment())
  useEffect(() => {
    setInterval(() => setDateState(moment()), 1000);
  }, []);

  return (
    <div className="extended-forecast-header">
        <Logo/>
        <div className="extended-forecast-header-primary-text">
            <span className="location-text">{`${props.city}, ${props.state}`}</span>
            <span className="extended-forecast-title-text">Extended Forecast</span>
        </div>
        <div className="extended-forecast-header-secondary-text">
            <span className="time-text">{dateState.format("h:mm:ss a")}</span>
            <span className="date-text">{dateState.format("ddd MMM DD")}</span>
        </div>
    </div>
  );
}

export default Header;
