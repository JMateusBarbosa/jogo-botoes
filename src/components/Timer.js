import React, { useState, useEffect } from 'react';

const Timer = ({ initialTime }) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearInterval(timerId);
    }
  }, [timeLeft]);

  return (
    <div>
      <p>Tempo Restante: {timeLeft} segundos</p>
    </div>
  );
};

export default Timer;
