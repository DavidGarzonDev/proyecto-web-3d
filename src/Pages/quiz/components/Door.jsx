/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { useState, useRef, useEffect, useMemo } from "react";
import { Text, useTexture } from "@react-three/drei";
import { RepeatWrapping } from "three";
import { RigidBody, CuboidCollider } from "@react-three/rapier";
import { useFrame } from "@react-three/fiber";

const Door = ({ position, doorText, isCorrect, onCorrectAnswer, onGameOver }) => {
  const [playerEntered, setPlayerEntered] = useState(false);
  const [floorCollapsed, setFloorCollapsed] = useState(false);
  const [doorOpen, setDoorOpen] = useState(false);

  const floorRef = useRef();
  const leftDoorRef = useRef();
  const rightDoorRef = useRef();

  // 🧱 Textura de pared
  const WALL_PATH = useMemo(() => "/textures/door/", []);
  const wallTexture = useTexture({
    map: WALL_PATH + "door-color.png",
    aoMap: WALL_PATH + "door-ao.png",
    roughnessMap: WALL_PATH + "door-rough.png",
    normalMap: WALL_PATH + "door-normal.png",
  });

  Object.values(wallTexture).forEach((tex) => {
    tex.wrapS = RepeatWrapping;
    tex.wrapT = RepeatWrapping;
    
    tex.anisotropy = 16;
  });

  // Detectar entrada del jugador
  const handleSensorEnter = () => {
    if (playerEntered) return;

    setDoorOpen(true);
    setPlayerEntered(true);

    if (isCorrect) {
      onCorrectAnswer();
    } else {
      setTimeout(() => {
        setFloorCollapsed(true);
      }, 300);

      setTimeout(() => {
        onGameOver("¡Respuesta incorrecta! Has caído.");
      }, 5000);
    }
  };

  // Colapsar el piso
  useEffect(() => {
    if (floorCollapsed && floorRef.current) {
      floorRef.current.setTranslation({ x: position[0], y: -20, z: position[2] - 2 });
    }
  }, [floorCollapsed, position]);

  // Abrir las puertas
  useFrame((_, delta) => {
    if (doorOpen && leftDoorRef.current && rightDoorRef.current) {
      if (leftDoorRef.current.rotation.y > -Math.PI / 1.5) {
        leftDoorRef.current.rotation.y -= delta * 3;
      }
      if (rightDoorRef.current.rotation.y < Math.PI / 1.5) {
        rightDoorRef.current.rotation.y += delta * 3;
      }
    }
  });

  return (
    <group position={position}>
      {/* Marco de la puerta */}
      <RigidBody type="fixed" colliders="cuboid">
        {/* Lado izquierdo */}
        <mesh position={[-1.1, 1.5, 0]} castShadow>
          <boxGeometry args={[0.2, 3, 0.5]} />
          <meshStandardMaterial {...wallTexture} />
        </mesh>

        {/* Lado derecho */}
        <mesh position={[1.1, 1.5, 0]} castShadow>
          <boxGeometry args={[0.2, 3, 0.5]} />
          <meshStandardMaterial {...wallTexture} />
        </mesh>

        {/* Parte superior */}
        <mesh position={[0, 3, 0]} castShadow>
          <boxGeometry args={[2.4, 0.2, 0.5]} />
          <meshStandardMaterial {...wallTexture} />
        </mesh>

        {/* Texto de la puerta */}
        <group position={[0, 3.5, 0.5]}>
          <Text color="white" fontSize={0.3} maxWidth={2} textAlign="center">
            {doorText}
          </Text>
        </group>
      </RigidBody>

      {/* Puerta izquierda */}
      <group ref={leftDoorRef} position={[-1, 1.5, 0]}>
        <mesh castShadow position={[0.5, 0, 0]}>
          <boxGeometry args={[1, 2.8, 0.2]} />
          <meshStandardMaterial {...wallTexture} />
        </mesh>
        {/* Manija */}
        <mesh castShadow position={[0.85, 0, 0.15]}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial {...wallTexture} />
        </mesh>
        <mesh castShadow position={[0.85, 0, 0.05]}>
          <cylinderGeometry args={[0.03, 0.03, 0.15, 8]} rotation={[Math.PI / 2, 0, 0]} />
          <meshStandardMaterial {...wallTexture} />
        </mesh>
      </group>

      {/* Puerta derecha */}
      <group ref={rightDoorRef} position={[1, 1.5, 0]}>
        <mesh castShadow position={[-0.5, 0, 0]}>
          <boxGeometry args={[1, 2.8, 0.2]} />
          <meshStandardMaterial {...wallTexture} />
        </mesh>
        {/* Manija */}
        <mesh castShadow position={[-0.85, 0, 0.15]}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial {...wallTexture} />
        </mesh>
        <mesh castShadow position={[-0.85, 0, 0.05]}>
          <cylinderGeometry args={[0.03, 0.03, 0.15, 8]} rotation={[Math.PI / 2, 0, 0]} />
          <meshStandardMaterial {...wallTexture} />
        </mesh>
      </group>

      {/* Piso que colapsa */}
      <RigidBody ref={floorRef} type="fixed" position={[0, 0, -2]}>
        <mesh receiveShadow>
          <boxGeometry args={[2, 0.2, 4]} />
          <meshStandardMaterial {...wallTexture} />
        </mesh>
      </RigidBody>

      {/* Sensor de entrada */}
      <CuboidCollider
        position={[0, 1.5, -1]}
        args={[1.5, 1.5, 2]}
        sensor
        onIntersectionEnter={handleSensorEnter}
      />
    </group>
  );
};

export default Door;