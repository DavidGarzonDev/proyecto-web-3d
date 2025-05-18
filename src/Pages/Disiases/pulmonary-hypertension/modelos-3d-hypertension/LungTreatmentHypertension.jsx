/* eslint-disable react/no-unknown-property */

import { useGLTF } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const LungTreatmentHypertension = (props) => {
  const { nodes, materials } = useGLTF('/models-3d-hypertension/inhaler-model.glb');
  const meshRef = useRef();

  // Rotación animada en el eje Y
  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      
      //meshRef.current.rotation.y += delta * 0.4; // velocidad ajustable
      meshRef.current.position.y = Math.sin(t * 1.5) * 0.3; // flotación
    }
  });

  materials.MaterialInhaler.color.set("white");

  return (
    <group {...props} dispose={null}>
      <mesh
        ref={meshRef}
        castShadow
        receiveShadow
        geometry={nodes.Inhaler.geometry}
        material={materials.MaterialInhaler}
        rotation={[-Math.PI / -1, -1, -3]} // posición inicial
        scale={3}
      />
    </group>
  );
};

export default LungTreatmentHypertension;

useGLTF.preload('/models-3d-hypertension/inhaler-model.glb');
