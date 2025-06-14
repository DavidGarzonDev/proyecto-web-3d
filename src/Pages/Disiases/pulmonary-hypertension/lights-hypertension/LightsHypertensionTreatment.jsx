/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useHelper } from "@react-three/drei";
import { useRef } from "react";
import { DirectionalLight } from "three";
import { SpotLightHelper } from "three";


const LightsHypertensionTreatment = ({ lightPosition = [0, 10, 0] }) => {
  const directionalLightRef = useRef(null);
  const spotLightRef = useRef(null);

  useHelper(directionalLightRef, DirectionalLight);
  //useHelper(spotLightRef, SpotLightHelper);

  return (
    <>
      <spotLight
        ref={spotLightRef}
        color={"blue"}
        position={[4, 2, -2]}
        distance={6}
        intensity={100}
        angle={Math.PI / 14}
        penumbra={10}
        castShadow
      />
      <ambientLight intensity={0.2} color="white" />
      <directionalLight
        ref={directionalLightRef}
        color="white"
        intensity={10}
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

export default LightsHypertensionTreatment;
