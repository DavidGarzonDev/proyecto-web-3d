import { useState, useRef, useEffect } from "react";
import { Text } from "@react-three/drei";
import { RigidBody, CuboidCollider } from "@react-three/rapier";
import { useFrame } from "@react-three/fiber";
import Platform from "./Platform";

const Door = ({ position, doorText, isCorrect, onCorrectAnswer }) => {
  const [playerEntered, setPlayerEntered] = useState(false);
  const [floorCollapsed, setFloorCollapsed] = useState(false);
  const floorRef = useRef();
    // Handle player entering the door
  const handleSensorEnter = () => {
    if (playerEntered) return; // Prevent multiple triggers
    
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
        onCorrectAnswer("¡Respuesta incorrecta! Has caído.");
      }, 1000);
    }
  };  // Make the floor collapse when necessary
  useEffect(() => {
    if (floorCollapsed && floorRef.current) {
      // Simplemente mover el piso hacia abajo rápidamente
      floorRef.current.setTranslation({ x: position[0], y: -20, z: position[2] - 2 });
    }
  }, [floorCollapsed, position]);
  
  return (
    <group position={position}>
      {/* Door frame */}
      <RigidBody type="fixed" colliders="cuboid">
        {/* Left side */}
        <mesh position={[-1.1, 1.5, 0]} castShadow>
          <boxGeometry args={[0.2, 3, 0.5]} />
          <meshStandardMaterial color={isCorrect ? "#27ae60" : "#e74c3c"} />
        </mesh>
        
        {/* Right side */}
        <mesh position={[1.1, 1.5, 0]} castShadow>
          <boxGeometry args={[0.2, 3, 0.5]} />
          <meshStandardMaterial color={isCorrect ? "#27ae60" : "#e74c3c"} />
        </mesh>
        
        {/* Top */}
        <mesh position={[0, 3, 0]} castShadow>
          <boxGeometry args={[2.4, 0.2, 0.5]} />
          <meshStandardMaterial color={isCorrect ? "#27ae60" : "#e74c3c"} />
        </mesh>
        
        {/* Door text */}
        <group position={[0, 3.5, 0]}>
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
      
      {/* Floor after door that may collapse */}
      <RigidBody 
        ref={floorRef}
        type="fixed"
        position={[0, 0, -2]} 
      >
        <mesh receiveShadow>
          <boxGeometry args={[2, 0.2, 4]} />
          <meshStandardMaterial 
            color={isCorrect ? "#27ae60" : "#e74c3c"} 
            opacity={0.8} 
            transparent
          />
        </mesh>
      </RigidBody>
        {/* Sensor to detect player entering - ahora más ancho y profundo */}
      <CuboidCollider 
        position={[0, 1.5, 0]} 
        args={[1.5, 1.5, 0.4]} /* Aumentada la anchura (1 a 1.5) y profundidad (0.2 a 0.4) */
        sensor
        onIntersectionEnter={handleSensorEnter}
      />
    </group>
  );
};

export default Door;
