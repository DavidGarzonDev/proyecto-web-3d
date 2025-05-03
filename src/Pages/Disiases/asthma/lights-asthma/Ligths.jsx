import { useHelper } from "@react-three/drei";
import React, { useRef } from "react";
import { DirectionalLight } from "three";

const Lights = () => {
  const directionalLightRef = useRef(null);
  useHelper(directionalLightRef, DirectionalLight, 1, "red");

  return (
    <>
      <ambientLight intensity={1.5} color="white" />
      <directionalLight
        ref={directionalLightRef}
        color="white"
        intensity={2}
        castShadow
        position={[5, 10, 6]}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-near={0.5}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
        shadow-bias={-0.0001}
      />
    </>
  );
};

export default Lights;