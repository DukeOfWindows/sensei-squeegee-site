import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import { BrowserRouter } from 'react-router-dom';
import SiteRoutes from './Routes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <SiteRoutes />
  </BrowserRouter>
);
