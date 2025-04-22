// Asthma.jsx
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, SoftShadows } from '@react-three/drei';
import Lungs from '../../Home/models-3d-asthma/Lungs';
import './Asthma.css';

const Asthma = () => {
  return (
    <>
    
    <Canvas shadows camera={{ position: [0, 0, 0], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[10, 10, 5]}
        intensity={1}
        
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <OrbitControls
      enableZoom = {false}
      />
      
      <Lungs  position/>
    </Canvas>
    </>
  );
};

export default Asthma;