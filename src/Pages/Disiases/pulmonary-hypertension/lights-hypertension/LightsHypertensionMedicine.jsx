/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useHelper } from "@react-three/drei";
import { useRef } from "react";
import { DirectionalLightHelper } from "three";

const LightsHypertensionMedicine = ({ lightPosition = [5, 10, 5], ambIntensity = 0.5, dirIntensity = 1 }) => {
  const directionalLightRef = useRef(null);
  //useHelper(directionalLightRef, DirectionalLightHelper, 1, "hotpink");

  return (
    <>
      <ambientLight intensity={ambIntensity} color="white" />
      <directionalLight
        ref={directionalLightRef}
        color="white"
        intensity={dirIntensity}
        castShadow
        position={lightPosition}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-near={1}
        shadow-camera-far={50}
        shadow-camera-left={-20}
        shadow-camera-right={20}
        shadow-camera-top={20}
        shadow-camera-bottom={-20}
      />
    </>
  );
};


export default LightsHypertensionMedicine;