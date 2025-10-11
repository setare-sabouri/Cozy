import React, {  useRef} from 'react'
import { Environment, MeshPortalMaterial } from '@react-three/drei'
import Particles from '../Particles'
import { useFrame} from '@react-three/fiber';

import SeasonalClouds from '../Clouds';

const StormyMaterial = () => {
    const lightningLightRef = useRef()
    const nextFlash = useRef(0)       // useRef instead of useState
    const isFlashing = useRef(false)
  useFrame((state) => {
    const time = state.clock.getElapsedTime()

    if (!isFlashing.current && time > nextFlash.current) {
      // Start a flash
      isFlashing.current = true

      if (lightningLightRef.current) {
        const randomZ = (Math.random()-0.5) * 15
        lightningLightRef.current.position.z = randomZ
        lightningLightRef.current.intensity = 8
      }

      // End flash after 0.2–0.5s
      setTimeout(() => {
        if (lightningLightRef.current) lightningLightRef.current.intensity = 0
        isFlashing.current = false

        // Schedule next flash randomly between 1–2 seconds later
        nextFlash.current = time + 1 + Math.random() * 2
      }, 200 + Math.random() * 300)
    }
  })

    return (
        <MeshPortalMaterial>
            <ambientLight intensity={0.5} />
            <Environment preset="night" />
            <color attach="background" args={['#202333']} />
            <group>
                <SeasonalClouds position={[10, 11, 0]} bounds={[9,1,15]} color="#d0c9c9"/>
                <pointLight ref={lightningLightRef} position={[10, 8, 0]} intensity={3} color="#ececec" distance={10} decay={0.1} />
                <Particles count={400} mode={'Stormy'} distanceToWindow={0.3} />
            </group>
        </MeshPortalMaterial>
    )
}

export default StormyMaterial
