import React from 'react'
import { useStore } from '../../Store/useStore'
import RainyMaterial from './Modes/Rainy/RainyMaterial'
import SunnyMaterial from './Modes/Sunny/SunnyMaterial'
import SnowyMaterial from './Modes/Snowy/SnowyMaterial'
import NightMaterial from './Modes/Night/NightMaterial'
import StormyMaterial from './Modes/Stormy/StormyMaterial'

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
        case 'Night':
            return <NightMaterial />
    }
}

export default WindowManager
