import { Environment, MeshPortalMaterial } from '@react-three/drei'
import React from 'react'
import Particles from '../../Particles'
import { useStore } from '../../../../Store/useStore'

const SnowyMaterial = () => {
    const {Weather}=useStore()
  
  return (
    <MeshPortalMaterial>
      <ambientLight intensity={0.5} />
      <Environment preset="city" />
      <color attach="background" args={['#5a5f60']} />
      <Particles count={500} mode={Weather} distanceToWindow={20}/>
    </MeshPortalMaterial>
  )
}

export default SnowyMaterial
