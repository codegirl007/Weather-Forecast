import { weatherStore } from "../stores/weatherStore";
import { forecastStore } from "../stores/forecastStore";

//API KEY

const KEY = process.env.REACT_APP_MY_API_ID;

//FETCHWEATHER FUNCTION

export const fetchWeather = () => {
  const city = weatherStore.getCity();

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${KEY}`
  )
    .then((response) => {
      if (!response.ok) {
        console.log(`Error with response status: ${response.statusText}`);
      }
      return response.json();
    })
    .then((data) => {
      weatherStore.weather(data);
    });
};

//FETCHFORECAST FUNCTION

export const fetchForecast = () => {
  const city = weatherStore.getCity();

  fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${KEY}`
  )
    .then((response) => {
      if (!response.ok) {
        console.log(`Error with response status: ${response.statusText}`);
      }
      return response.json();
    })
    .then((data) => {
      forecastStore.weatherForecast(data);
    });
};

//ONCHANGE FUNCTION FOR SELECT
export const onChangeCity = (event) => {
  weatherStore.onChangeCity(event.target.value);
};
