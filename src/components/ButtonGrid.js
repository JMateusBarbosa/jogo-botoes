import React, { useState} from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import '../css/ButtonGrid.css';

function ButtonGrid({ onButtonClick, onComplete, difficulty = 'fácil' }) {
  const [clickedButtons, setClickedButtons] = useState(new Set());

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

  // Função para lidar com o clique no botão
  const handleButtonClick = (index) => {
    if (!clickedButtons.has(index)) {
      setClickedButtons((prevClicked) => {
        const newClicked = new Set(prevClicked).add(index);
        if (newClicked.size === buttonCount) {
          onComplete(); // Chama a função para finalizar o jogo quando todos os botões forem clicados
        }
        return newClicked;
      });
      onButtonClick(); // Incrementa a pontuação
    }
  };

  const buttons = Array.from({ length: buttonCount }, (_, index) => (
    <Col key={index} xs={3} className="button-col">
      <Button
        className={`game-button ${clickedButtons.has(index) ? 'clicked' : ''}`}
        onClick={() => handleButtonClick(index)}
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
