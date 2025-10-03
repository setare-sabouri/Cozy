import { useGLTF, MeshPortalMaterial, Environment, Helper, Clone } from '@react-three/drei'
import { BoxHelper } from 'three'

const Window = () => {
  const WindowMdl = useGLTF('/Models/windowBlender.glb')
  return (
    <group scale={0.4} position={[0,-1.7,0]} rotation={[0,Math.PI/2,0]}>
      <Clone object={WindowMdl.nodes.Frame}/>
      <mesh geometry={WindowMdl.nodes.Glass.geometry}>
        <MeshPortalMaterial>
          <ambientLight intensity={0.5} />
          <Environment preset="city" />
          <mesh position={[0,4,0]}>
            <torusGeometry args={[1.65, 0.3, 64]} />
            <meshLambertMaterial color="red" />
          </mesh>
        </MeshPortalMaterial>
      </mesh>
    </group>
  )
}

export default Window
