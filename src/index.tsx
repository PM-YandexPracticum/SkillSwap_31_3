import * as ReactDOMClient from 'react-dom/client';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import '@app/styles/index.css';
import Header from './features/ui/Header/Header';

// Надо бы куда-то этот тип положить
export type TUser = {
  _id: string;
  name: string;
  city: string;
  age: string;
  gender: string;
  image: string;
  skillName: string;
  skillId: string;
  skillWants: string[];
  like: number;
  cratedAt: string;
};

const container = document.getElementById('root') as HTMLElement;
const root = ReactDOMClient.createRoot(container!);

const App = () => {
  const [userData, setUserData] = useState<TUser | undefined>(undefined);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('/db/users.json');
        if (!response.ok) {
          throw new Error(`Ошибка: ${response.status}`);
        }
        const users = await response.json();

        if (users) {
          setUserData(users.data[0] as TUser);
        } else {
          console.warn('users.json пустой или имеет не ту структуру');
          setUserData(undefined);
        }
      } catch (error) {
        console.error('Не смог загрузить users.json:', error);
        setUserData(undefined);
      }
    };

    fetchUserData();
  }, []);

  const isLoggedIn = !!userData;

  return (
    <React.StrictMode>
      <BrowserRouter>
        <Header isLoggedIn={isLoggedIn} data={userData} />
        <Routes>
          <Route path='/' element={<h1>Тут главная страница</h1>} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
};

root.render(<App />);
