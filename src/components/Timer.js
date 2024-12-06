// src/components/Timer.js

import React, { useEffect, useState } from 'react';
import '../css/GamePage.css';

/**
 * Componente que controla o temporizador do jogo.
 * Exibe o tempo restante e notifica o jogo quando o tempo acaba.
 *
 * @param {number} initialTime - Tempo inicial em segundos.
 * @param {function} onTimeUp - Função chamada quando o tempo chega a zero.
 * @param {function} setTimeLeft - Função para atualizar o estado do tempo restante no componente pai.
 */
const Timer = ({ initialTime, onTimeUp, setTimeLeft }) => {
  // Tempo de início do temporizador.
  const [startTime] = useState(Date.now());

  // Estado interno para o tempo restante.
  const [timeLeft, setInternalTimeLeft] = useState(initialTime);

  useEffect(() => {
    // Define o intervalo para atualizar o temporizador a cada 100ms.
    const timerId = setInterval(() => {
      const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
      const remainingTime = initialTime - elapsedTime;

      if (remainingTime <= 0) {
        // Tempo acabou: atualiza os estados e notifica o componente pai.
        setInternalTimeLeft(0);
        setTimeLeft(0);
        clearInterval(timerId);
        onTimeUp();
      } else {
        // Atualiza o tempo restante.
        setInternalTimeLeft(remainingTime);
        setTimeLeft(remainingTime);
      }
    }, 100);

    // Limpa o intervalo ao desmontar o componente.
    return () => clearInterval(timerId);
  }, [startTime, initialTime, setTimeLeft, onTimeUp]);

  return <p className="timer">Tempo Restante: {timeLeft} segundos</p>;
};

export default Timer;
