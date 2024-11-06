// src/components/ButtonGrid.js
import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import '../css/ButtonGrid.css';

function ButtonGrid({ onButtonClick, difficulty = 'fácil' }) {
  let buttonCount;

  // Define o número de botões com base na dificuldade
  switch (difficulty) {
    case 'médio':
      buttonCount = 9;
      break;
    case 'difícil':
      buttonCount = 12;
      break;
    case 'fácil':
    default:
      buttonCount = 4;
      break;
  }

  const buttons = Array.from({ length: buttonCount }, (_, index) => (
    <Col key={index} xs={3} className="button-col">
      <Button
        variant="success"
        className="game-button"
        onClick={onButtonClick}
      >
        {index + 1}
      </Button>
    </Col>
  ));

  return (
    <Row className="justify-content-center">
      {buttons}
    </Row>
  );
}

export default ButtonGrid;
