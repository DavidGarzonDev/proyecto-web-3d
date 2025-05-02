/* eslint-disable react/no-unknown-property */

import { useGLTF } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const LungTreatmentHypertension = (props) => {
  const { nodes, materials } = useGLTF('/models-3d-hypertension/inhaler-model.glb');
  const meshRef = useRef();

  // Rotación animada en el eje Y
  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.4; // velocidad ajustable
    }
  });

  return (
    <group {...props} dispose={null}>
      <mesh
        ref={meshRef}
        castShadow
        receiveShadow
        geometry={nodes.Inhaler.geometry}
        material={materials.MaterialInhaler}
        rotation={[-Math.PI / -1, -1.5, -3]} // posición inicial
        scale={3}
      />
    </group>
  );
};

export default LungTreatmentHypertension;

useGLTF.preload('/models-3d-hypertension/inhaler-model.glb');
