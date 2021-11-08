import create from "zustand";

const useStore = create(() => ({
   temperature: null,
   icon: null,
   sunrise: null,
   sunset: null,
   description: null,
   wind: null,
   humidity: null,
   city: "Prague",
   country: "CZ"
}))

export const weatherStore = {
    weather: (data) => {
        useStore.setState({
            temperature: Math.round(data.main.temp),
            icon: data.weather[0].icon,
            sunrise: new Date((data.sys.sunrise * 1000)).toLocaleString(),
            sunset: new Date((data.sys.sunset * 1000)).toLocaleString(),
            description: data.weather[0].main,
            wind: data.wind.speed,
            humidity: data.main.humidity,
            city: data.name,
            country: data.sys.country
        })
    },
    onChangeCity: (newValue) => {
        useStore.setState({
            city: newValue
        })
    },
    getCity: () => {
        const city = useStore.getState().city
        return city
    },
    useStore
}



 