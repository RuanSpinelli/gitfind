import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/Home'; // isso é o componente da página home
import './styles.css'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


