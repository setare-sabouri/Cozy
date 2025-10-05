import { Clouds, Environment, MeshPortalMaterial } from '@react-three/drei'
import FireCmp from '../../../Fire/Fire'
import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import Particles from '../../Particles';
import { useStore } from '../../../../Store/useStore';
import SeasonalClouds from '../Clouds';

const RainyMaterial = ({ count = 500 }) => {
  const { Weather,color } = useStore()


  return (
    <MeshPortalMaterial>
      <ambientLight intensity={0.8} />
      <Environment preset="lobby" />
      <color attach="background" args={['#08103d']} />
      <Clouds>
        <SeasonalClouds position={[7, 9, 0]} bounds={[5, 1, 8]} color='#646bce' />
        <SeasonalClouds position={[7, 9, 1]} bounds={[5, 1, 8]} color='#073b35' />
      </Clouds>



      <Particles count={200} mode={Weather} distanceToWindow={1} />
    </MeshPortalMaterial>
  )
}

export default RainyMaterial
