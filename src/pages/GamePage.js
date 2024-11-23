import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ButtonGrid from '../components/ButtonGrid';
import Timer from '../components/Timer';
import '../css/GamePage.css';

function GamePage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { difficulty = 'fácil' } = location.state || {};

  const [score, setScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [timeLeft, setTimeLeft] = useState(null);

  // Configuração baseada na dificuldade
  const difficultyConfig = {
    fácil: { initialTime: 15, scoreBase: 100 },
    médio: { initialTime: 12, scoreBase: 200 },
    difícil: { initialTime: 8, scoreBase: 300 },
  };

  const { initialTime, scoreBase } = difficultyConfig[difficulty];

  // Reset dos estados ao reiniciar
  const handleRestart = () => {
    setScore(0);
    setIsGameOver(false);
    setTimeLeft(initialTime);
  };

  // Calcular pontuação final
  const calculateFinalScore = (remainingTime) => {
    const difficultyMultiplier = difficulty === 'fácil' ? 1 : difficulty === 'médio' ? 1.5 : 2;
    const rawScore = score * difficultyMultiplier + remainingTime * 0.5;
    return parseFloat(rawScore.toFixed(2));
  };

  const handleGameComplete = () => {
    setScore((prevScore) => calculateFinalScore(timeLeft));
    setIsGameOver(true);
  };

  const handleGoHome = () => {
    navigate('/');
  };

  useEffect(() => {
    if (timeLeft === 0) {
      handleGameComplete();
    }
  }, [timeLeft]);

  return (
    <div className="game-container">
      <div className="game-box">
        <div className="game-header">
          {!isGameOver && (
            <>
              <h1 className="game-title">Jogo em Andamento</h1>
              <p className="difficulty-indicator">Dificuldade: {difficulty}</p>
              <Timer
                initialTime={initialTime}
                onTimeUp={() => setTimeLeft(0)}
                setTimeLeft={setTimeLeft}
              />
            </>
          )}
  
          {isGameOver && (
            <>
              <div className="endgame-message">
                <h2 className="endgame-title">Jogo Finalizado!</h2>
                <p className="endgame-score">Pontuação Final: {score}</p>
              </div>
              <div className="endgame-button-container">
                <button onClick={handleRestart} className="endgame-button">Jogar Novamente</button>
                <button onClick={handleGoHome} className="endgame-button">Voltar para o Início</button>
              </div>
            </>
          )}
        </div>
        {!isGameOver && (
          <div className="game-grid">
            <ButtonGrid
              onButtonClick={() => setScore((prev) => prev + scoreBase)}
              onComplete={handleGameComplete}
              difficulty={difficulty}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default GamePage;
