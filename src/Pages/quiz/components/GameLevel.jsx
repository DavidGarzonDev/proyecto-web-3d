import { useEffect, useState, useMemo } from "react";
import { RigidBody, CuboidCollider } from "@react-three/rapier";
import Door from "./Door";
import Platform from "./Platform";

const GameLevel = ({ level, question, onCorrectAnswer, onGameOver }) => {
  // Calculate the distance of this level from the origin
  const levelDistance = level * -20; // Each level is 20 units apart
  
  // We need to create a platform and multiple doors for each option
  const options = question?.options || [];
  const correctOptionIndex = question?.correctAnswer || 0;
  
  // Generate platform and door positions
  const doorPositions = useMemo(() => {
    if (options.length === 0) return [];
    
    return options.map((_, index) => {
      // Position doors side by side with proper spacing
      const doorWidth = 3; // Increased door width for better spacing
      const spacing = 2; // Increased spacing between doors
      const totalWidth = options.length * doorWidth + (options.length - 1) * spacing;
      const startX = -(totalWidth / 2) + (doorWidth / 2);
      
      // Z position is fixed distance from level start
      const zPos = levelDistance - 10;
      
      return [startX + index * (doorWidth + spacing), 0, zPos];
    });
  }, [options.length, levelDistance]);
  return (
    <>
      {/* Entry platform for this level */}
      <Platform 
        position={[0, 0, levelDistance - 5]} 
        size={[30, 0.5, 10]} 
      />
      
      {/* Doors pathway platform - ampliada considerablemente */}
      <Platform 
        position={[0, 0, levelDistance - 10]} 
        size={[30, 0.5, 2]} 
      />
        {/* Doors for each option */}
      {options.map((option, index) => (
        <Door 
          key={`door-${level}-${index}`}
          position={doorPositions[index]} 
          doorText={option}
          isCorrect={index === correctOptionIndex}
          onCorrectAnswer={onCorrectAnswer}
          onGameOver={onGameOver}
        />
      ))}
      
      {/* Safe platform behind correct door - más grande y largo hacia adelante para asegurar aterrizajes */}
      {doorPositions[correctOptionIndex] && (
        <Platform 
          position={[doorPositions[correctOptionIndex][0], 0, levelDistance - 15]} 
          size={[6, 0.5, 6]} 
        />
      )}
      
      {/* Plataforma de conexión entre la correcta y la siguiente - asegura la transición */}
      {doorPositions[correctOptionIndex] && (
        <Platform 
          position={[doorPositions[correctOptionIndex][0] / 2, 0, levelDistance - 17.5]} 
          size={[Math.max(6, Math.abs(doorPositions[correctOptionIndex][0]) + 2), 0.5, 3]} 
        />
      )}
      
      {/* Connection platform to next level */}
      <Platform 
        position={[0, 0, levelDistance - 20]} 
        size={[18, 0.5, 5]}
      />
      
      {/* Walls to prevent falling off sides */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[-10, 1, levelDistance - 10]} castShadow>
          <boxGeometry args={[0.5, 2, 20]} />
          <meshStandardMaterial color="#7f8c8d" />
        </mesh>
        <mesh position={[10, 1, levelDistance - 10]} castShadow>
          <boxGeometry args={[0.5, 2, 20]} />
          <meshStandardMaterial color="#7f8c8d" />
        </mesh>
      </RigidBody>
    </>
  );
};

export default GameLevel;
