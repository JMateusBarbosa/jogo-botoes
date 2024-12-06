// ========================
// Importações de Bibliotecas
// ========================
import React from 'react'; // Biblioteca principal para criação de interfaces React
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Gerenciador de rotas da aplicação

// ========================
// Importações de Componentes
// ========================
import HomePage from './pages/HomePage'; // Página inicial
import GamePage from './pages/GamePage'; // Página principal do jogo

/**
 * Componente principal da aplicação.
 * 
 * Responsável por definir as rotas disponíveis no sistema,
 * permitindo a navegação entre diferentes páginas.
 *
 * Estrutura:
 * - "/"     -> Página inicial (HomePage)
 * - "/game" -> Página de jogo (GamePage)
 *
 * @returns JSX.Element - Estrutura de navegação da aplicação.
 */
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/game" element={<GamePage />} />
      </Routes>
    </Router>
  );
}

// Exportação do componente principal para uso no ponto de entrada da aplicação
export default App;
