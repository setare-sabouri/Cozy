import { create } from "zustand";
import { fetchWeatherByCity } from "../API/weatherService";

export const useStore = create((set) => ({
  theme: "light",

  color: "#cebd6d",
  setColor: (color) => set({ color }),

  testvalue: 1,
  setMagnitude: (magnitude) => set({ magnitude }),

  // Weather Without API
  Weather: "Sunny",
  setWeather: (Weather) => set({ Weather }),

  // Weather with API
  CityName: "Stockholm",
  setCityName: (CityName) => set({ CityName }),

  WeatherData: null,
  isLoading: false,
  error: null,

  fetchWeather: async (City) => {
    set({ isLoading: true, error: null });
    try {
      const data = await fetchWeatherByCity(City);
      //  weather mode based on API data
      const mainCondition = data?.weather?.[0]?.main?.toLowerCase() || "";
      let weatherMode = "Sunny";

      if (mainCondition.includes("sunny") || mainCondition.includes("sun")) { weatherMode = "Sunny"; }
      else if (mainCondition.includes("thunder") || mainCondition.includes("storm")) { weatherMode = "Stormy"; }
      else if (mainCondition.includes("cloud") || mainCondition.includes("overcast")|| mainCondition.includes("clear")) { weatherMode = "Cloudy"; }
      else if (mainCondition.includes("rain") || mainCondition.includes("drizzle")) { weatherMode = "Rainy"; }
      else if (mainCondition.includes("snow") || mainCondition.includes("blizzard")) { weatherMode = "Snowy"; }
      else if (["mist", "smoke", "haze", "dust", "fog", "sand", "ash", "squall", "tornado"].some((term) => mainCondition.includes(term))) { weatherMode = "Snowy"; } // fallback for other 

      set({ WeatherData: data, Weather: weatherMode, isLoading: false });
    } catch (err) {
      set({ error: err.message, isLoading: false });
    }
  },
}));
