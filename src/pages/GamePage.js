// src/pages/GamePage.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Card } from 'react-bootstrap';

function GamePage() {
  const location = useLocation();
  const { difficulty } = location.state || {};

  return (
    <Container className="d-flex justify-content-center align-items-center mt-5">
      <Card className="text-center p-4" style={{ width: '100%', maxWidth: '600px' }}>
        <Card.Body>
          <Card.Title as="h2">Página do Jogo</Card.Title>
          <Card.Text>Nível de Dificuldade: <strong>{difficulty}</strong></Card.Text>
          {/* Áreas reservadas para o grid de botões e cronômetro */}
        </Card.Body>
      </Card>
    </Container>
  );
}

export default GamePage;
