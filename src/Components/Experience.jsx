import { Environment, PresentationControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Perf } from 'r3f-perf'

import Weather from '../Interface/Weather'
import WindowMDL from './Window/WindowMDL'
import Weathers from '../Interface/Weathers'



const Experience = () => {
  return (
    <Canvas shadows camera={{ position: [0, 0, 15], fov: 25 }}>
      <PresentationControls polar={[-Math.PI / 3, Math.PI / 3]} azimuth={[-Math.PI / 2, Math.PI / 2]} >
        <WindowMDL />
        <Weathers />
      </PresentationControls>
      <Perf position="top-left" />
      <color attach="background" args={['#613a2b']} />
      <ambientLight intensity={1} />
      <Environment preset='forest' />
      <axesHelper args={[3]} />
      <gridHelper />
    </Canvas>

  )
}

export default Experience
