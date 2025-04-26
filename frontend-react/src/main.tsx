import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './styles/main.scss';
import { CategoryProvider } from './context/CategoryContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CategoryProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CategoryProvider>
  </React.StrictMode>
);