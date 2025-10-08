import { useStore } from '../Store/useStore'
import Weathers from './Weathers'
import { Text } from '@react-three/drei'

const Weather = () => {
  const { Weather, CityName, WeatherData } = useStore((state) => state)
  console.log(WeatherData.weather[0].main)
  return (
    <>
      <Weathers />
      <Text
        color={'black'}
        position={[0, 2, 0]}
        fontSize={0.3}
      >

        {WeatherData.weather[0].main} in {CityName}
      </Text>
    </>
  )
}

export default Weather
