/* eslint-disable react/no-unknown-property */
import { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const LungHypertension3D = (props) => {
  const { nodes, materials } = useGLTF('/models-3d-hypertension/hypertension-model.glb');
  const refHypertension = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const scaleValue = 1 + Math.sin(t * 2) * 0.03;
    refHypertension.current?.scale.set(scaleValue, scaleValue, scaleValue);
  });

  return (
    <group {...props} dispose={null} ref={refHypertension}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lungs02.geometry}
        material={materials.Lungs02Material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lungs01.geometry}
        material={materials.Lung01Material}
      />
    </group>
  );
};

export default LungHypertension3D;

useGLTF.preload('/models-3d-hypertension/hypertension-model.glb');


