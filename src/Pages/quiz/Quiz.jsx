/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sky, PerspectiveCamera } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { useState, useRef } from "react";
import { Suspense } from "react";
import GameLevel from "./components/GameLevel";
import Player from "./components/Player";
import GameUI from "./components/GameUI";
import QuestionWall from "./components/QuestionWall";
import useAuthStore from "../../stores/use-auth-store";
import { saveUserToFirestore } from "../../Layout/Header/saveUser";
import "./Quiz.css";

const Quiz = () => {
  const { userLooged } = useAuthStore();
  console.log("Usuario logueado:", userLooged);
  const playerRef = useRef();
  const cameraRef = useRef();

  const [gameState, setGameState] = useState({
    isPlaying: false,
    level: 0,
    score: 0,
    gameOver: false,
    currentQuestion: null,
    deathMessage: "",
    isPaused: false,
    showQuestion: false,
  });

  const questions = [
    {
      question:
        "¿Cuál de estos hábitos\n NO está relacionado \ncon el cáncer de pulmón?",
      options: ["Fumar", "Beber agua", "Exposición al asbesto"],
      correctAnswer: 1,
    },
    {
      question: "¿Cuál es un síntoma\ncomún del asma?",
      options: ["Dificultad para respirar", "Dolor de cabeza", "Mareos"],
      correctAnswer: 0,
    },
    {
      question: "¿Qué órgano se ve afectado\n por la fibrosis pulmonar?",
      options: ["Corazón", "Pulmones", "Hígado"],
      correctAnswer: 1,
    },
    {
      question: "¿Qué ayuda a prevenir \nenfermedades respiratorias?",
      options: [
        "Fumar ocasionalmente",
        "Ejercicio regular",
        "Ambientes con polvo",
      ],
      correctAnswer: 1,
    },
    {
      question:
        "¿Qué condición causa\n presión alta en las\narterias pulmonares?",
      options: ["Asma", "Fibrosis", "Hipertensión pulmonar"],
      correctAnswer: 2,
    },
  ];

  const handleStartGame = () => {
    // Start with the game paused and question showing
    setGameState({
      ...gameState,
      isPlaying: true,
      gameOver: false,
      level: 0,
      score: 0,
      currentQuestion: questions[0],
      isPaused: true,
      showQuestion: true,
    });
  };

  // Handle when the question wall animation completes
  const handleQuestionWallComplete = () => {
    setGameState({
      ...gameState,
      isPaused: false,
      showQuestion: false,
    });
  };

  const handleCorrectAnswer = () => {
    const nextLevel = gameState.level + 1;
    const updatedScore = gameState.score + 100;

    // Si es el último nivel, guardar score y terminar juego
    if (nextLevel >= questions.length) {
      // Guarda el puntaje antes de cambiar el estado
      if (userLooged) {
        console.log("Guardando usuario:", userLooged);
        console.log("Puntaje final:", updatedScore);
        saveUserToFirestore(userLooged, updatedScore);
      }

      setGameState((prev) => ({
        ...prev,
        score: updatedScore,
        gameOver: true,
        isPlaying: false,
        deathMessage:
          "¡Felicidades! Has completado todas las preguntas correctamente 🏆",
      }));
    } else {
      // Sube el puntaje y pasa al siguiente nivel
      setGameState((prev) => ({
        ...prev,
        score: updatedScore,
      }));

      setTimeout(() => {
        setGameState((prev) => ({
          ...prev,
          level: nextLevel,
          currentQuestion: questions[nextLevel],
          isPaused: true,
          showQuestion: true,
        }));
      }, 2000);
    }
  };

  const handleGameOver = (message = "¡Has caído al vacío!") => {
    setGameState({
      ...gameState,
      gameOver: true,
      isPlaying: false,
      deathMessage: message,
    });
  };

  // Calculate the player's current position in the level
  const playerPosition = gameState.level * -20 + 3;

  return (
    <div className="quiz-container">
      <Canvas shadows>
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
                isPaused={gameState.isPaused}
              />
              <GameLevel
                level={gameState.level}
                question={gameState.currentQuestion}
                onCorrectAnswer={handleCorrectAnswer}
                onGameOver={handleGameOver}
              />

              {/* Question Wall - appears at the correct level position */}
              {gameState.showQuestion && (
                <QuestionWall
                  text={gameState.currentQuestion?.question || ""}
                  position={[0, 0.7, playerPosition - 10]}
                  visible={gameState.showQuestion}
                  onAnimationComplete={handleQuestionWallComplete}
                />
              )}
            </Physics>
          )}

          {!gameState.isPlaying && (
            <PerspectiveCamera makeDefault position={[0, 5, 10]} fov={50} />
          )}

          <OrbitControls
            enabled={!gameState.isPlaying}
            enablePan={false}
            enableZoom={false}
            maxPolarAngle={Math.PI / 2.5}
          />
        </Suspense>
      </Canvas>

      <GameUI gameState={gameState} onStartGame={handleStartGame} />
    </div>
  );
};

export default Quiz;
