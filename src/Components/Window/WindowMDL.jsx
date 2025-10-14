

import { useGLTF } from '@react-three/drei'
import WindowManager from './WindowManager'
import { Suspense} from 'react'
import { useStore } from '../../Store/useStore'

const WindowMDL = () => {
const { setWeather, setCityName } = useStore((state) => state)

  const { scene, nodes } = useGLTF('/Models/windoww.glb')
  const clonedScene = scene.clone(true)

  // Glass 
  const glass = clonedScene.getObjectByName('Glass')
  if (glass && glass.parent) glass.parent.remove(glass)


  // Weathers
  const clickableNames = ['Sunny', 'Stormy', 'Rainy', 'Cloudy', 'Snowy']

  const handleClick = (e) => {
    e.stopPropagation()
    const name = e.object.userData.name

    if (clickableNames.includes(name)) {
      console.log(`🌟 Clicked on: ${name}`)
      e.object.rotation.z += 0.1
      setWeather(name)
      setCityName(null)
    }
  }

  const handlePointerOver = (e) => {
    if (e.object.userData.clickable) document.body.style.cursor = 'pointer'
  }

  return (
    <Suspense fallback={null}>
      <group scale={0.4} position={[1, -1.7, 0]} rotation={[0, Math.PI / 2, 0]}
        onClick={handleClick}
        onPointerOver={handlePointerOver}
      >
        <primitive object={clonedScene} />
        <mesh geometry={nodes.Glass.geometry}>
          <WindowManager />
        </mesh>
      </group>
    </Suspense>
  )
}

export default WindowMDL
