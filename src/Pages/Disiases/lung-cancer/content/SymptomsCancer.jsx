import React from "react";
import Lights from "../lights-cancer/Lights.jsx";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import "../lungCancer.css";
import LoungSymptoms from "../modelos-3d-cancer/LoungSymptoms.jsx";
import Recipe from "../modelos-3d-cancer/Recipe.jsx";


const SymptomsCancer = () => {
  return (
    <Canvas
        className="canvas-symptoms-cancer"
        shadows={true}                   /* enable shadowMap */
      camera={{ position: [0, 2, 5], fov: 50 }}
    >
      {/* Tilt the directional light for side shadow */}
      <Lights lightPosition={[0, 5, 0]} />
      <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} />
      <LoungSymptoms />
      <Recipe />
    </Canvas>
  );
};

export default SymptomsCancer;