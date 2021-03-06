import './ExtendedForecast.css';
import React, { useEffect } from 'react';
import Panel from './panel/Panel'
import Header from './header/Header'
import axios from 'axios';
import { API_TOKEN, GEOCODE_TOKEN } from '../../env';
import moment from 'moment';

const miamiLat = 25.7617;
const miamiLong = -80.1918;

const getLocationData = async (lat, long, setData) => {
  const res = await axios
    .get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=current,minutely,hourly&units=imperial&appid=${API_TOKEN}&timestamp=${new Date().getDay()}`)
    
  console.log(res.data);

  const geoData = await axios
    .get(`https://us1.locationiq.com/v1/reverse.php?key=${GEOCODE_TOKEN}&lat=${lat}&lon=${long}&format=json`)

  console.log(geoData.data);
  res.data.city = geoData.data.address.city;
  res.data.state = geoData.data.address.state;
  setData(res.data);
}
const ExtendedForecast = () => {
  const [data, setData] = React.useState([])

  useEffect(() => {
    if (data?.lat) return;

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(pos => {
        getLocationData(pos.coords.latitude, pos.coords.longitude, setData); 
      }, () => {
        getLocationData(miamiLat, miamiLong, setData);
      });
    } else {
      getLocationData(miamiLat, miamiLong, setData);
    }
  });

  if (!data?.lat) return <div className="extended-forecast"><div className='main-content loading'>Loading...</div></div>;

  const day1 = data.daily[0];
  day1.day = moment().local().format('ddd');
  const day2 = data.daily[1];
  day2.day = moment().local().add(1, 'days').format('ddd');
  const day3 = data.daily[2];
  day3.day = moment().local().add(2, 'days').format('ddd');

  const alertText = data.alerts ? data.alerts[0]?.description : "No current weather advisory alerts, have a nice day!";
  return (
    <div className="extended-forecast">
        <div className='main-content'>
          <div className='header-section'>
            <div className="header-spacer"/>
            <Header city={data.city} state={data.state}/>
            <div className="header-spacer"/>
          </div>
          <div className='panel-section'>
            <Panel data={day1} />
            <Panel data={day2} />
            <Panel data={day3} />
          </div>
        </div>
        <div className='footer'>
          <div className='footer-value'>
            <marquee>{alertText}</marquee>
          </div>
        </div>
    </div>
  );
}

export default ExtendedForecast;
