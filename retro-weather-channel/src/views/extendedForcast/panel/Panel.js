import './Panel.css';

function gifLookup(code) {
    switch(code) {
        case "Thunderstorm":
            return "/CC_TStorm.gif";
        case "Drizzle":
            return "/EF_ScatShowers.gif";
        case "Rain":
            return "/CC_Rain.gif";
        case "Snow":
            return "/CC_Snow.gif";
        case "Clouds":
            return "/CC_Cloudy.gif";
        case "Mist":
        case "Smoke":
        case "Haze":
        case "Dust":
        case "Fog":
        case "Sand":
        case "Dust":
        case "Ash":
        case "Squall":
        case "Tornado":
            return "/CC_Fog.gif";
        default:
            return "/CC_Clear1.gif";
    }
}
function Panel(props) {
  const data = props.data;
  if (!data) return;

  return (
    <div className="extended-forecast-panel">
        <div className="extended-forecast-panel-border">
            <div className="extended-forecast-panel-content">
                <div className="day-container">
                    {data.day}
                </div>
                <div className="weather-icon-container">
                    <img src={gifLookup(data?.weather[0].main)} />
                </div>
                <div className="weather-status-container">
                    {data?.weather[0].description}
                </div>
                <div className="temperature-container">
                    <div className="low-container">
                        <span className="low-label">Lo</span>
                        <span className="low-value">{Math.floor(data?.temp.min)}</span>
                    </div>
                    <div className="high-container">
                        <span className="high-label">Hi</span>
                        <span className="high-value">{Math.floor(data?.temp.max)}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Panel;
