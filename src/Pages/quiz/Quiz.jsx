/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sky, PerspectiveCamera } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { useState, useRef, useEffect } from "react";
import { Suspense } from "react";
import GameLevel from "./components/GameLevel";
import Player from "./components/Player";
import GameUI from "./components/GameUI";
import QuestionWall from "./components/QuestionWall";
import "./Quiz.css";
import { saveUserToFirestore } from "../../Layout/Header/saveUser";
import useAuthStore from "../../stores/use-auth-store";
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import { db } from "../../../firebase.config";

const Quiz = () => {
  const playerRef = useRef();
  const cameraRef = useRef();
  const { userLooged } = useAuthStore();

  const [podium, setPodium] = useState([]);

  const fetchPodium = async () => {
    try {
      console.log("🔍 Ejecutando fetchPodium...");
      const q = query(
        collection(db, "users"),
        orderBy("quizScore", "desc"),
        limit(3)
      );
      const querySnapshot = await getDocs(q);
      const topUsers = querySnapshot.docs.map((doc) => ({
        name: doc.data().displayName,
        score: doc.data().quizScore || 0,
        uid: doc.id,
      }));
      console.log("🏆 Podio obtenido:", topUsers);
      setPodium(topUsers);
    } catch (error) {
      console.error("❌ Error obteniendo el podio:", error);
    }
  };

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

    setGameState((prev) => ({
      ...prev,
      score: updatedScore,
    }));

    setTimeout(() => {
      if (nextLevel >= questions.length) {
        setGameState((prev) => ({
          ...prev,
          gameOver: true,
          isPlaying: false,
          deathMessage: "¡Felicidades! Has completado todas las preguntas 🏆",
        }));
      } else {
        setGameState((prev) => ({
          ...prev,
          level: nextLevel,
          currentQuestion: questions[nextLevel],
          isPaused: true,
          showQuestion: true,
        }));
      }

      if (userLooged) {
        saveUserToFirestore(userLooged, updatedScore);
      }
    }, 3000);
  };

  const handleGameOver = (message = "¡Has caído al vacío!") => {
    console.log("💥 handleGameOver llamado:", message);
    setGameState({
      ...gameState,
      gameOver: true,
      isPlaying: false,
      deathMessage: message,
    });
  };

  const playerPosition = gameState.level * -20 + 3;

  useEffect(() => {
    if (gameState.gameOver) {
      console.log("🎯 gameOver es true. Obteniendo podio...");

      fetchPodium();
    }
  }, [gameState.gameOver]);

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

      {gameState.gameOver && (
        <div className="quiz-end-screen">
          <h2>🎮 ¡Juego Terminado!</h2>

          <p className="quiz-message">
            {gameState.deathMessage.includes("Felicidades") ? (
              <span className="win-text">{gameState.deathMessage}</span>
            ) : (
              <span className="lose-text">❌ {gameState.deathMessage}</span>
            )}
          </p>

          <p className="quiz-score">
            Tu puntuación final: <strong>{gameState.score}</strong>
          </p>

          {podium.length > 0 && (
            <div className="quiz-podium">
              <h3>🏆 Podio de Mejores Puntajes</h3>
              <ol>
                {podium.map((user, index) => (
                  <li key={user.uid}>
                    #{index + 1} - {user.name} - {user.score} pts
                  </li>
                ))}
              </ol>
            </div>
          )}

          <button className="quiz-restart-btn" onClick={handleStartGame}>
            🔁 Jugar de nuevo
          </button>
        </div>
      )}

      <GameUI
        gameState={gameState}
        onStartGame={handleStartGame}
        podium={podium}
      />
    </div>
  );
};

export default Quiz;
