// src/pages/GamePage.js
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import ButtonGrid from '../components/ButtonGrid';
import Timer from '../components/Timer';
import '../css/GamePage.css';

function GamePage() {
  const [score, setScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  const location = useLocation();
  const { difficulty } = location.state || { difficulty: 'fácil' };

  // Define o tempo inicial com base na dificuldade
  let initialTime;
  switch (difficulty) {
    case 'médio':
      initialTime = 15;
      break;
    case 'difícil':
      initialTime = 10;
      break;
    case 'fácil':
    default:
      initialTime = 20;
      break;
  }

  // Função para incrementar a pontuação
  const handleButtonClick = () => {
    setScore(prevScore => prevScore + 1);
  };

  // Função chamada quando o tempo acaba
  const handleTimeUp = () => {
    setIsGameOver(true);
  };

  return (
    <Container className="game-container">
      <Row className="justify-content-center mt-4">
        <Col md="auto">
          <h2>Jogo dos Botões</h2>
          <p>Pontuação: {score}</p>
          {isGameOver ? (
            <p>Tempo Esgotado! Jogo Finalizado</p>
          ) : (
            <Timer initialTime={initialTime} onTimeUp={handleTimeUp} />
          )}
          <p>Dificuldade: {difficulty}</p>
        </Col>
      </Row>
      <Row className="justify-content-center">
        {!isGameOver && (
          <ButtonGrid onButtonClick={handleButtonClick} difficulty={difficulty} />
        )}
      </Row>
    </Container>
  );
}

export default GamePage;
