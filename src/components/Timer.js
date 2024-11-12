import React, { useState, useEffect } from 'react';

const Timer = ({ initialTime, onTimeUp, setTimeLeft }) => {
  const [timeLeft, setInternalTimeLeft] = useState(initialTime);

  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setInterval(() => {
        setInternalTimeLeft(prevTime => {
          const newTime = prevTime - 1;
          setTimeLeft(newTime); // Atualiza o tempo restante no GamePage
          return newTime;
        });
      }, 1000);
      return () => clearInterval(timerId);
    } else {
      onTimeUp();
    }
  }, [timeLeft, onTimeUp, setTimeLeft]);

  return (
    <div>
      <p>Tempo Restante: {timeLeft} segundos</p>
    </div>
  );
};

export default Timer;
