import { Cloud, Clouds } from '@react-three/drei'
import React from 'react'
import { useStore } from '../../../Store/useStore'

const SeasonalClouds = ({ position = [10, 9, 0], bounds = [1, 1, 10], color = "#d0c9c9" }) => {
    const { Weather } = useStore()
    console.log(Weather)
    return (
        <Cloud
            position={position}
            bounds={bounds}
            color={color}
            fade={50}
            speed={Weather === 'Stormy' ? 0.8 : Weather === 'Rainy' ? 0.2 : Weather === 'Cloudy' ? 0.4 : 2}
            growth={Weather === 'Stormy' ? 8 : Weather === 'Rainy' ? 6 : Weather === 'Cloudy' ? 5 : 8}
            segments={40}
            volume={Weather === 'Stormy' ? 10 : Weather === 'Rainy' ? 0 : Weather === 'Cloudy' ? 20 : 20}
            opacity={Weather === 'Stormy' ? 0.2 : Weather === 'Rainy' ? 1.4 : Weather === 'Cloudy' ? 2 : 2}
        />
    )
}

export default SeasonalClouds
