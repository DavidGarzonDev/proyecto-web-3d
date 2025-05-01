import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import LightsforCancerLoungKnow from "../Lights/LightsforCancerLoungKnow";
import "../KnowYourLongs.css"
import LoungKnow from "../model-3d/LoungKnow";


const CanvasLoungKnow = () => {
  return (
    <Canvas className="canvas-loung-cancer-know" camera={{ position: [0, 2, 5], fov: 50 }}>
        
      <OrbitControls
        enableZoom={false} 
        enablePan={false} 
        enableRotate={false} 
      />
      <LightsforCancerLoungKnow />
      <LoungKnow />
    </Canvas>
  );
};

export default CanvasLoungKnow;
