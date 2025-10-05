import { CameraControls, Environment, OrbitControls, PivotControls, PresentationControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import FireCmp from '../Fire/Fire'
import { Perf } from 'r3f-perf'
import Window from '../Window/Window'
import Weather from '../Weather/Weather'

const Experience = () => {
  return (
    <Canvas shadows camera={{ position: [0, 0, 10], fov: 25 }}>
      <PresentationControls polar={[-Math.PI / 3, Math.PI / 3]} azimuth={[-Math.PI / 2, Math.PI / 2]} >
        <Window />
        <Weather />
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
