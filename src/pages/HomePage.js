// src/pages/HomePage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../css/HomePage.css';

function HomePage() {
  const navigate = useNavigate();

  // Função para navegação ao clicar em um nível de dificuldade
  const handleStartGame = (difficulty) => {
    navigate('/game', { state: { difficulty } });
  };

  return (
    <main className="home-background">
      <section className="card-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <article className="custom-card">
            <h1>Bem-vindo ao React Game System!</h1>
            <p className="description">
              Selecione o nível de dificuldade para começar o desafio!
            </p>
            <div className="button-row">
              <motion.button
                className="button success"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => handleStartGame('fácil')}
              >
                Fácil
              </motion.button>
              <motion.button
                className="button warning"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => handleStartGame('médio')}
              >
                Médio
              </motion.button>
              <motion.button
                className="button danger"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => handleStartGame('difícil')}
              >
                Difícil
              </motion.button>
            </div>
          </article>
        </motion.div>
      </section>
    </main>
  );
}

export default HomePage;
