/* eslint-disable react/no-unknown-property */
import { useHelper } from "@react-three/drei";
import { useRef } from "react";
import { DirectionalLight } from "three";

const LightsFibrosis = () => {
     const directionalLightRef = useRef(null);
     useHelper(directionalLightRef, DirectionalLight);

   return (
     <>
       <ambientLight intensity={2} color="white" />
       <directionalLight
         ref={directionalLightRef}
        color="white" intensity={0.5} />
     </>
   );
 };
export default LightsFibrosis;
