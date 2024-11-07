import React, { useState } from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import '../css/ButtonGrid.css';

function ButtonGrid({ onButtonClick, difficulty = 'fácil' }) {
  const [clickedButtons, setClickedButtons] = useState(new Set()); // Estado para armazenar os botões clicados

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
    if (!clickedButtons.has(index)) { // Verifica se o botão não foi clicado antes
      // Adiciona o botão clicado ao Set e garante que a cor seja permanente
      setClickedButtons((prevClicked) => new Set(prevClicked).add(index)); 
      onButtonClick(); // Chama a função passada como prop para incrementar a pontuação
    }
  };

  // Cria os botões, mudando a cor para vermelho quando clicado
  const buttons = Array.from({ length: buttonCount }, (_, index) => (
    <Col key={index} xs={3} className="button-col">
      <Button
        className={`game-button ${clickedButtons.has(index) ? 'clicked' : ''}`} // Aplica a classe 'clicked' se o botão foi clicado
        onClick={() => handleButtonClick(index)} // Passa o índice do botão
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
