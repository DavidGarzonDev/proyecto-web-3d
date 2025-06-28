/* eslint-disable react/no-unknown-property */
import { useGLTF } from '@react-three/drei';
import { useRef, useEffect, useState } from 'react';
import { useFrame } from '@react-three/fiber';

const LungTreatmentHypertension = (props) => {
  const { nodes, materials } = useGLTF('/models-3d-hypertension/inhaler-model.glb');
  const meshRef = useRef();
  const [animate, setAnimate] = useState(false);

  // Toggle animación con tecla F
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key.toLowerCase() === 'd') {
        setAnimate((prev) => !prev); // Toggle
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Animación: rotación y flotación
  useFrame((state, delta) => {
    if (!animate || !meshRef.current) return;

    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.y += delta * 0.4;
    meshRef.current.position.y = Math.sin(t * 1.5) * 0.3;
  });

  // Color del material
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

