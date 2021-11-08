import create from "zustand";

const useStore = create(() => ({
  weatherForecast: [],
}));

export const forecastStore = {
  weatherForecast: (data) => {
    useStore.setState({
      weatherForecast: data.list.filter((_, index) => index % 8 === 0),
    });
  },
  useStore,
};
