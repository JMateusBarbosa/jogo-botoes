// src/pages/HomePage.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../css/HomePage.css';

/**
 * Página inicial do sistema.
 * Permite ao usuário selecionar um nível de dificuldade e iniciar o jogo.
 */
function HomePage() {
  const navigate = useNavigate(); // Hook para gerenciar navegação no React Router.

  /**
   * Redireciona para a página do jogo, passando o nível de dificuldade selecionado como estado.
   *
   * @param {string} difficulty - O nível de dificuldade escolhido pelo usuário (fácil, médio ou difícil).
   */
  const handleStartGame = (difficulty) => {
    navigate('/game', { state: { difficulty } });
  };

  return (
    <main className="home-background">
      <section className="card-container">
        {/* Animação do card principal ao carregar a página */}
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
              {/* Botões de seleção de dificuldade */}
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
