import React, { useEffect } from 'react'


const API = ({ lat = 44.34, lon = 10.99, City = 'London' } = {}) => {

    useEffect(() => {
        const fetchLyrics = async () => {
            try {
                // const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_CozyWeather}`);
                const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${City}&appid=${import.meta.env.VITE_CozyWeather}`);
                const data = await response.json();
                console.log(data[0]);

                try {
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${data[0].lat}&lon=${data[0].lon}&appid=${import.meta.env.VITE_CozyWeather}`);
                const Wdata = await response.json();
                   console.log(Wdata)
                   
                }
                catch (err) {
                    console.error('Error fetching :', err);
                }
            } catch (err) {
                console.error('Error fetching :', err);
            }
        };

        fetchLyrics();
    }, [lat, lon]);

    return null
}

export default API



// is called in weather for now