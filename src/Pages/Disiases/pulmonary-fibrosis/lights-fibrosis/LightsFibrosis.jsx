/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useHelper } from "@react-three/drei";
import { useRef } from "react";
import { DirectionalLight } from "three";

const LightsFibrosis = ({ lightPosition = [0, 3, 0]}) => {
    const directionalLightRef = useRef(null);
    useHelper(directionalLightRef, DirectionalLight);

  return (
    <>
      <ambientLight intensity={1} color="white" />
      <directionalLight
        ref={directionalLightRef}
        color="white"
        intensity={1}
        castShadow={true}
        position={lightPosition}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-near={0.5}
        shadow-camera-far={20}
      />
    </>
  );
};

export default LightsFibrosis;
