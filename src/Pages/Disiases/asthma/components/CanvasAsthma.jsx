import { Canvas } from "@react-three/fiber";
import Lungs from "../models-3d-asthma/Lungs";
import Lights from "../lights-asthma/Ligths";
import { OrbitControls, SoftShadows, Sparkles, } from "@react-three/drei";
import Recipe from "../models-3d-asthma/Recipe";
import TextParticles from "../texts/TextParticles";
import TextCanvas from "../texts/TextCanvas";
const CanvasAsthma = () => {

  return (
    <Canvas
      className="canvas-asthma"
      camera={{ position: [0, 2, 7], fov: 55 }}
      shadows={true}>
      <SoftShadows frustum={3.75} size={50} near={9.5} samples={17} rings={7} />
      <OrbitControls
        enableZoom={false}
        enablePan={true}
        enableRotate={true}
        minPolarAngle={Math.PI / 6}
        maxPolarAngle={Math.PI / 2}
      />

      <TextParticles />
      <TextCanvas />


      <Lungs />
      <Lights />
      <Recipe />
      <Sparkles
        count={50}
        size={4}
        color="#d32f2f"
        speed={0.4}
        opacity={0.6}
        scale={[5, 10, 5]}
        position={[0, 0, 0]}
      />




    </Canvas>

  );
};

export default CanvasAsthma;