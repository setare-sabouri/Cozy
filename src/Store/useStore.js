import { create } from "zustand";
import Weather from "../Components/Weather/Weather";

export const useStore = create((set) => ({
  theme: "light",

  color: "#cebd6d",
  setColor: (color) => set({ color }),

  testvalue:1,
  setMagnitude:(magnitude)=>set({magnitude}),

  Weather :"Sunny",
  setWeather :(Weather)=>set({Weather})


}));