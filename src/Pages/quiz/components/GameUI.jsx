import React from "react";

const GameUI = ({ gameState, onStartGame }) => {
  const { isPlaying, gameOver, score, currentQuestion, deathMessage } = gameState;

  return (
    <>
      {isPlaying && !gameOver && (
        <>
          <div className="quiz-ui">
            <h3>Puntuación: {score}</h3>
          </div>
          
          <div className="quiz-question">
            <h3>{currentQuestion?.question}</h3>
          </div>
            <div className="controls-help">
            <p>Usa A y D para moverte de lado a lado</p>
            <p>Presiona ESPACIO o W para saltar</p>
            <p>Elige la puerta con la respuesta correcta</p>
          </div>
        </>
      )}

      {!isPlaying && (
        <div className="quiz-controls">          {gameOver ? (
            <>
              <h2>{score >= 500 ? "¡Victoria!" : "¡Juego terminado!"}</h2>
              {deathMessage && (
                <p className={score >= 500 ? "victory-message" : "death-message"}>
                  {deathMessage}
                </p>
              )}
              <p>Tu puntuación final: {score}</p>
              <button onClick={onStartGame}>Jugar de nuevo</button>
            </>
          ) : (
            <>
              <h2>Quiz de Pulmones</h2>
              <p>Elige la puerta con la respuesta correcta</p>
              <p>Cuidado con las respuestas incorrectas, ¡podrías caer al vacío!</p>
              <button onClick={onStartGame}>Comenzar</button>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default GameUI;
