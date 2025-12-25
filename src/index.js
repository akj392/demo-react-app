import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RouterProvider } from 'react-router-dom';
import getRoutes from './routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
const routes = getRoutes();
root.render(
  <RouterProvider router={routes}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </RouterProvider>
);

