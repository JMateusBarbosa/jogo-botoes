// src/components/ButtonGrid.js

import React, { useState } from 'react';
import '../css/ButtonGrid.css';

/**
 * Componente que exibe uma grade de botões interativos.
 * Os botões são gerados com base no nível de dificuldade e permitem interação para marcar como clicados.
 *
 * @param {function} onButtonClick - Função chamada a cada clique em um botão válido.
 * @param {function} onComplete - Função chamada quando todos os botões foram clicados.
 * @param {string} difficulty - Nível de dificuldade do jogo ('fácil', 'médio', 'difícil'). Padrão: 'fácil'.
 */
function ButtonGrid({ onButtonClick, onComplete, difficulty = 'fácil' }) {
  // Estado para rastrear os botões clicados.
  const [clickedButtons, setClickedButtons] = useState(new Set());

  // Número de botões baseado no nível de dificuldade.
  const buttonCount = { fácil: 8, médio: 12, difícil: 24 }[difficulty];

  /**
   * Manipula o clique em um botão da grade.
   * Atualiza o estado para incluir o botão clicado e verifica se todos os botões foram clicados.
   *
   * @param {number} index - Índice do botão clicado.
   */
  const handleButtonClick = (index) => {
    // Ignora o clique se o botão já foi clicado.
    if (!clickedButtons.has(index)) {
      setClickedButtons((prev) => {
        const updated = new Set(prev).add(index);

        // Verifica se todos os botões foram clicados e chama `onComplete`.
        if (updated.size === buttonCount) onComplete();

        return updated;
      });

      // Chama a função passada como prop para registrar o clique.
      onButtonClick();
    }
  };

  return (
    <div className="button-grid">
      {/* Renderiza os botões com base no número necessário para o nível de dificuldade */}
      {Array.from({ length: buttonCount }, (_, index) => (
        <button
          key={index}
          className={`game-button ${clickedButtons.has(index) ? 'clicked' : ''}`}
          onClick={() => handleButtonClick(index)}
          aria-label={`Button ${index + 1}`}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
}

export default ButtonGrid;
