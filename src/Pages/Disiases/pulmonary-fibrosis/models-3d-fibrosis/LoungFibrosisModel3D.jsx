/* eslint-disable react/no-unknown-property */
// eslint-disable-next-line no-unused-vars
import React, { useRef, useState, useEffect} from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from '@react-three/fiber'


export function LoungFibrosisModelo3D(props) {
  const { nodes, materials } = useGLTF("/models-3d-fibrosis/Lung-fibrosis.glb");
  const [speedMultiplier, setSpeedMultiplier] = useState(2);

  const refLoung = useRef();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key.toLowerCase() === "b") {
        setSpeedMultiplier((prev) => (prev === 2 ? 10 : 2));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const scaleValue = 1 + Math.sin(t * speedMultiplier) * 0.03;
    refLoung.current?.scale.set(scaleValue, scaleValue, scaleValue);
  });

  return (
    <group {...props} dispose={null} ref={refLoung}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lung.geometry}
        material={materials.lungColor}
      />
    </group>
  );
}

useGLTF.preload("/Lung-fibrosis.glb");

export default LoungFibrosisModelo3D;
