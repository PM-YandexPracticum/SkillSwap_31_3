import * as ReactDOMClient from 'react-dom/client';
import React from 'react';

//import { MainPage } from './pages/MainPage/MainPage';
//root.render(<h1>Тут главная страница</h1>);

//root.render(
//  <React.StrictMode>
//   <MainPage />

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '@app/styles/index.css';
import App from './app/app';
import { Provider } from 'react-redux';
//import { store } from '../src/services/store';

const container = document.getElementById('root') as HTMLElement;
const root = ReactDOMClient.createRoot(container!);

// routing_issue#47
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
