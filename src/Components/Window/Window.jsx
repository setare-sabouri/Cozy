import { useGLTF, Clone } from '@react-three/drei'
import WindowManager from './WindowManager'
import * as THREE from 'three'

const Window = () => {
  const { scene, nodes } = useGLTF('/Models/window.glb')
  const clonedScene = scene.clone(true)

  // Remove Glass from the cloned scene
  const glass = clonedScene.getObjectByName('Glass')
  if (glass) {
    glass.parent.remove(glass)
  }

  return (
    <group scale={0.4} position={[1, -1.7, 0]} rotation={[0, Math.PI / 2, 0]}>

      {/* Full scene without Glass */}
      <primitive object={clonedScene} />

      {/* Glass mesh handled separately  */}
      <mesh geometry={nodes.Glass.geometry}>
        <WindowManager />
      </mesh>
      
    </group>
  )
}

export default Window
