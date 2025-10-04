import { useGLTF,Clone } from '@react-three/drei'
import WindowManager from './WindowManager'

const Window = () => {
  const WindowMdl = useGLTF('/Models/windowBlender.glb')
  return (
    <group scale={0.4} position={[1, -1.7, 0]} rotation={[0, Math.PI / 2, 0]}>
      <Clone object={WindowMdl.nodes.Frame} />
      <mesh geometry={WindowMdl.nodes.Glass.geometry}>
        <WindowManager/>
      </mesh>
    </group>
  )
}

export default Window
