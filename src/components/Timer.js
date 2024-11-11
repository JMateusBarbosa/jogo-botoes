// src/components/Timer.js
import React, { useState, useEffect } from 'react';

const Timer = ({ initialTime, onTimeUp }) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setInterval(() => {
        setTimeLeft(prevTime => prevTime - 1);
      }, 1000);
      return () => clearInterval(timerId);
    } else {
      onTimeUp(); // Chama a função de fim de jogo quando o tempo chegar a zero
    }
  }, [timeLeft, onTimeUp]);

  return (
    <div>
      <p>Tempo Restante: {timeLeft} segundos</p>
    </div>
  );
};

export default Timer;
