import React from 'react'

import API from '../API/WeatherAPI'
import { useStore } from '../Store/useStore'
import Search from './Search'
import Details from './Details'

const Interface = () => {
  const { Weather, CityName } = useStore((state) => state)

  return (
    <>
      <API lat={51.5074} lon={-0.1278} City={CityName} />
      <Search/>
      <Details/>
    </>

  )
}

export default Interface
