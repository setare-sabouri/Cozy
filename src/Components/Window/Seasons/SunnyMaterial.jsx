import { Environment, MeshPortalMaterial } from '@react-three/drei'

const SunnyMaterial = () => {
  return (
        <MeshPortalMaterial>
          <ambientLight intensity={0.5} />
          <Environment preset="city" />
          <color attach="background" args={['#0cbebe']} />
        </MeshPortalMaterial>
  )
}

export default SunnyMaterial
