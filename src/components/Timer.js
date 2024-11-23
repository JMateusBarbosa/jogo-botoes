import React, { useEffect, useState } from 'react';
import '../css/GamePage.css';

const Timer = ({ initialTime, onTimeUp, setTimeLeft }) => {
  const [startTime] = useState(Date.now());
  const [timeLeft, setInternalTimeLeft] = useState(initialTime);

  useEffect(() => {
    const timerId = setInterval(() => {
      const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
      const remainingTime = initialTime - elapsedTime;

      if (remainingTime <= 0) {
        setInternalTimeLeft(0);
        setTimeLeft(0); // Sincronizar com o GamePage
        clearInterval(timerId);
        onTimeUp(); // Notifica o GamePage que o tempo acabou
      } else {
        setInternalTimeLeft(remainingTime);
        setTimeLeft(remainingTime); // Atualiza o GamePage
      }
    }, 100);

    return () => clearInterval(timerId); // Limpa o intervalo quando o componente desmontar
  }, [startTime, initialTime, setTimeLeft, onTimeUp]);

  return <p className='timer'>Tempo Restante: {timeLeft} segundos</p>;
};

export default Timer;
