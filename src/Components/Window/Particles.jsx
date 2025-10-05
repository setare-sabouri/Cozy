import React, { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { PARTICLE_MODES } from "../../Utils/Config/particlesConfig";

const geometryMap = {
  cylinder: <cylinderGeometry args={[0.01, 0.01, 0.5, 8]} />, // Rain 
  octahedron: <octahedronGeometry args={[0.05, 0]} />, // Snow
};

const Particles = ({ count = 500, mode = "Rainy" }) => {
  const config = PARTICLE_MODES[mode] || PARTICLE_MODES.Sunny;
  const meshRef = useRef();
  const dummy = useMemo(() => new THREE.Object3D(), []);

  // Early exit if no geometry/material (like Sunny mode)
  if (!config.geometry || !config.material) return null;

  // Particles init setup
  const particles = useMemo(() => {
    return new Array(count).fill().map(() => ({
      x: (Math.random() - 0.5) * 10,
      y: Math.random() * 10,
      z: (Math.random() - 0.5) * 10,
      speed: Math.random() * (config.speedMax - config.speedMin) + config.speedMin,
      drift: config.drift ? Math.random() * config.drift * 2 - config.drift: 0,
    }));
  }, [count, config]);


  useFrame((state) => {
    particles.forEach((p, i) => {
      p.y -= p.speed;
      if (config.drift) {
        p.x += Math.sin(state.clock.elapsedTime + i) * p.drift;
      }
      if (p.y < 0) {
        p.y = 10;
        p.x = (Math.random() - 0.5) * 20;
      }

      dummy.position.set(p.x, p.y, p.z);

      if (mode === "Snowy") {
        dummy.rotation.x = state.clock.elapsedTime * 0.5;
        dummy.rotation.y = state.clock.elapsedTime * 0.7;
      } else {
        dummy.rotation.set(0, 0, 0);
      }

      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    });

    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[null, null, count]}>
      {geometryMap[config.geometry]}
      <meshBasicMaterial attach="material" {...config.material} />
    </instancedMesh>
  );
};

export default Particles;
