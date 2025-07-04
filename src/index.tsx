
import * as ReactDOMClient from 'react-dom/client';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import '@app/styles/index.css';
import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import App from './app/app';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
//import { store } from '../src/services/store';

import usersData from '../public/db/users.json';
import skillsData from '../public/db/skills.json';
import { SkillCard } from './features/skillcard/skillcard';
import styles from './index.module.css';
import { useState } from 'react';
import { TUser } from '@app/styles/typs';

<!-- import Header from './features/ui/Header/Header';

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
}; -->

const container = document.getElementById('root') as HTMLElement;
const root = ReactDOMClient.createRoot(container!);

<!--  routing_issue#47 -->
<!-- root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);-->

const App = () => {

  const [likedUsers, setLikedUsers] = useState<string[]>([]);

  // Функция переключения лайка
  const handleLikeToggle = (userId: string) => {
    setLikedUsers((prev) =>
      prev.includes(userId)
        ? prev.filter((id) => id !== userId)
        : [...prev, userId]
    );
  };

  //Отсеиваем навыки которым можем научить из общего списка
  const getWantToTeachSkills = (user: TUser) =>
    skillsData.data.find((skill) => skill._id === user.skillId)!;

  //Отсеиваем навыки которым хотим научиться из общего списка
  const getWantToLearnSkills = (user: TUser) =>
    user.skillWants.map(
      (skillId) => skillsData.data.find((skill) => skill._id === skillId)!
    );

  return (
    <>
      <h1>Тут главная страница</h1>
      <div className={styles.cardsContainer}>
        {usersData.data.map((user, index) => (
          <SkillCard
            key={index}
            data={user}
            teachSkills={getWantToTeachSkills(user)}
            learnSkills={getWantToLearnSkills(user)}
            onLikeToggle={() => handleLikeToggle(user._id)}
            isLiked={likedUsers.includes(user._id)}
            onDetailsClick={() => console.log('Details clicked')}
          />
        ))}
      </div>
    </>

<!--   const [userData, setUserData] = useState<TUser | undefined>(undefined);

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
    </React.StrictMode> -->
  );
};

root.render(<App />);

