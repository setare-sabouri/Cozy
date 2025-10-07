import { useStore } from '../Store/useStore'
import API from '../API/WeatherAPI'
import Weathers from './Weathers'
import { Text } from '@react-three/drei'
import Search from './Search'

const Weather = () => {
  const { Weather, CityName } = useStore((state) => state)

  return (
    <>
      <API lat={51.5074} lon={-0.1278} City={CityName} />
      <Search/>
      <Weathers />
      <Text
        color={'black'}
        position={[0, 2, 0]}
        fontSize={0.3}
      >
        {Weather} in {CityName}
      </Text>
    </>
  )
}

export default Weather
