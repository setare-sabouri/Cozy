import { create } from "zustand";


export const useStore = create((set) => ({
  theme: "light",

  color: "#cebd6d",
  setColor: (color) => set({ color }),

  testvalue: 1,
  setMagnitude: (magnitude) => set({ magnitude }),

  Weather: "Sunny",
  setWeather: (Weather) => set({ Weather }),

  WeatherData: null,
  setWeatherData: (WeatherData) => set({ WeatherData }),


  CityName: "Stockholm",
  setCityName: (CityName) => set({ CityName }),


}));