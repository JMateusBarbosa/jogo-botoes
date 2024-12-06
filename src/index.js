// ========================
// Importações de Estilos
// ========================
import './index.css'; // Estilos globais básicos
import './App.css'; // Estilos específicos do componente App

// ========================
// Importações de Bibliotecas
// ========================
import React from 'react'; // Biblioteca principal para criação de componentes React
import ReactDOM from 'react-dom'; // Biblioteca para renderizar componentes React no DOM

// ========================
// Importações de Componentes
// ========================
import App from './App'; // Componente principal da aplicação

// ========================
// Importações Adicionais
// ========================
import reportWebVitals from './reportWebVitals'; // Utilitário para monitoramento de métricas de desempenho (opcional)

/**
 * Ponto de entrada da aplicação.
 *
 * O ReactDOM.render é responsável por renderizar o componente raiz (App)
 * dentro do elemento HTML com id 'root'.
 *
 * @function render
 * @returns void
 */
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Referência ao elemento raiz no arquivo HTML
);

/**
 * Inicializa o monitoramento de métricas de desempenho.
 * 
 * Para capturar informações, substitua "console.log" por qualquer função 
 * personalizada ou ferramenta de análise.
 */
reportWebVitals();
