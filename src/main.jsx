import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'

// Fuente Local (Outfit) para evitar requests externos y bloqueo de renderizado
import '@fontsource/outfit/300.css';
import '@fontsource/outfit/400.css';
import '@fontsource/outfit/600.css';
import '@fontsource/outfit/700.css';
import '@fontsource/outfit/800.css';
import '@fontsource/outfit/900.css';

import App from './App.jsx'

const root = document.getElementById('root');
const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

if (root.hasChildNodes()) {
  hydrateRoot(root, app);
} else {
  createRoot(root).render(app);
}
