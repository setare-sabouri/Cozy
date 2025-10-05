import React from 'react'
import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Particles = ({count=500 , mode='Rainy'}) => {
    const meshRef = useRef();
      const dummy = useMemo(() => new THREE.Object3D(), []);
    
      const particles = useMemo(() => {
        const temp = [];
        for (let i = 0; i < count; i++) {
          temp.push({
            x: (Math.random() - 0.5) * 10,
            y: Math.random() *  10,
            z: (Math.random() - 0.5) * 10,
            speed: Math.random() * 0.1 + 0.05,
          });
        }
        return temp;
      }, [count]);
    
      useFrame(() => {
        particles.forEach((particle, i) => {
          particle.y -= particle.speed;
          if (particle.y < 0) {
            particle.y = 10; // Reset to top
          }
    
          dummy.position.set(particle.x, particle.y, particle.z);
          dummy.updateMatrix();
          meshRef.current.setMatrixAt(i, dummy.matrix);
        });
        meshRef.current.instanceMatrix.needsUpdate = true;
      });
  return (
      <instancedMesh ref={meshRef} args={[null, null, count]}>
        <cylinderGeometry args={[0.01, 0.01, 0.5, 8]} />
        <meshBasicMaterial color="#87CEEB" transparent opacity={0.6} />
      </instancedMesh>
  )
}

export default Particles
