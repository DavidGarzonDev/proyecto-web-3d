/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useMemo } from "react";
import { RigidBody } from "@react-three/rapier";
import { useTexture } from "@react-three/drei";
import { RepeatWrapping } from "three";
import Door from "./Door";
import Platform from "./Platform";
import TexturedWall from "./TextureWall"; // componente para muros con textura dinámica

const GameLevel = ({ level, question, onCorrectAnswer, onGameOver }) => {
  const levelDistance = level * -20;
  const options = question?.options || [];
  const correctOptionIndex = question?.correctAnswer || 0;

  const doorPositions = useMemo(() => {
    if (options.length === 0) return [];

    const doorWidth = 3;
    const spacing = 2;
    const totalWidth = options.length * doorWidth + (options.length - 1) * spacing;
    const startX = -(totalWidth / 2) + (doorWidth / 2);
    const zPos = levelDistance - 10;

    return options.map((_, index) => [
      startX + index * (doorWidth + spacing),
      0,
      zPos,
    ]);
  }, [options.length, levelDistance]);

  const calculateWallWidth = useMemo(() => {
    if (doorPositions.length === 0) return 15;
    const xPositions = doorPositions.map(pos => pos[0]);
    const leftmostX = Math.min(...xPositions);
    const rightmostX = Math.max(...xPositions);
    return Math.max(rightmostX - leftmostX + 10, 15);
  }, [doorPositions]);

  const wallTexture = useTexture({
    map: "/textures/wall/wall-color.png",
    aoMap: "/textures/wall/wall-ao.png",
    roughnessMap: "/textures/wall/wall-rough.png",
    normalMap: "/textures/wall/wall-normal.png",
  });

  Object.values(wallTexture).forEach((tex) => {
    tex.wrapS = RepeatWrapping;
    tex.wrapT = RepeatWrapping;
    tex.repeat.set(2, 2);
    tex.anisotropy = 16;
  });

  return (
    <>
      {/* Plataformas iniciales */}
      <Platform position={[0, 0.2, levelDistance - 5]} size={[30, 0.5, 17]} />
      <Platform position={[0, 0, levelDistance - 10]} size={[30, 0.5, 2]} />

      {/* Muro superior más alto y mejor alineado */}
      <TexturedWall
        position={[-5, 5, levelDistance - 10.4]}
        size={[calculateWallWidth - 11, 4, 0.7]}
      />
      <TexturedWall
        position={[0, 5, levelDistance - 10.4]}
        size={[calculateWallWidth - 11, 4, 0.7]}
      />
      <TexturedWall
        position={[5, 5, levelDistance - 10.4]}
        size={[calculateWallWidth - 11, 4, 0.7]}
      />

      {/* Muros laterales con misma altura */}
      {doorPositions.length > 0 && (
        <>
          <TexturedWall
            position={[doorPositions[0][0] - 3, 2.5, levelDistance - 10]}
            size={[3, 5, 0.5]}
          />
          <TexturedWall
            position={[doorPositions[doorPositions.length - 1][0] + 3, 2.5, levelDistance - 10]}
            size={[3, 5, 0.5]}
          />

          
        </>
      )}

      {/* Muro trasero que cubre entre puertas y extremos */}
      {doorPositions.length > 0 ? (
        [
          <RigidBody
            key={`wall-left-section-${level}`}
            type="fixed"
            position={[
              -15 + ((doorPositions[0][0] - 1.5) + 15) / 2,
              1.5,
              levelDistance - 12,
            ]}
          >
            <mesh castShadow receiveShadow>
              <boxGeometry
                args={[(doorPositions[0][0] - 1.5) + 15, 3, 0.5]}
              />
              <meshStandardMaterial {...wallTexture} />
            </mesh>
          </RigidBody>,

          ...doorPositions.slice(0, -1).map((pos, index) => (
            <RigidBody
              key={`wall-section-${level}-${index}`}
              type="fixed"
              position={[
                (pos[0] + 1.5 + (doorPositions[index + 1][0] - 1.5)) / 2,
                1.5,
                levelDistance - 10.4,
              ]}
            >
              <mesh castShadow receiveShadow>
                <boxGeometry
                  args={[
                    (doorPositions[index + 1][0]) - (pos[0] + 1.5),
                    3,
                    0.5,
                  ]}
                />
                <meshStandardMaterial {...wallTexture} />
              </mesh>
            </RigidBody>
          )),

          <RigidBody
            key={`wall-right-section-${level}`}
            type="fixed"
            position={[
              doorPositions[doorPositions.length - 1][0] +
                1.5 +
                (15 - (doorPositions[doorPositions.length - 1][0] + 1.5)) / 2,
              1.5,
              levelDistance - 12,
            ]}
          >
            <mesh castShadow receiveShadow>
              <boxGeometry
                args={[
                  15 - (doorPositions[doorPositions.length - 1][0] + 1.5),
                  3,
                  0.5,
                ]}
              />
              <meshStandardMaterial {...wallTexture} />
            </mesh>
          </RigidBody>,
        ]
      ) : (
        <RigidBody type="fixed" position={[0, 1.5, levelDistance - 12]}>
          <mesh castShadow receiveShadow>
            <boxGeometry args={[30, 3, 0.5]} />
            <meshStandardMaterial {...wallTexture} />
          </mesh>
        </RigidBody>
      )}

      {/* Puertas del nivel */}
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

      {/* Plataformas detrás de la puerta correcta */}
      {doorPositions[correctOptionIndex] && (
        <>
          <Platform
            position={[doorPositions[correctOptionIndex][0], 0, levelDistance - 15]}
            size={[6, 0.7, 6]}
          />
          <Platform
            position={[
              doorPositions[correctOptionIndex][0] / 2,
              0,
              levelDistance - 17.5,
            ]}
            size={[
              Math.max(6, Math.abs(doorPositions[correctOptionIndex][0]) + 2),
              0.5,
              3,
            ]}
          />
        </>
      )}

      {/* Plataforma final */}
      <Platform position={[0, 0, levelDistance - 20]} size={[18, 0.4, 5]} />

      {/* Muros de protección largos laterales */}
      <TexturedWall
        position={[-10, 2.5, levelDistance - 10]}
        size={[1, 10, 15]}
      />
      <TexturedWall
        position={[10, 2.5, levelDistance - 10]}
        size={[1, 10, 15]}
      />
    </>
  );
};

export default GameLevel;