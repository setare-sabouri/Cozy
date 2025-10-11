export const fetchWeatherByCity = async (city) => {
  try {
    // Get coordinates of city first
    const geoRes = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${import.meta.env.VITE_CozyWeather}`);
    const geoData = await geoRes.json();

    if (!geoData.length) throw new Error("City not found");

    const { lat, lon } = geoData[0];

    // Get weather data
    const weatherRes = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_CozyWeather}`);
    const weatherData = await weatherRes.json();

    return weatherData;
  } catch (err) {
    console.error("Error fetching weather:", err);
    throw err;
  }
};
