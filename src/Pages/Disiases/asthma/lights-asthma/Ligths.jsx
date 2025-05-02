import { useHelper } from "@react-three/drei";
import React, { useRef } from "react";
import { DirectionalLight } from "three";

const Lights = () => {
  const directionalLightRef = useRef(null);
  useHelper(directionalLightRef, DirectionalLight);

  return (
    <>
      <ambientLight intensity={2} color="white" />
      <directionalLight
        ref={directionalLightRef}
        color="white" 
        intensity={0.5}
        position={[5, 5, 5]} 
      />
    </>
  );
};

export default Lights;