import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.css';
import { ChromaOSProvider } from './context/ChromaOS';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChromaOSProvider>
      <App />
    </ChromaOSProvider>
  </React.StrictMode>
);
