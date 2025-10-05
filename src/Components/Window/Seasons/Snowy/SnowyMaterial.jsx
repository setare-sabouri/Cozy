import { Environment, MeshPortalMaterial } from '@react-three/drei'
import React from 'react'

const SnowyMaterial = () => {
  return (
        <MeshPortalMaterial>
          <ambientLight intensity={0.5} />
          <Environment preset="city" />
          <color attach="background" args={['#030606']} />
          <mesh position={[0,4,0]}>
            <torusGeometry args={[1.65, 0.3, 64]} />
            <meshLambertMaterial color="red" />
          </mesh>
        </MeshPortalMaterial>
  )
}

export default SnowyMaterial
