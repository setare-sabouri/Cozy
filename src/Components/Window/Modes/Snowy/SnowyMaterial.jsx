import { Environment, MeshPortalMaterial } from '@react-three/drei'
import React from 'react'
import Particles from '../../Particles'
import { useStore } from '../../../../Store/useStore'
import SeasonalClouds from '../Clouds'

const SnowyMaterial = () => {
    const {Weather}=useStore()
  
  return (
    <MeshPortalMaterial>
      <ambientLight intensity={0.5} />
      <Environment preset="city" />
      <color attach="background" args={['#5a5f60']} />
      <Particles count={500} mode={Weather} distanceToWindow={-0.5}/>
          <SeasonalClouds position={[50, 20, 10]} bounds={[1,1, 40]} color='#ffffff' />
    </MeshPortalMaterial>
  )
}

export default SnowyMaterial
