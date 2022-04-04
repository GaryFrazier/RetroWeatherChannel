import './ExtendedForecast.css';
import React, { useEffect } from 'react';
import Panel from './panel/Panel'
import Header from './header/Header'
import axios from 'axios';
import { API_TOKEN } from '../../env';
import moment from 'moment';

const ExtendedForecast = () => {
  const [data, setData] = React.useState([])

  useEffect(() => {
    if (data?.lat) return;

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(pos => {
        axios
          .get(`https://api.openweathermap.org/data/2.5/onecall?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&exclude=current,minutely,hourly&units=imperial&appid=${API_TOKEN}&timestamp=${new Date().getDay()}`)
          .then((res) => {
            console.log(res.data)
            setData(res.data)
          })
      }, () => {
        axios
        .get(`https://api.openweathermap.org/data/2.5/onecall?lat=${25.7617}&lon=${-80.1918}&exclude=current,minutely,hourly&units=imperial&appid=${API_TOKEN}&timestamp=${new Date().getDay()}`)
        .then((res) => {
          console.log(res.data)
          setData(res.data)
        });
      });
    } else {
      axios
        .get(`https://api.openweathermap.org/data/2.5/onecall?lat=${25.7617}&lon=${-80.1918}&exclude=current,minutely,hourly&units=imperial&appid=${API_TOKEN}&timestamp=${new Date().getDay()}`)
        .then((res) => {
          console.log(res.data)
          setData(res.data)
        });
    }
    
  });

  if (!data?.lat) return;

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
            <Header city={"city"} country={"country"}/>
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
