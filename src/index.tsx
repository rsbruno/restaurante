import React from 'react';
import ReactDOM from 'react-dom/client';
import { PageMenuFood } from './pages/MenuFoodPage/MenuFoodPage';
import 'normalize.css'
import './styles.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <PageMenuFood />
  </React.StrictMode>
);