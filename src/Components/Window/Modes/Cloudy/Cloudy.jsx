import React from 'react'
import { Clouds, Environment, MeshPortalMaterial, Stars } from '@react-three/drei'
import SeasonalClouds from '../Clouds';

const CloudyMaterial = () => {
  
  return (

    <MeshPortalMaterial>
      <color attach="background" args={['#000000']} />
      <ambientLight intensity={0.5} />
      <Environment preset="city" />
      <Stars />
      <group >
          <SeasonalClouds position={[100, 18, 10]} bounds={[50,4, 30]} color='#949c9b' />
          {/* moon */}
      </group>
    </MeshPortalMaterial>

  )
}

export default CloudyMaterial


// add moon 
// add fire maybe 