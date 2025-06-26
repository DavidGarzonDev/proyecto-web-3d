import React, { useMemo } from "react";
import { useTexture } from "@react-three/drei";
import { RepeatWrapping } from "three";
import { RigidBody } from "@react-three/rapier";

const TexturedWall = ({ position = [0, 0, 0], size = [1, 1, 1] }) => {
  const wallTexture = useTexture({
    map: "/textures/wall/wall-color.png",
    aoMap: "/textures/wall/wall-ao.png",
    roughnessMap: "/textures/wall/wall-rough.png",
    normalMap: "/textures/wall/wall-normal.png",
  });

  // Repetición automática basada en la geometría
  useMemo(() => {
    const repeatX = size[0] / 2; // ancho
    const repeatY = size[1] / 2; // alto
    Object.values(wallTexture).forEach((tex) => {
      tex.wrapS = RepeatWrapping;
      tex.wrapT = RepeatWrapping;
      tex.repeat.set(2,2);
      tex.anisotropy = 16;
    });
  }, [wallTexture, size]);

  return (
    <RigidBody type="fixed" colliders="cuboid" position={position}>
      <mesh castShadow receiveShadow>
        <boxGeometry args={size} />
        <meshStandardMaterial {...wallTexture} />
      </mesh>
    </RigidBody>
  );
};

export default TexturedWall;
