import { Environment, MeshPortalMaterial } from '@react-three/drei'
import React from 'react'

const Frame = ({bg = '#f0f0f0',index,children}) => {
  return (
        <MeshPortalMaterial >
          <ambientLight intensity={0.5} />
          <Environment preset="night" />
          
          <mesh castShadow receiveShadow>
            {children}
            <meshLambertMaterial color={bg} />
          </mesh>
        </MeshPortalMaterial>
  )
}

export default Frame
