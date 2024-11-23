import React, { useState } from 'react';
import '../css/ButtonGrid.css';

function ButtonGrid({ onButtonClick, onComplete, difficulty = 'fácil' }) {
  const [clickedButtons, setClickedButtons] = useState(new Set());

  const buttonCount = { fácil: 8, médio: 12, difícil: 24 }[difficulty];

  const handleButtonClick = (index) => {
    if (!clickedButtons.has(index)) {
      setClickedButtons((prev) => {
        const updated = new Set(prev).add(index);
        if (updated.size === buttonCount) onComplete();
        return updated;
      });
      onButtonClick();
    }
  };

  return (
    <div className="button-grid">
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
