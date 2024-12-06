// src/pages/GamePage.js

import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ButtonGrid from '../components/ButtonGrid';
import Timer from '../components/Timer';
import '../css/GamePage.css';

/**
 * Página do jogo.
 * Exibe o desafio baseado no nível de dificuldade selecionado e controla as mecânicas do jogo.
 */
function GamePage() {
  const location = useLocation(); // Hook para acessar o estado passado pela navegação.
  const navigate = useNavigate(); // Hook para redirecionamento de páginas.

  // Recupera o nível de dificuldade ou define "fácil" como padrão.
  const { difficulty = 'fácil' } = location.state || {};

  // Configurações específicas para cada nível de dificuldade.
  const difficultyConfig = {
    fácil: { initialTime: 12, scoreBase: 50 },
    médio: { initialTime: 10, scoreBase: 50 },
    difícil: { initialTime: 8, scoreBase: 50 },
  };

  const { initialTime, scoreBase } = difficultyConfig[difficulty];

  // Estados do jogo
  const [score, setScore] = useState(0); // Pontuação acumulada.
  const [isGameOver, setIsGameOver] = useState(false); // Status do jogo.
  const [timeLeft, setTimeLeft] = useState(initialTime); // Tempo restante para o jogo.

  /**
   * Reinicia o jogo, restaurando os estados iniciais.
   */
  const handleRestart = () => {
    setScore(0);
    setIsGameOver(false);
    setTimeLeft(initialTime);
  };

  /**
   * Calcula a pontuação final considerando tempo restante e dificuldade.
   *
   * @param {number} remainingTime - Tempo restante no final do jogo.
   * @returns {number} Pontuação final ajustada ao nível de dificuldade.
   */
  const calculateFinalScore = (remainingTime) => {
    const difficultyMultiplier = difficulty === 'fácil' ? 1 : difficulty === 'médio' ? 1.5 : 2;
    const rawScore = score * difficultyMultiplier + remainingTime * 0.5;
    return parseFloat(rawScore.toFixed(2));
  };

  /**
   * Finaliza o jogo, calcula a pontuação e marca o status como concluído.
   */
  const handleGameComplete = () => {
    setScore((prevScore) => calculateFinalScore(timeLeft));
    setIsGameOver(true);
  };

  /**
   * Retorna para a página inicial.
   */
  const handleGoHome = () => {
    navigate('/');
  };

  // Observa o tempo restante para finalizar o jogo quando chegar a zero.
  useEffect(() => {
    if (timeLeft === 0) {
      handleGameComplete();
    }
  }, [timeLeft]);

  return (
    <div className="game-container">
      <div className="game-box">
        <div className="game-header">
          {/* Exibe o título e o indicador de dificuldade enquanto o jogo está ativo */}
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

          {/* Exibe a mensagem de fim de jogo e opções ao usuário */}
          {isGameOver && (
            <>
              <div className="endgame-message">
                <h2 className="endgame-title">Jogo Finalizado!</h2>
                <p className="endgame-score">Pontuação Final: {score}</p>
              </div>
              <div className="endgame-button-container">
                <button onClick={handleRestart} className="endgame-button">
                  Jogar Novamente
                </button>
                <button onClick={handleGoHome} className="endgame-button">
                  Voltar para o Início
                </button>
              </div>
            </>
          )}
        </div>
        {/* Renderiza a grade de botões enquanto o jogo está ativo */}
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
