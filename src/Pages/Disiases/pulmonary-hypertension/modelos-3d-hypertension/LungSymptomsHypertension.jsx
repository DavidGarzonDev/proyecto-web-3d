/* eslint-disable react/no-unknown-property */
import { useGLTF } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const LungSymptomsHypertension = (props) => {
  const { nodes, materials } = useGLTF('/models-3d-hypertension/oximeter-model.glb');
  const meshRef = useRef();

  useFrame((_, delta) => {
    if (meshRef.current) {
      // Rota lentamente sobre el eje Y
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <group {...props} dispose={null}>
      <mesh
        ref={meshRef}
        castShadow
        receiveShadow
        geometry={nodes.Oximeter.geometry}
        material={materials.MaterialOximeter}
        rotation={[-Math.PI / -1, -1.5, -3]} // posición inicial
        scale={4}
      />
    </group>
  );
};

export default LungSymptomsHypertension;

useGLTF.preload('/models-3d-hypertension/oximeter-model.glb');

