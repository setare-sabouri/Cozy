import React, { useEffect } from 'react'
import { useStore } from '../../Store/useStore'
import RainyMaterial from './Modes/Rainy/RainyMaterial'
import SunnyMaterial from './Modes/Sunny/SunnyMaterial'
import SnowyMaterial from './Modes/Snowy/SnowyMaterial'
import StormyMaterial from './Modes/Stormy/StormyMaterial'
import CloudyMaterial from './Modes/Cloudy/Cloudy'

const WindowManager = () => {
    const { Weather, WeatherData,setWeather } = useStore()
    const CurrentCondition = WeatherData?.weather[0].main.toLowerCase()

    useEffect(() => {
        if (CurrentCondition.includes('sunny') || CurrentCondition.includes('sun')) {
            setWeather('Sunny')
        }
        if (CurrentCondition.includes('thunder') || CurrentCondition.includes('storm')) {
            setWeather('Stormy');
        }
        if (CurrentCondition.includes('cloud') || CurrentCondition.includes('overcast')|| CurrentCondition.includes('clear')) {
            setWeather('Cloudy');
        }
        if (CurrentCondition.includes('rain') || CurrentCondition.includes('drizzle')) {
            setWeather('Rainy')
        }
        if (CurrentCondition.includes('snow') || CurrentCondition.includes('blizzard')) {
            setWeather('Snowy')
        }
        // needs further window / default to sunny
        if (CurrentCondition.includes('mist') || CurrentCondition.includes('smoke')
            || CurrentCondition.includes('haze') || CurrentCondition.includes('dust')
            || CurrentCondition.includes('fog') || CurrentCondition.includes('sand')
            || CurrentCondition.includes('ash') || CurrentCondition.includes('squall')
            || CurrentCondition.includes('tornado')) {
            setWeather('Snowy')
        }
    },
        [WeatherData])


    switch (Weather) {
        case 'Sunny':
            return <SunnyMaterial />
        case 'Rainy':
            return <RainyMaterial />
        case 'Snowy':
            return <SnowyMaterial />
        case 'Stormy':
            return <StormyMaterial />
        case 'Cloudy':
            return <CloudyMaterial />
    }
}

export default WindowManager
