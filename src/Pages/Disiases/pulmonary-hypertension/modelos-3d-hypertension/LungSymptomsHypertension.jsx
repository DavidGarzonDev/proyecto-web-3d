/* eslint-disable react/no-unknown-property */
import { useGLTF } from '@react-three/drei';
import { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';

const LungSymptomsHypertension = ({ toggleActivation }) => {
  const { nodes, materials } = useGLTF('/models-3d-hypertension/oximeter-model.glb');
  const meshRef = useRef();
  const [activated, setActivated] = useState(false); 

  useEffect(() => {
    toggleActivation(activated); 
  }, [activated, toggleActivation]);

  useFrame((state, delta) => {
    if (!meshRef.current) return;

    if (activated) {
      const t = state.clock.getElapsedTime();
      meshRef.current.rotation.y += delta * 0.2;
      meshRef.current.position.y = Math.sin(t * 1) * 0.2 + 0.2;
    } else {
      meshRef.current.rotation.y = 0;
      meshRef.current.position.y = -1;
    }
  });

  return (
    <group dispose={null}>
      <mesh
        ref={meshRef}
        castShadow
        receiveShadow
        geometry={nodes.Oximeter.geometry}
        material={materials.MaterialOximeter}
        rotation={[-Math.PI / -1, -1.5, -3.1]}
        scale={4}
        onDoubleClick={() => setActivated(prev => !prev)} // Toggle animación con doble click
      />
    </group>
  );
};

export default LungSymptomsHypertension;

useGLTF.preload('/models-3d-hypertension/oximeter-model.glb');

