/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function SaladFibrosis(props) {
  const { nodes, materials } = useGLTF("/models-3d-fibrosis/Salad.glb");
  const group = useRef();
  const [isRotating, setIsRotating] = useState(false);

  useFrame(() => {
    if (group.current && isRotating) {
      group.current.rotation.y += 0.02;
    }
  });

  const handleClick = () => {
    setIsRotating((prev) => !prev);
  };

  return (
    <group {...props} ref={group} dispose={null} onClick={handleClick}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Potatoe.geometry}
        material={materials.PotatoeMaterial}
        onClick={handleClick}
        onPointerOver={() => (document.body.style.cursor = "pointer")}
        onPointerOut={() => (document.body.style.cursor = "auto")}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SaladBowl.geometry}
        material={materials["SaladBowlColor.001"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SaladSpoon.geometry}
        material={materials.SaladSpoonColor}
      />
    </group>
  );
}

useGLTF.preload("/models-3d-fibrosis/Salad.glb");

export default SaladFibrosis;
