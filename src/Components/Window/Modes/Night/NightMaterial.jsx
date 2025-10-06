import React from 'react'
import { Environment, MeshPortalMaterial, Stars } from '@react-three/drei'
import * as THREE from 'three';

const NightMaterial = () => {
  return (
  
    <MeshPortalMaterial>
      <color attach="background" args={['#000000']} />
      <ambientLight intensity={0.5} />
      <Environment preset="city" />
      <Stars/>
      <group >

      </group>
    </MeshPortalMaterial>
  
  )
}

export default NightMaterial


// add moon 
// add fire maybe 