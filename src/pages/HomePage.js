// src/pages/HomePage.js
import React from 'react';
import { Button, Container, Row, Col, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './HomePage.css'; 

function HomePage() {
  const navigate = useNavigate();

  // Função para navegação ao clicar em um nível de dificuldade
  const handleStartGame = (difficulty) => {
    navigate('/game', { state: { difficulty } });
  };

  return (
    <div className="home-background"> {/* Div principal com fundo personalizado */}
      <Container className="d-flex flex-column align-items-center mt-5">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <Card className="text-center p-4 custom-card">
            <Card.Body>
              <Card.Title as="h1">Bem-vindo ao Jogo dos Botões!</Card.Title>
              <Card.Text>
                Selecione o nível de dificuldade para começar o desafio!
              </Card.Text>

              <Row className="mt-4">
                <Col>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Button variant="success" size="lg" onClick={() => handleStartGame('fácil')}>
                      Fácil
                    </Button>
                  </motion.div>
                </Col>
                <Col>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Button variant="warning" size="lg" onClick={() => handleStartGame('médio')}>
                      Médio
                    </Button>
                  </motion.div>
                </Col>
                <Col>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Button variant="danger" size="lg" onClick={() => handleStartGame('difícil')}>
                      Difícil
                    </Button>
                  </motion.div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </motion.div>
      </Container>
    </div>
  );
}

export default HomePage;
