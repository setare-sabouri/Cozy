import React from 'react'
import { useStore } from '../../../../Store/useStore'
import { Environment, MeshPortalMaterial } from '@react-three/drei'
import Particles from '../../Particles'

const StormyMaterial = () => {
    const {Weather}=useStore()
  
  return (
    <MeshPortalMaterial>
      <ambientLight intensity={0.5} />
      <Environment preset="city" />
      <color attach="background" args={['#202333']} />
      <Particles count={400} mode={'Stormy'} distanceToWindow={10} />
    </MeshPortalMaterial>
  )
}

export default StormyMaterial
