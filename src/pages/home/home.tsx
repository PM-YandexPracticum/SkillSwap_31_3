import { FC } from 'react';
import { SkillCard } from '@features';
import { FiltersArea } from '@shared/ui/FiltersArea';
import styles from './home.module.css';
import { TUser, TSkill } from '@api';
import { useState, useEffect } from 'react';
import { getUserCardsApi, getSkillsApi, TUserCard } from '@api';
import { selectUser } from '@entities';
import { useSearchParams } from 'react-router-dom';
import { useSelector, useDispatch } from '@app/store/store';
import { selectUserCards } from '../../entities/UserCards/model/selectors';
import { userCardsThunk } from '../../entities/UserCards/model/thunk';

export const Home: FC = () => {
  const disp = useDispatch();
  const cards = useSelector(selectUserCards);
  const skils = useSelector(selectUser);

  const [likedUsers, setLikedUsers] = useState<string[]>([]);

  // Функция переключения лайка
  const handleLikeToggle = (userId: string) => {
    setLikedUsers((prev) =>
      prev.includes(userId)
        ? prev.filter((id) => id !== userId)
        : [...prev, userId]
    );
  };

  // //Отсеиваем навыки которым можем научить из общего списка
  // const getWantToTeachSkills = (user: TUser) =>
  //   skillsData.data.find((skill: TSkill) => skill._id === user.skillId)!;

  // //Отсеиваем навыки которым хотим научиться из общего списка
  // const getWantToLearnSkills = (user: TUser) =>
  //   user.skillWants.map(
  //     (skillId) =>
  //       skillsData.data.find((skill: TSkill) => skill._id === skillId)!
  //   );

  return (
    <>
      <h1>Тут главная страница</h1>

      <section>
        <h2>Популярное</h2>
        <div className={styles.gridSection}>
          {usersData.data.slice(0, 4).map((user: TUser) => (
            <SkillCard
              key={user._id}
              data={user}
              teachSkills={getWantToTeachSkills(user)}
              learnSkills={getWantToLearnSkills(user)}
              onLikeToggle={() => handleLikeToggle(user._id)}
              isLiked={likedUsers.includes(user._id)}
              onDetailsClick={() => console.log('Details clicked')}
            />
          ))}
        </div>
      </section>

      <section>
        <h2>Новое</h2>
        <div className={styles.gridSection}>
          {usersData.data.slice(4, 7).map((user: TUser) => (
            <SkillCard
              key={user._id}
              data={user}
              teachSkills={getWantToTeachSkills(user)}
              learnSkills={getWantToLearnSkills(user)}
              onLikeToggle={() => handleLikeToggle(user._id)}
              isLiked={likedUsers.includes(user._id)}
              onDetailsClick={() => console.log('Details clicked')}
            />
          ))}
        </div>
      </section>

      <section>
        <h2>Рекомендуем</h2>
        <div className={styles.gridSection}>
          {usersData.data.slice(7, 15).map((user: TUser) => (
            <SkillCard
              key={user._id}
              data={user}
              teachSkills={getWantToTeachSkills(user)}
              learnSkills={getWantToLearnSkills(user)}
              onLikeToggle={() => handleLikeToggle(user._id)}
              isLiked={likedUsers.includes(user._id)}
              onDetailsClick={() => console.log('Details clicked')}
            />
          ))}
        </div>
      </section>
    </>
  );
};
import { FC } from 'react';
import usersData from '../../../public/db/users.json';
import skillsData from '../../../public/db/skills.json';
import { SkillCard } from '../../features/skillcard/skillcard';
import styles from './home.module.css';
import { TUser, TSkill } from '@api';
import { useState, useEffect } from 'react';
import { getUserCardsApi, getSkillsApi, TUserCard } from '@api';
import { selectUser } from '@entities';
import { useSearchParams } from 'react-router-dom';
import { useSelector, useDispatch } from '@app/store/store';
import { selectUserCards } from '../../entities/UserCards/model/selectors';
import { userCardsThunk } from '../../entities/UserCards/model/thunk';

export const Home: FC = () => {
  const disp = useDispatch();
  const cards = useSelector(selectUserCards);
  const skils = useSelector(selectUser);

  const [likedUsers, setLikedUsers] = useState<string[]>([]);

  // Функция переключения лайка
  const handleLikeToggle = (userId: string) => {
    setLikedUsers((prev) =>
      prev.includes(userId)
        ? prev.filter((id) => id !== userId)
        : [...prev, userId]
    );
  };

  // //Отсеиваем навыки которым можем научить из общего списка
  // const getWantToTeachSkills = (user: TUser) =>
  //   skillsData.data.find((skill: TSkill) => skill._id === user.skillId)!;

  // //Отсеиваем навыки которым хотим научиться из общего списка
  // const getWantToLearnSkills = (user: TUser) =>
  //   user.skillWants.map(
  //     (skillId) =>
  //       skillsData.data.find((skill: TSkill) => skill._id === skillId)!
  //   );

  return (
    <div className={styles.layout}>
      <div className={styles.sidebar}>
        <FiltersArea />
      </div>
      <div className={styles.cardsContainer}>
        {cards.map((card: TUserCard, index: number) => (
          <SkillCard
            key={index}
            data={card}
            learnSkills={card.skillWants}
            onLikeToggle={() => handleLikeToggle(card._id)}
            isLiked={likedUsers.includes(card._id)}
            onDetailsClick={() => console.log('Details clicked')}
          />
        ))}
      </div>
    </div>
  );
};

// export interface TUserCard {
//   _id: string;
//   name: string;
//   age: string;
//   gender: string;
//   description: string;
//   city: string;
//   skillName: string;
//   skillId: string;
//   skillWants: string[];
//   avatar: string;
//   photos: string[];
// }
