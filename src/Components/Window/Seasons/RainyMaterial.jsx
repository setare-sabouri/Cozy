import { Environment, MeshPortalMaterial } from '@react-three/drei'
import FireCmp from '../../Fire/Fire'

const RainyMaterial= () => {
  return (
        <MeshPortalMaterial>
          <ambientLight intensity={0.5} />
          <Environment preset="city" />
          <color attach="background" args={['#030606']} />
          <FireCmp />
        </MeshPortalMaterial>
  )
}

export default RainyMaterial
