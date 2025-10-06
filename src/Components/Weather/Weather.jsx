import { meshBounds, Select, Text } from '@react-three/drei'
import { useStore } from '../../Store/useStore'

const Weather = () => {
  const { Weather, setWeather } = useStore((state) => state)

  return (
    <>
      <Text
        name="Rainy"
        position={[-3, 1.5, 0]}
        fontSize={0.5}
        raycast={meshBounds}
        onClick={(e) => { setWeather(e.object.name) }}
      >
        Rainy
      </Text>

      <Text
        name="Sunny"
        position={[-3, 0.5, 0]}
        fontSize={0.5}
        raycast={meshBounds}
        onClick={(e) => { setWeather(e.object.name) }}
      >
        Sunny
      </Text>

      <Text
        name="Night"
        position={[-3, 0.9, 0]}
        fontSize={0.5}
        raycast={meshBounds}
        onClick={(e) => { setWeather(e.object.name) }}
      >
        Night
      </Text>

      <Text
        name="Snowy"
        position={[-3, -0.5, 0]}
        fontSize={0.5}
        raycast={meshBounds}
        onClick={(e) => { setWeather(e.object.name) }}
      >
        Snowy
      </Text>

      <Text
        name="Stormy"
        position={[-3, -1.5, 0]}
        fontSize={0.5}
        raycast={meshBounds}
        onClick={(e) => { setWeather(e.object.name) }}
      >
        Stormy
      </Text>

      <Text position={[0, 2, 0]} fontSize={0.3}>
        Selected: {Weather}
      </Text>
    </>
  )
}

export default Weather
