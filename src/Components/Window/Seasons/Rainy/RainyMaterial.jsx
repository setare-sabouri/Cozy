import { Environment, MeshPortalMaterial } from '@react-three/drei'
import FireCmp from '../../../Fire/Fire'
import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import Particles from '../../Particles';

const RainyMaterial = ({ count = 500 }) => {


  return (
    <MeshPortalMaterial>
      <ambientLight intensity={0.5} />
      <Environment preset="city" />
      <color attach="background" args={['#08103d']} />
      <Particles count={500} mode='Rainy'/>
    </MeshPortalMaterial>
  )
}

export default RainyMaterial
