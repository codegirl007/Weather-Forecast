import React, { useEffect } from "react";
import { fetchForecast, fetchWeather } from "./actions/fetchDataAction";
import "./App.css";
import { CurrentWeather } from "./components/CurrentWeather/CurrentWeather";
import { weatherStore } from "./stores/weatherStore";
import shallow from "zustand/shallow";
import { forecastStore } from "./stores/forecastStore";
import { SelectCity } from "./components/SelectCity/SelectCity";
import { Forecast } from "./components/Forecast/Forecast";
import { Loading } from "./components/Loading/Loading";

export const App = () => {
  const { city, isLoading } = weatherStore.useStore(
    (store) => ({
      city: store.city,
      isLoading: store.isLoading,
    }),
    shallow
  );

  const weatherForecast = forecastStore.useStore(
    (store) => store.weatherForecast,
    shallow
  );

  useEffect(() => {
    fetchWeather();
  }, [city]);

  useEffect(() => {
    fetchForecast();
  }, [city]);

  return (
    <div className="App">
      <div className="container">
        <h1>My Weather App</h1>
        <SelectCity />
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <div className="weather">
              <CurrentWeather />
              <div className="weather__forecast" id="predpoved">
                {weatherForecast.map((forecast) => (
                  <Forecast forecast={forecast} key={forecast.dt} />
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
