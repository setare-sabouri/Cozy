import React from 'react'
import { useStore } from '../../Store/useStore'
import RainyMaterial from './Seasons/RainyMaterial'
import SunnyMaterial from './Seasons/SunnyMaterial'
import SnowyMaterial from './Seasons/SnowyMaterial'

const WindowManager = () => {
    const { Weather } = useStore()
    
    switch(Weather){
        case 'Sunny':
            return <SunnyMaterial/>
        case 'Rainy':
            return <RainyMaterial/>
        case 'Snowy':
            return <SnowyMaterial/>
    }
}

export default WindowManager
