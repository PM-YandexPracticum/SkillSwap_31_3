import * as ReactDOMClient from 'react-dom/client';

import '@app/styles/index.css';
import usersData from '../public/db/users.json';
import skillsData from '../public/db/skills.json';
import { SkillCard } from './features/skillcard/skillcard';
import styles from './index.module.css';
import { useState } from 'react';
import { TUser } from '@app/styles/typs';

const container = document.getElementById('root') as HTMLElement;
const root = ReactDOMClient.createRoot(container!);

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
            wantsToLearnSkills={getWantToLearnSkills(user)}
            onLikeToggle={() => handleLikeToggle(user._id)}
            isLiked={likedUsers.includes(user._id)}
            onDetailsClick={() => console.log('Details clicked')}
          />
        ))}
      </div>
    </>
  );
};

root.render(<App />);
