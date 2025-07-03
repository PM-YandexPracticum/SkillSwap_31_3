import '@app/styles/index.css';
import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import App from './app/app';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
//import { store } from '../src/services/store';

const container = document.getElementById('root') as HTMLElement;
const root = ReactDOMClient.createRoot(container!);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
