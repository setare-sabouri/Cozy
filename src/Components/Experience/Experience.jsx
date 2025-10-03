import { CameraControls, Environment, OrbitControls, PivotControls, PresentationControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import FireCmp from '../Fire/Fire'
import { Perf } from 'r3f-perf'
import Window from '../Window/Window'

const Experience = () => {
  return (
    <Canvas shadows camera={{ position: [0, 0, 10], fov: 25 }}>
      <PresentationControls
        global
        polar={[-Math.PI / 3, Math.PI / 3]}
        azimuth={[-Math.PI / 1.4, Math.PI / 2]}
      >
      <Window />
      </PresentationControls>
      <Perf position="top-left" />
      <color attach="background" args={['#4c443d']} />
      <ambientLight intensity={1} />
      <Environment preset='forest'/>
      <axesHelper args={[5]} />
      <gridHelper />
    </Canvas>

  )
}

export default Experience
