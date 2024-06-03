import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Cria uma instância do QueryClient
const queryClient = new QueryClient();

const container = document.getElementById('root');
const root = createRoot(container!); // Utilize a notação `!` para assegurar que o container não é nulo

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);


