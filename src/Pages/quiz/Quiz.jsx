import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sky, PerspectiveCamera } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { useState, useEffect, useRef } from "react";
import { Suspense } from "react";
import GameLevel from "./components/GameLevel";
import Player from "./components/Player";
import GameUI from "./components/GameUI";
import "./Quiz.css";

const Quiz = () => {
  const playerRef = useRef();
  const cameraRef = useRef();
  
  const [gameState, setGameState] = useState({
    isPlaying: false,
    level: 0,
    score: 0,
    gameOver: false,
    currentQuestion: null,
    deathMessage: ""
  });

  const questions = [
    {
      question: "¿Cuál de estos hábitos NO está relacionado con el cáncer de pulmón?",
      options: ["Fumar", "Beber agua", "Exposición al asbesto"],
      correctAnswer: 1
    },
    {
      question: "¿Cuál es un síntoma común del asma?",
      options: ["Dificultad para respirar", "Dolor de cabeza", "Mareos"],
      correctAnswer: 0
    },
    {
      question: "¿Qué órgano se ve afectado por la fibrosis pulmonar?",
      options: ["Corazón", "Pulmones", "Hígado"],
      correctAnswer: 1
    },
    {
      question: "¿Qué ayuda a prevenir enfermedades respiratorias?",
      options: ["Fumar ocasionalmente", "Ejercicio regular", "Ambientes con polvo"],
      correctAnswer: 1
    },
    {
      question: "¿Qué condición causa presión alta en las arterias pulmonares?",
      options: ["Asma", "Fibrosis", "Hipertensión pulmonar"],
      correctAnswer: 2
    },
  ];

  const handleStartGame = () => {
    setGameState({
      ...gameState,
      isPlaying: true,
      gameOver: false,
      level: 0,
      score: 0,
      currentQuestion: questions[0]
    });
  };
  const handleCorrectAnswer = () => {
    const nextLevel = gameState.level + 1;
    
    // Primero aumentar la puntuación para dar feedback inmediato
    setGameState(prev => ({
      ...prev,
      score: prev.score + 100,
    }));
      // Luego esperar un tiempo antes de avanzar al siguiente nivel
    setTimeout(() => {
      if (nextLevel >= questions.length) {
        // Player won the game
        setGameState(prev => ({
          ...prev,
          gameOver: true,
          isPlaying: false,
          deathMessage: "¡Felicidades! Has completado todas las preguntas correctamente 🏆",
        }));
      } else {
        // Move to next level
        setGameState(prev => ({
          ...prev,
          level: nextLevel,
          currentQuestion: questions[nextLevel]
        }));
      }
    }, 2000); // Esperar 2 segundos para dar tiempo al jugador a pasar a la siguiente plataforma
  };
  const handleGameOver = (message = "¡Has caído al vacío!") => {
    setGameState({
      ...gameState,
      gameOver: true,
      isPlaying: false,
      deathMessage: message
    });
  };

  return (
    <div className="quiz-container">      <Canvas
        shadows
      >
        <Suspense fallback={null}>
          <Sky sunPosition={[100, 20, 100]} />
          <ambientLight intensity={0.3} />
          <directionalLight 
            position={[10, 10, 5]} 
            intensity={1} 
            castShadow 
            shadow-mapSize-width={1024} 
            shadow-mapSize-height={1024}
          />
          
          {gameState.isPlaying && (
            <Physics gravity={[0, -9.8, 0]}>
              <PerspectiveCamera 
                ref={cameraRef}
                makeDefault
                position={[0, 3, 5]} 
                fov={60} 
              />
              <Player 
                ref={playerRef}
                position={[0, 1, 0]} 
                onGameOver={handleGameOver} 
                cameraRef={cameraRef}
              />
              <GameLevel 
                level={gameState.level} 
                question={gameState.currentQuestion}
                onCorrectAnswer={handleCorrectAnswer}
                onGameOver={handleGameOver}
              />
            </Physics>
          )}
          
          {!gameState.isPlaying && (
            <PerspectiveCamera 
              makeDefault
              position={[0, 5, 10]} 
              fov={50} 
            />
          )}
          
          <OrbitControls 
            enabled={!gameState.isPlaying}
            enablePan={false} 
            enableZoom={false}
            maxPolarAngle={Math.PI / 2.5}
          />
        </Suspense>
      </Canvas>
      
      <GameUI 
        gameState={gameState} 
        onStartGame={handleStartGame} 
      />
    </div>
  );
};

export default Quiz;
