import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Lungs from './models-3d-asthma/Lungs';
import Inhaler from './models-3d-asthma/Inhaler';
import Person from './models-3d-asthma/Person';
import './Asthma.css';

const Asthma = () => {
  return (
    <div className="asthma-container">
      <h1 className="asthma-title">ASMA</h1>
      
      <div className="fullscreen-canvas">
        <Canvas camera={{ position: [0, 2, 10], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <OrbitControls 
            enableZoom={true}
            minDistance={5}
            maxDistance={20}
          />
          
          {/* Modelo de Pulmones (arriba) */}
          <group position={[0, 1.8, 0]}>
            <Lungs />
          </group>
          
          {/* Modelo de Persona (centro) */}
          <group position={[0, -1, 0]}>
            <Person/>
          </group>
          
          {/* Modelo de Inhalador (abajo) */}
          <group position={[0, -2, 0]}>
            <Inhaler />
          </group>
          {/* Modelo de Inhalador (abajo) */}
          
            
          
        </Canvas>
        
      </div>
      
      
    </div>
  );
};

export default Asthma;