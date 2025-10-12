import React from 'react'
import { useStore } from '../Store/useStore'
import { meshBounds, Text } from '@react-three/drei'


const Weathers = () => {
    const { setWeather, setCityName } = useStore((state) => state)
    return (
        <>
            <Text
                name="Rainy"
                color={'black'}
                position={[-3, 2.5, 0]}
                fontSize={0.5}
                raycast={meshBounds}
                onClick={(e) => { setWeather(e.object.name); setCityName(null) }}
            >
                Rainy
            </Text>

            <Text
                name="Cloudy"
                color={'black'}
                position={[-3, 1.5, 0]}
                fontSize={0.5}
                raycast={meshBounds}
                onClick={(e) => { setWeather(e.object.name); setCityName(null) }}
            >
                Cloudy
            </Text>

            <Text
                name="Sunny"
                color={'black'}
                position={[-3, 0.5, 0]}
                fontSize={0.5}
                raycast={meshBounds}
                onClick={(e) => { setWeather(e.object.name); setCityName(null) }}
            >
                Sunny
            </Text>



            <Text
                name="Snowy"
                color={'black'}
                position={[-3, -0.5, 0]}
                fontSize={0.5}
                raycast={meshBounds}
                onClick={(e) => { setWeather(e.object.name); setCityName(null) }}
            >
                Snowy
            </Text>

            <Text
                name="Stormy"
                color={'black'}
                position={[-3, -1.5, 0]}
                fontSize={0.5}
                raycast={meshBounds}
                onClick={(e) => { setWeather(e.object.name); setCityName(null) }}
            >
                Stormy
            </Text>
        </>
    )
}

export default Weathers
