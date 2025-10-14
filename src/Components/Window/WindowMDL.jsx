import { useGLTF } from '@react-three/drei'
import WindowManager from './WindowManager'
import { Suspense } from 'react'

const WindowMDL = () => {
  const { scene, nodes } = useGLTF('/Models/windownew.glb')
  const clonedScene = scene.clone(true)
  
  // Remove Glass from the cloned scene
  const glass = clonedScene.getObjectByName('Glass')
  if (glass) {
    glass.parent.remove(glass)
  }

  return (
    <Suspense fallback={null}>
    <group scale={0.4} position={[1, -1.7, 0]} rotation={[0, Math.PI / 2, 0]}>

      <primitive object={clonedScene} />      {/* Full scene without Glass */}

      <mesh geometry={nodes.Glass.geometry}> {/* Glass mesh handled separately  */}
        <WindowManager />
      </mesh>
      
    </group>

    </Suspense>

  )
}

export default WindowMDL
