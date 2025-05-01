import React from "react";
import Lights from "../lights-cancer/Lights.jsx";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import "../lungCancer.css";
import LoungTreatmentCancer from "../modelos-3d-cancer/LoungTreatmentCancer.jsx";
import Recipe from "../modelos-3d-cancer/Recipe.jsx";

const TreatmentCancer = () => {
  return (
    <Canvas
      className="canvas-treatment-cancer"
      shadows={true}                   
      camera={{ position: [0, 2, 5], fov: 50 }}
    >
      <Lights lightPosition={[5, 5, 7]} />
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={true} enableDamping={false} />
        <LoungTreatmentCancer />
      <Recipe position={[0, 0, 0]}/>
    </Canvas>
  );
};

export default TreatmentCancer;
