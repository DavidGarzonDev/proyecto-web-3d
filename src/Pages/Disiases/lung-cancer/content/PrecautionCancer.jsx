
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { useState, useEffect } from "react";
import Lights from "../lights-cancer/Lights.jsx";
import "../lungCancer.css";
import LoungMedicine from "../modelos-3d-cancer/LoungMedicine.jsx";
import LoungMedicine2 from "../modelos-3d-cancer/LoungMedicine2.jsx";
import StagingPrecaution from "../staging/StagingPrecaution.jsx";
import RecipeForPrecaution from "../modelos-3d-cancer/RecipeForPrecaution.jsx";
import TextPrecautionCancer from "../texts/TextPrecautionCancer.jsx";
import Floor from "../modelos-3d-cancer/Floor.jsx";
import PrecautionText3D from "../modelos-3d-cancer/PrecautionText3D.jsx";

const PrecautionCancer = () => {
  const [dropFruits, setDropFruits] = useState(false);
  
  // Handle keyboard events for 'O' key
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key.toLowerCase() === 'o') {
        setDropFruits(prevState => !prevState);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <Canvas
      className="canvas-precaution-cancer"
      shadows
      camera={{ position: [-15,6,5], fov:25 }}
    >
      <Lights lightPosition={[-5,5,-5]} ambIntensity={10} dirIntensity={10} />
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={true} />
      <Physics gravity={[0, -9.8, 0]}>
        <LoungMedicine 
          initialRotation={[Math.PI / 1,0,0]} 
          initialPosition={[0,5,0]} 
          position={[0,-1,0]} 
          dropTrigger={dropFruits}
          onFruitClick={() => setDropFruits(prevState => !prevState)}
        />
        <LoungMedicine2 
          initialPosition={[1.5,6,1]} 
          position={[1.5,-2.5,1]} 
          dropTrigger={dropFruits}
          onFruitClick={() => setDropFruits(prevState => !prevState)}
        />
        <RecipeForPrecaution position={[0, 0, 0]} />
        <Floor position={[0, -2.1, 0]} />
      </Physics>
      <TextPrecautionCancer />
      <StagingPrecaution />
      <PrecautionText3D position={[0, 1, 0]} rotation={[0, -10.2, 0]} />
    </Canvas>
  );
};

export default PrecautionCancer;