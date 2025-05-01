import React from "react";
import { Canvas } from "@react-three/fiber";
import "../lungCancer.css";
import LoungCancerModelo3D from "../modelos-3d-cancer/LoungCancerModelo3D.jsx";
import Lights from "../lights-cancer/Lights.jsx";
import { OrbitControls } from "@react-three/drei";
import Recipe from "../modelos-3d-cancer/Recipe.jsx";


const CanvasLoungCancer = () => {
  return (
    <Canvas className="canvas-loung-cancer" camera={{ position: [0, 2, 5], fov: 50,}} shadows={true} >
      <Lights />
      <OrbitControls
        enableZoom={true} 
        enablePan={true} 
        enableRotate={true} 
      />
      <LoungCancerModelo3D />
      <Recipe />
    </Canvas>
  );
};

export default CanvasLoungCancer;
