import { useState, useRef, useEffect } from "react";
import { Text } from "@react-three/drei";
import { RigidBody, CuboidCollider } from "@react-three/rapier";
import { useFrame } from "@react-three/fiber";
import Platform from "./Platform";

const Door = ({ position, doorText, isCorrect, onCorrectAnswer, onGameOver }) => {
  const [playerEntered, setPlayerEntered] = useState(false);
  const [floorCollapsed, setFloorCollapsed] = useState(false);
  const [doorOpen, setDoorOpen] = useState(false);
  
  const floorRef = useRef();
  const leftDoorRef = useRef();
  const rightDoorRef = useRef();
  
  // Handle player entering the door
  const handleSensorEnter = () => {
    if (playerEntered) return; // Prevent multiple triggers
    
    // Abrir las puertas
    setDoorOpen(true);
    
    // Marcar que el jugador entró
    setPlayerEntered(true);
    
    if (isCorrect) {
      onCorrectAnswer();
    } else {
      // Let the floor collapse after a short delay
      setTimeout(() => {
        setFloorCollapsed(true);
      }, 300);
      
      // Also trigger game over with custom message
      setTimeout(() => {
        onGameOver("¡Respuesta incorrecta! Has caído.");
      }, 1000);
    }
  };
  
  // Make the floor collapse when necessary
  useEffect(() => {
    if (floorCollapsed && floorRef.current) {
      // Simplemente mover el piso hacia abajo rápidamente
      floorRef.current.setTranslation({ x: position[0], y: -20, z: position[2] - 2 });
    }
  }, [floorCollapsed, position]);
  
  // Animate doors opening
  useFrame((_, delta) => {
    if (doorOpen && leftDoorRef.current && rightDoorRef.current) {
      // Abrir la puerta izquierda (rotando en sentido antihorario)
      if (leftDoorRef.current.rotation.y > -Math.PI / 1.5) {
        leftDoorRef.current.rotation.y -= delta * 3; // Velocidad de apertura
      }
      
      // Abrir la puerta derecha (rotando en sentido horario)
      if (rightDoorRef.current.rotation.y < Math.PI / 1.5) {
        rightDoorRef.current.rotation.y += delta * 3; // Velocidad de apertura
      }
    }
  });
  
  return (
    <group position={position}>
      {/* Door frame */}
      <RigidBody type="fixed" colliders="cuboid">
        {/* Left side */}
        <mesh position={[-1.1, 1.5, 0]} castShadow>
          <boxGeometry args={[0.2, 3, 0.5]} />
          <meshStandardMaterial color="#e74c3c" /> {/* Todas las puertas rojas */}
        </mesh>
        
        {/* Right side */}
        <mesh position={[1.1, 1.5, 0]} castShadow>
          <boxGeometry args={[0.2, 3, 0.5]} />
          <meshStandardMaterial color="#e74c3c" /> {/* Todas las puertas rojas */}
        </mesh>
        
        {/* Top */}
        <mesh position={[0, 3, 0]} castShadow>
          <boxGeometry args={[2.4, 0.2, 0.5]} />
          <meshStandardMaterial color="#e74c3c" /> {/* Todas las puertas rojas */}
        </mesh>
        
        {/* Door text */}
        <group position={[0, 3.5, 0.5]}>
          <Text
            color="white"
            fontSize={0.3}
            maxWidth={2}
            textAlign="center"
          >
            {doorText}
          </Text>
        </group>
      </RigidBody>
      
      {/* Puerta izquierda con punto pivote en el extremo izquierdo */}
      <group ref={leftDoorRef} position={[-1, 1.5, 0]}>
        <mesh castShadow position={[0.5, 0, 0]}>
          <boxGeometry args={[1, 2.8, 0.2]} />
          <meshStandardMaterial color="#c0392b" metalness={0.3} roughness={0.7} />
        </mesh>
        {/* Manija de la puerta */}
        <mesh castShadow position={[0.85, 0, 0.15]}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial color="#f1c40f" metalness={0.8} roughness={0.2} />
        </mesh>
        {/* Decoración de la manija */}
        <mesh castShadow position={[0.85, 0, 0.05]}>
          <cylinderGeometry args={[0.03, 0.03, 0.15, 8]} rotation={[Math.PI/2, 0, 0]} />
          <meshStandardMaterial color="#f1c40f" metalness={0.8} roughness={0.2} />
        </mesh>
      </group>
      
      {/* Puerta derecha con punto pivote en el extremo derecho */}
      <group ref={rightDoorRef} position={[1, 1.5, 0]}>
        <mesh castShadow position={[-0.5, 0, 0]}>
          <boxGeometry args={[1, 2.8, 0.2]} />
          <meshStandardMaterial color="#c0392b" metalness={0.3} roughness={0.7} />
        </mesh>
        {/* Manija de la puerta */}
        <mesh castShadow position={[-0.85, 0, 0.15]}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial color="#f1c40f" metalness={0.8} roughness={0.2} />
        </mesh>
        {/* Decoración de la manija */}
        <mesh castShadow position={[-0.85, 0, 0.05]}>
          <cylinderGeometry args={[0.03, 0.03, 0.15, 8]} rotation={[Math.PI/2, 0, 0]} />
          <meshStandardMaterial color="#f1c40f" metalness={0.8} roughness={0.2} />
        </mesh>
      </group>
      
      {/* Floor after door that may collapse */}
      <RigidBody 
        ref={floorRef}
        type="fixed"
        position={[0, 0, -2]} 
      >
        <mesh receiveShadow>
          <boxGeometry args={[2, 0.2, 4]} />
          <meshStandardMaterial 
            color="#e74c3c" // Todas las plataformas rojas
            opacity={0.8} 
            transparent
          />
        </mesh>
      </RigidBody>
      
      {/* Sensor to detect player entering - ahora más ancho y profundo */}
      <CuboidCollider 
        position={[0, 1.5, -1]} /* Movido hacia atrás para detectar antes de llegar a la puerta */
        args={[1.5, 1.5, 2]} /* Aumentada la profundidad para detectar al jugador con anticipación */
        sensor
        onIntersectionEnter={handleSensorEnter}
      />
    </group>
  );
};

export default Door;
