import React from "react";
import Lights from "../lights-cancer/Lights.jsx";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import "../lungCancer.css";
import LoungSymptoms from "../modelos-3d-cancer/LoungSymptoms.jsx";
import Recipe from "../modelos-3d-cancer/Recipe.jsx";
import DripParticles from "./DripParticles.jsx";
import TextSymptomsCancer2 from "../texts/TextSymtompsCancer2.jsx";

const SymptomsCancer = () => {
  return (
    <Canvas
        className="canvas-symptoms-cancer"
        shadows={true}                   
      camera={{ position: [0, 2, 5], fov: 50 }}
    >
      
      <Lights lightPosition={[0, 5, 0]} />
      <TextSymptomsCancer2></TextSymptomsCancer2>
      <DripParticles  scale={[4, 0.9, 1.9]} size={0.3} opacity={0.2} coun={60} />
      <DripParticles  scale={[5, -0.05, 1.9]} size={0.3} opacity={0.5} coun={30}/>
      
      <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} />
      <LoungSymptoms />
      <Recipe />
    </Canvas>
  );
};

export default SymptomsCancer;