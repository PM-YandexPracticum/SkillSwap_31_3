import * as ReactDOMClient from 'react-dom/client';
import React from 'react';
import '@app/styles/index.css';
import { MainPage } from './pages/MainPage/MainPage';

const container = document.getElementById('root') as HTMLElement;
const root = ReactDOMClient.createRoot(container!);
root.render(<h1>Тут главная страница</h1>);

root.render(
  <React.StrictMode>
    <MainPage />
  </React.StrictMode>
);
