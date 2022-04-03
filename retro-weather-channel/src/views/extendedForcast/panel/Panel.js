import './Panel.css';

function Panel() {
  return (
    <div className="extended-forecast-panel">
        <div className="extended-forecast-panel-border">
            <div className="extended-forecast-panel-content">
                <div className="day-container">
                    THU
                </div>
                <div className="weather-icon-container">
                    <img src="/CC_Rain.gif" />
                </div>
                <div className="weather-status-container">
                    PARTLY CLOUDY
                </div>
                <div className="temperature-container">
                    <div className="low-container">
                        <span className="low-label">Lo</span>
                        <span className="low-value">35</span>
                    </div>
                    <div className="high-container">
                        <span className="high-label">Hi</span>
                        <span className="high-value">70</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Panel;
