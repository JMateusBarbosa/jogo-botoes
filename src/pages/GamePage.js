// src/pages/GamePage.js
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import ButtonGrid from '../components/ButtonGrid';
import Timer from '../components/Timer';
import '../css/GamePage.css';

function GamePage() {
  const [score, setScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [timeLeft, setTimeLeft] = useState(null); // Armazena o tempo restante

  const location = useLocation();
  const navigate = useNavigate();
  const { difficulty } = location.state || { difficulty: 'fácil' };

  // Define o tempo inicial com base na dificuldade
  let initialTime;
  let scoreBase;
  switch (difficulty) {
    case 'médio':
      initialTime = 15;
      scoreBase = 200;
      break;
    case 'difícil':
      initialTime = 10;
      scoreBase = 300;
      break;
    case 'fácil':
    default:
      initialTime = 20;
      scoreBase = 100;
      break;
  }

  // Função para incrementar a pontuação
  const handleButtonClick = () => {
    setScore(prevScore => prevScore + 1);
  };

  // Função chamada quando o tempo acaba
  const handleTimeUp = () => {
    calculateFinalScore(0); // Calcula a pontuação final com tempo 0
    setIsGameOver(true);
  };

  // Finaliza o jogo se todos os botões forem clicados
  const handleGameComplete = () => {
    calculateFinalScore(timeLeft); // Calcula a pontuação final com o tempo restante
    setIsGameOver(true);
  };

  // Função para calcular a pontuação final
  const calculateFinalScore = (remainingTime) => {
    const difficultyMultiplier = difficulty === 'fácil' ? 1 : difficulty === 'médio' ? 1.5 : 2;
    const finalScore = Math.round((score * difficultyMultiplier) + remainingTime * 0.5);
    setScore(finalScore);
  };

  // Função para reiniciar o jogo
  const handleRestart = () => {
    setScore(0);
    setIsGameOver(false);
    setTimeLeft(initialTime);
  };

  // Função para voltar para a HomePage
  const handleGoHome = () => {
    navigate('/'); // Navega para a rota inicial (HomePage)
  };

  return (
    <Container className="game-container">
      <Row className="justify-content-center mt-4">
        <Col md="auto">
          <h2>Jogo dos Botões</h2>
          {isGameOver ? (
            <>
              <p>Jogo Finalizado! Pontuação Final: {score}</p>
              <Button onClick={handleRestart} className="mr-2">Jogar Novamente</Button>
              <Button onClick={handleGoHome}>Voltar para o Início</Button>
            </>
          ) : (
            <>
              
              <Timer initialTime={initialTime} onTimeUp={handleTimeUp} setTimeLeft={setTimeLeft} />
              <p>Dificuldade: {difficulty}</p>
            </>
          )}
        </Col>
      </Row>
      <Row className="justify-content-center">
        {!isGameOver && (
          <ButtonGrid onButtonClick={handleButtonClick} onComplete={handleGameComplete} difficulty={difficulty} />
        )}
      </Row>
    </Container>
  );
}

export default GamePage;
