import './ExtendedForecast.css';
import React, { useEffect } from 'react';
import Panel from './panel/Panel'
import Header from './header/Header'
import axios from 'axios'
import { API_TOKEN } from '../../env';
const ExtendedForecast = () => {
  const [data, setData] = React.useState([])

  useEffect(() => {
    if (data?.id) return;

    axios
      .get(`https://api.openweathermap.org/data/2.5/forecast?lat=55&lon=55&appid=${API_TOKEN}`)
      .then((res) => {
        console.log(res.data)
        setData(res.data)
      })
  });

  
  return (
    <div className="extended-forecast">
        <div className='main-content'>
          <div className='header-section'>
            <div className="header-spacer"/>
            <Header />
            <div className="header-spacer"/>
          </div>
          <div className='panel-section'>
            <Panel />
            <Panel />
            <Panel />
          </div>
        </div>
        <div className='footer'>
          <div className='footer-spacer' />
          <div className='footer-value'>
            Clear
          </div>
          <div className='footer-spacer' />
        </div>
    </div>
  );
}

export default ExtendedForecast;
