import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Lights from "../lights-cancer/Lights.jsx";
import "../lungCancer.css";
import LoungMedicine from "../modelos-3d-cancer/LoungMedicine.jsx";
import LoungMedicine2 from "../modelos-3d-cancer/LoungMedicine2.jsx";
import Recipe from "../modelos-3d-cancer/Recipe.jsx";
import StagingPrecaution from "../staging/StagingPrecaution.jsx";
import RecipeForPrecaution from "../modelos-3d-cancer/RecipeForPrecaution.jsx";



const PrecautionCancer = () => (
  <Canvas
    className="canvas-precaution-cancer"
    shadows
    camera={{ position: [-15,6,5], fov:25 }}
    
  >
    <Lights lightPosition={[-5,5,-5]} ambIntensity={10} dirIntensity={10} />
    <OrbitControls enableZoom={false} enablePan={false} enableRotate={true} />
    <LoungMedicine rotation={[Math.PI / 1,0,0]} position={[0,-1,0]}/>
    <LoungMedicine2 position={[1.5, -2.5, 1]} />
    <RecipeForPrecaution position={[0, 0, 0]} />
    <StagingPrecaution />
  </Canvas>
);

export default PrecautionCancer;