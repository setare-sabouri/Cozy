import { meshBounds, Text } from '@react-three/drei'
import { useStore } from '../../Store/useStore'

const Weather = () => {
  const { Weather, setWeather } = useStore((state) => state)

  return (
    <>
      <Text
        name="Rainy"
        color={'black'}
        position={[-3, 1.5, 0]}
        fontSize={0.5}
        raycast={meshBounds}
        onClick={(e) => { setWeather(e.object.name) }}
      >
        Rainy
      </Text>

      <Text
        name="Sunny"
        color={'black'}
        position={[-3, 0.5, 0]}
        fontSize={0.5}
        raycast={meshBounds}
        onClick={(e) => { setWeather(e.object.name) }}
      >
        Sunny
      </Text>

      <Text
        name="Cloudy"
        color={'black'}
        position={[-3, 0.9, 0]}
        fontSize={0.5}
        raycast={meshBounds}
        onClick={(e) => { setWeather(e.object.name) }}
      >
        Cloudy
      </Text>

      <Text
        name="Snowy"
        color={'black'}
        position={[-3, -0.5, 0]}
        fontSize={0.5}
        raycast={meshBounds}
        onClick={(e) => { setWeather(e.object.name) }}
      >
        Snowy
      </Text>

      <Text
        name="Stormy"
        color={'black'}
        position={[-3, -1.5, 0]}
        fontSize={0.5}
        raycast={meshBounds}
        onClick={(e) => { setWeather(e.object.name) }}
      >
        Stormy
      </Text>

      <Text
        color={'black'}
        position={[0, 2, 0]}
        fontSize={0.3}
      >
        Selected: {Weather}
      </Text>
    </>
  )
}

export default Weather
