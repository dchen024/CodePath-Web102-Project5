import "./Weather.css";

const Weather = ({ data }) => {
  const {
    tp: temperature,
    pr: pressure,
    hu: humidity,
    ws: wind_speed,
    wd: wind_direction,
    ic: icon,
  } = data.current.weather;

  const country = data.country;
  const state = data.state;
  const city = data.city;

  return (
    <div className="container">
      <h2>{`${city}, ${state}, ${country}`}</h2>
      <div className="data-outer-container">
        <div className="data-container">
          <p className="no-bottom-margin">Temperature</p>
          <p className="no-bottom-margin">{temperature}°F</p>
        </div>
        <div className="data-container">
          <p className="no-bottom-margin">Humidity</p>
          <p className="no-bottom-margin">{humidity}%</p>
        </div>
        <div className="data-container">
          <p className="no-bottom-margin">Wind Speed</p>
          <p className="no-bottom-margin">{wind_speed}m/s</p>
        </div>
        <div className="data-container">
          <p className="no-bottom-margin">Wind Direction</p>
          <p className="no-bottom-margin">{wind_direction}°</p>
        </div>
      </div>
    </div>
  );
};

export default Weather;

// "ts": "2017-02-01T01:00:00.000Z",
//         "tp": 12,
//         "pr": 1020,
//         "hu": 62,
//         "ws": 2,
//         "wd": 320,
//         "ic": "01n"
