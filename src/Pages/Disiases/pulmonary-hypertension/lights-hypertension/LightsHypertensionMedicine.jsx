/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useHelper } from "@react-three/drei";
import { useRef } from "react";
import { DirectionalLight } from "three";

const LightsHypertensionMedicine = ({ lightPosition = [0, 5, 0], ambIntensity = 2, dirIntensity = 0.5 }) => {
    const directionalLightRef = useRef(null);
    useHelper(directionalLightRef, DirectionalLight);

  return (
    <>
      <ambientLight intensity={ambIntensity} color="white" />
      <directionalLight
        ref={directionalLightRef}
        color="white"
        intensity={dirIntensity}
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

export default LightsHypertensionMedicine;