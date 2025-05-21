import React from "react";
import Lights from "../lights-asthma/Ligths";
import { Canvas } from "@react-three/fiber";
import Person from "../models-3d-asthma/Person";
import Recipe from "../models-3d-asthma/Recipe";
import StagingSymptoms from "../staging/StagingSymptoms";

const SymptomsAsthma = () => {
  return (
    <Canvas
      className="canvas-symptoms-asthma"
      camera={{ position: [-3,3, -10], fov: 70 }}
      shadows={true}
    >
      <Lights />
      
      <Person position={[0, -7.5, 0]} rotation={[0, -3, 0]} />

      <Recipe />
      <StagingSymptoms />
    </Canvas>
    
  );
};

export default SymptomsAsthma;