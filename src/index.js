import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// import Login from './Login';
import BotonSaludar from './BotonSaludar';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    {/* <Login /> */}
    <BotonSaludar />
  </StrictMode>
);
