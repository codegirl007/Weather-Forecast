import create from "zustand";
import { getTimefromUnix } from "../actions/getDayActions";

const useStore = create(() => ({
  temperature: null,
  icon: null,
  sunrise: null,
  sunset: null,
  description: null,
  wind: null,
  humidity: null,
  city: "Prague",
  country: "CZ",
  isLoading: true,
}));

export const weatherStore = {
  weather: (data) => {
    useStore.setState({
      temperature: Math.round(data.main.temp),
      icon: data.weather[0].icon,
      sunrise: getTimefromUnix(data.sys.sunrise),
      sunset: getTimefromUnix(data.sys.sunset),
      description: data.weather[0].main,
      wind: data.wind.speed,
      humidity: data.main.humidity,
      city: data.name,
      country: data.sys.country,
      isLoading: false,
    });
  },
  onChangeCity: (newValue) => {
    useStore.setState({
      city: newValue,
    });
  },
  getCity: () => {
    const city = useStore.getState().city;
    return city;
  },
  useStore,
};
