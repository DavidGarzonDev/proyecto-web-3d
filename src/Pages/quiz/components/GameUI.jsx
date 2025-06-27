/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

const GameUI = ({ gameState, onStartGame, podium }) => {
  const { isPlaying, gameOver, score, deathMessage, isPaused } = gameState;

  const [pop, setPop] = useState(false);
  const [prevScore, setPrevScore] = useState(score);

  useEffect(() => {
    if (score !== prevScore) {
      setPop(true);
      setTimeout(() => setPop(false), 300);
      setPrevScore(score);
    }
  }, [score, prevScore]);

  const showHUD = isPlaying && !gameOver;
  const showEndScreen = gameOver;

  return (
    <>
      {showHUD && (
        <>
          <div className={`quiz-ui ${pop ? "score-pop" : ""}`}>
            <h3>Puntuación: {score}</h3>
          </div>

          {isPaused && (
            <>
              <div className="quiz-paused">
                <p>Observa la pregunta...</p>
                <div className="loading-bar">
                  <div className="loading-progress"></div>
                </div>
              </div>

              <div className="controls-help">
                <p>
                  Usa <strong>A</strong> y <strong>D</strong> para moverte
                </p>
                <p>Dirígete a la puerta correcta</p>
              </div>
            </>
          )}
        </>
      )}

      {!isPlaying && (
        <div className="quiz-controls">
          {showEndScreen ? (
            <>
              <h2>{score >= 500 ? "¡Victoria!" : "¡Juego Terminado!"}</h2>
              {deathMessage && (
                <p
                  className={score >= 500 ? "victory-message" : "death-message"}
                >
                  {score >= 500 ? "🎉 " : "❌ "}
                  {deathMessage}
                </p>
              )}
              <p>
                Tu puntuación final: <strong>{score}</strong>
              </p>

              {podium && podium.length > 0 && (
                <div className="quiz-podium">
                  <h3>🏆 Podio de Mejores Puntajes</h3>
                  <ol>
                    {podium.map((user) => (
                      <li key={user.uid}>
                        {user.name} - {user.score} pts
                      </li>
                    ))}
                  </ol>
                </div>
              )}

              <button onClick={onStartGame}>🔁 Jugar de nuevo</button>
            </>
          ) : (
            <>
              <h2>Quiz de Pulmones</h2>
              <p>Responde bien y avanza...</p>
              <p>Cuidado: una respuesta incorrecta te hace caer al vacío</p>
              <button onClick={onStartGame}>Comenzar</button>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default GameUI;
