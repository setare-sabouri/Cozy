import React from 'react'
import { useStore } from '../../Store/useStore'
import RainyMaterial from './Seasons/Rainy/RainyMaterial'
import SunnyMaterial from './Seasons/Sunny/SunnyMaterial'
import SnowyMaterial from './Seasons/Snowy/SnowyMaterial'

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
