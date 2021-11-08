import React from "react";
import shallow from "zustand/shallow";
import { weatherStore } from "../../stores/weatherStore";
import "./CurrentWeather.css";

export const CurrentWeather = () => {
  const {
    temperature,
    icon,
    sunrise,
    sunset,
    description,
    wind,
    humidity,
    city,
    country,
  } = weatherStore.useStore(
    (store) => ({
      temperature: store.temperature,
      icon: store.icon,
      sunrise: store.sunrise,
      sunset: store.sunset,
      description: store.description,
      wind: store.wind,
      humidity: store.humidity,
      city: store.city,
      country: store.country,
    }),
    shallow
  );

  return (
    <div
      className={
        temperature < 10
          ? "weather__current weather__current--cold"
          : "weather__current"
      }
    >
      <h2 className="weather__city" id="mesto">
        {city}, {country}
      </h2>
      <div className="weather__inner weather__inner--center">
        <div className="weather__section weather__section--temp">
          <span className="weather__temp-value" id="teplota">
            {temperature}
          </span>
          <span className="weather__temp-unit">°C</span>
          <div className="weather__description" id="popis">
            {description}
          </div>
        </div>
        <div className="weather__section weather__section--icon" id="ikona">
          <img
            src={icon && `http://openweathermap.org/img/wn/${icon}@2x.png`}
            alt="current weather icon"
          />
        </div>
      </div>
      <div className="weather__inner">
        <div className="weather__section">
          <h3 className="weather__title">Wind</h3>
          <div className="weather__value">
            <span id="wind">{wind}</span> km/h
          </div>
        </div>
        <div className="weather__section">
          <h3 className="weather__title">Humidity</h3>
          <div className="weather__value">
            <span id="humidity">{humidity}</span> %
          </div>
        </div>
      </div>
      <div className="weather__inner">
        <div className="weather__section">
          <h3 className="weather__title">Sunrise</h3>
          <div className="weather__value">
            <span id="sunrise">{sunrise}</span>
          </div>
        </div>
        <div className="weather__section">
          <h3 className="weather__title">Sunset</h3>
          <div className="weather__value">
            <span id="sunset">{sunset}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
