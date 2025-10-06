import { Environment, MeshPortalMaterial, Sky, Sphere } from '@react-three/drei'
import { useFrame, useLoader } from '@react-three/fiber'
import * as THREE from 'three';
import SeasonalClouds from '../Clouds';

const SunnyMaterial = () => {

  const SunTex = useLoader(THREE.TextureLoader, '/Textures/Sunny/SunTe.jpg')

  SunTex.rotation = Math.PI / 2;

  const SunMaterial = new THREE.MeshBasicMaterial({ map: SunTex });

  return (
    <MeshPortalMaterial>
      <color attach="background" args={['#5e9292']} />
      <ambientLight intensity={0.5} />
      <Environment preset="city" />
      <group >
        <Sphere args={[1, 32, 32]} material={SunMaterial} position={[4, 6, 5]}/>
      </group>
    </MeshPortalMaterial>
  )
}

export default SunnyMaterial
