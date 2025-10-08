import { useStore } from '../Store/useStore'
import Weathers from './Weathers'
import { Text } from '@react-three/drei'

const Weather = () => {
  const {CityName, WeatherData } = useStore((state) => state)

  return (
    <>
      <Weathers />
      <Text
        color={'black'}
        position={[0, 2, 0]}
        fontSize={0.3}
      >
        {WeatherData && CityName 
          ? `${WeatherData.weather[0].main} in ${CityName}`
          : 'Search a city'}
        {/* {WeatherData.weather[0].main} in {CityName} */}
      </Text>
    </>
  )
}

export default Weather
