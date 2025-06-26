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

  // Calcular las dimensiones del muro basadas en la cantidad de puertas
  const calculateWallWidth = useMemo(() => {
    if (doorPositions.length === 0) return 15; // Ancho por defecto
    
    // Encontrar las posiciones X más extremas
    const xPositions = doorPositions.map(pos => pos[0]);
    const leftmostX = Math.min(...xPositions);
    const rightmostX = Math.max(...xPositions);
    
    // Añadir un margen extra a cada lado
    return Math.max(rightmostX - leftmostX + 10, 15);
  }, [doorPositions]);
  
  return (
    <>
      {/* Entry platform for this level */}
      <Platform 
        position={[0, 0, levelDistance - 5]} 
        size={[30, 0.5, 15]} 
      />
      
      {/* Doors pathway platform - ampliada considerablemente */}
      <Platform 
        position={[0, 0, levelDistance - 10]} 
        size={[30, 0.5, 2]} 
      />

      {/* Muro superior - por encima de las puertas */}
      <RigidBody type="fixed" position={[0, 4.4, levelDistance - 10]}>
        <mesh castShadow receiveShadow>
          <boxGeometry args={[calculateWallWidth-3, 3, 0.4]} />
          <meshStandardMaterial color="#7f8c8d" />
        </mesh>
      </RigidBody>
      
      {/* Muros laterales - a los lados de las puertas */}
      {doorPositions.length > 0 && (
        <>
          {/* Muro izquierdo */}
          <RigidBody 
            type="fixed" 
            position={[doorPositions[0][0] - 3, 1.5, levelDistance - 10]}
          >
            <mesh castShadow receiveShadow>
              <boxGeometry args={[3, 3, 0.5]} />
              <meshStandardMaterial color="#7f8c8d" />
            </mesh>
          </RigidBody>
          
          {/* Muro derecho */}
          <RigidBody 
            type="fixed" 
            position={[doorPositions[doorPositions.length - 1][0] + 3, 1.5, levelDistance - 10]}
          >
            <mesh castShadow receiveShadow>
              <boxGeometry args={[3, 3, 0.5]} />
              <meshStandardMaterial color="#7f8c8d" />
            </mesh>
          </RigidBody>
          
          {/* Muros entre las puertas (si hay más de una) */}
          {doorPositions.length > 1 && doorPositions.slice(0, -1).map((pos, index) => (
            <RigidBody
              key={`wall-between-${level}-${index}`}
              type="fixed"
              position={[(pos[0] + doorPositions[index + 1][0]) / 2, 3, levelDistance - 10]}
            >
              <mesh castShadow receiveShadow>
                <boxGeometry args={[(doorPositions[index + 1][0] - pos[0]) - 2, 1, 0.4]} />
                <meshStandardMaterial color="#7f8c8d" />
              </mesh>
            </RigidBody>
          ))}
        </>
      )}
      
      {/* Muro trasero que oculta lo que hay detrás de las puertas */}
      {doorPositions.length > 0 ? (
        // Crear secciones de muro entre las posiciones de las puertas
        [
          // Sección izquierda del muro (desde el extremo izquierdo hasta la primera puerta)
          <RigidBody 
            key={`wall-left-section-${level}`}
            type="fixed"
            position={[-15 + ((doorPositions[0][0] - 1.5) + 15) / 2, 1.5, levelDistance - 12]}
          >
            <mesh castShadow receiveShadow>
              <boxGeometry args={[(doorPositions[0][0] - 1.5) + 15, 3, 0.5]} />
              <meshStandardMaterial color="#7f8c8d" />
            </mesh>
          </RigidBody>,
          
          // Secciones intermedias entre puertas
          ...doorPositions.slice(0, -1).map((pos, index) => (
            <RigidBody
              key={`wall-section-${level}-${index}`}
              type="fixed"
              position={[(pos[0] + 1.5 + (doorPositions[index + 1][0] - 1.5)) / 2, 1.5, levelDistance - 10.4]}
            >
              <mesh castShadow receiveShadow>
                <boxGeometry args={[(doorPositions[index + 1][0] ) - (pos[0] + 1.5), 3, 0.5]} />
                <meshStandardMaterial color="#7f8c8d" />
              </mesh>
            </RigidBody>
          )),
          
          // Sección derecha del muro (desde la última puerta hasta el extremo derecho)
          <RigidBody
            key={`wall-right-section-${level}`}
            type="fixed"
            position={[doorPositions[doorPositions.length - 1][0] + 1.5 + (15 - (doorPositions[doorPositions.length - 1][0] + 1.5)) / 2, 1.5, levelDistance - 12]} 
          >
            <mesh castShadow receiveShadow>
              <boxGeometry args={[15 - (doorPositions[doorPositions.length - 1][0] + 1.5), 3, 0.5]} />
              <meshStandardMaterial color="#7f8c8d" />
            </mesh>
          </RigidBody>
        ]
      ) : (
        // Si no hay puertas, mostrar el muro completo
        <RigidBody type="fixed" position={[0, 1.5, levelDistance - 12]}>
          <mesh castShadow receiveShadow>
            <boxGeometry args={[30, 3, 0.5]} />
            <meshStandardMaterial color="#7f8c8d" />
          </mesh>
        </RigidBody>
      )}

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
