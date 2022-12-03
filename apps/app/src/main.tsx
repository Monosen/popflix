import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthProvider, MovieProvider, SerieProvider } from './context';

import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <MovieProvider>
        <SerieProvider>
          <App />
        </SerieProvider>
      </MovieProvider>
    </AuthProvider>
  </React.StrictMode>
);
