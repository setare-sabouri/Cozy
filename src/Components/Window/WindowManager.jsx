import React from 'react'
import RainyMaterial from '../Modes/Rainy/RainyMaterial'
import SunnyMaterial from '../Modes/Sunny/SunnyMaterial'
import SnowyMaterial from '../Modes/Snowy/SnowyMaterial'
import StormyMaterial from '../Modes/Stormy/StormyMaterial'
import CloudyMaterial from '../Modes/Cloudy/CloudyMaterial'
import { useStore } from '../../Store/useStore'

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
    default:
      return <SunnyMaterial /> // fallback
  }
}

export default WindowManager
