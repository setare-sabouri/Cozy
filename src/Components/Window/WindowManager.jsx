import React from 'react'
import { useStore } from '../../Store/useStore'
import RainyMaterial from './Modes/Rainy/RainyMaterial'
import SunnyMaterial from './Modes/Sunny/SunnyMaterial'
import SnowyMaterial from './Modes/Snowy/SnowyMaterial'
import StormyMaterial from './Modes/Stormy/StormyMaterial'
import CloudyMaterial from './Modes/Cloudy/Cloudy'

const WindowManager = () => {
    const { Weather } = useStore()


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
