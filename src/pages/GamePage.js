// src/pages/GamePage.js
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import ButtonGrid from '../components/ButtonGrid';
import '../css/GamePage.css';

function GamePage() {
  const [score, setScore] = useState(0);

  // Obtém a dificuldade da navegação
  const location = useLocation();
  const { difficulty } = location.state || { difficulty: 'fácil' }; // Define 'fácil' como padrão se não houver dificuldade

  // Função para incrementar a pontuação
  const handleButtonClick = () => {
    setScore(score + 1);
  };

  return (
    <Container className="game-container">
      <Row className="justify-content-center mt-4">
        <Col md="auto">
          <h2>Jogo dos Botões</h2>
          <p>Pontuação: {score}</p>
          <p>Tempo Restante: <span className="timer">00:30</span></p> {/* Temporizador placeholder */}
          <p>Dificuldade: {difficulty}</p> {/* Exibe o nível de dificuldade selecionado */}
        </Col>
      </Row>
      <Row className="justify-content-center">
        <ButtonGrid onButtonClick={handleButtonClick} difficulty={difficulty} /> {/* Passa a dificuldade para ButtonGrid */}
      </Row>
    </Container>
  );
}

export default GamePage;
