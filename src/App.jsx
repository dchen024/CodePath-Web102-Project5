import { useState, useEffect } from "react";
import "./App.css";
import Weather from "./Component/Weather";

function App() {
  const [country, setCountry] = useState("USA");
  const [state, setState] = useState("California");
  const [city, setCity] = useState("Los Angeles");
  const [data, setData] = useState(null);

  const API_KEY = import.meta.env.VITE_IQAir_API_KEY;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      `http://api.airvisual.com/v2/city?city=${city}&state=${state}&country=${country}&key=${API_KEY}`
    );
    console.log(country);
    console.log(state);
    console.log(city);
    const { data } = await response.json();
    let temp = data.current.weather.tp;

    temp = temp * (9 / 5) + 32;
    data.current.weather.tp = Math.round(temp);
    setData(data);
    // console.log(data);
  };

  return (
    <div className="container">
      <h1>Weather Now</h1>
      <div className="search-container">
        <input
          type="text"
          className="text-input"
          placeholder="Country..."
          onChange={(e) => {
            setCountry(e.target.value);
          }}
        />
        <input
          type="text"
          className="text-input"
          placeholder="State..."
          onChange={(e) => {
            setState(e.target.value);
          }}
        />
        <input
          type="text"
          className="text-input"
          placeholder="City..."
          onChange={(e) => {
            setCity(e.target.value);
          }}
        />
        <button onClick={fetchData}>Search</button>
      </div>
      {data && <Weather data={data} />}
    </div>
  );
}

export default App;
