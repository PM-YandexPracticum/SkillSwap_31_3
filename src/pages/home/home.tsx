import { FC } from 'react';
import usersData from '../../../public/db/users.json';
import skillsData from '../../../public/db/skills.json';
import { SkillCard } from '../../features/skillcard/skillcard';
import styles from './home.module.css';
import { TUser, TSkill } from '@app/styles/typs';
import { useState, useEffect } from 'react';

export const Home: FC = () => {
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
    skillsData.data.find((skill: TSkill) => skill._id === user.skillId)!;

  //Отсеиваем навыки которым хотим научиться из общего списка
  const getWantToLearnSkills = (user: TUser) =>
    user.skillWants.map(
      (skillId) =>
        skillsData.data.find((skill: TSkill) => skill._id === skillId)!
    );

  return (
    <>
      <h1>Тут главная страница</h1>
      <div className={styles.cardsContainer}>
        {usersData.data.map((user: TUser, index: number) => (
          <SkillCard
            key={index}
            data={user}
            teachSkills={getWantToTeachSkills(user)}
            learnSkills={getWantToLearnSkills(user)}
            onLikeToggle={() => handleLikeToggle(user._id)}
            isLiked={likedUsers.includes(user._id)}
            onDetailsClick={() => (window.location.href = '/skill')}
          />
        ))}
      </div>
    </>
  );
};
