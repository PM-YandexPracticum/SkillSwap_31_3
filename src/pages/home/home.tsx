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
import { Text } from '@shared/ui';

export const Home: FC = () => {
  const disp = useDispatch();
  const cards = useSelector(selectUserCards);
  const skils = useSelector(selectUser);
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query')?.toLowerCase() || '';

  const filteredCards = query
    ? cards.filter(
        (card) =>
          card.skillName.toLowerCase().includes(query) ||
          card.name.toLowerCase().includes(query)
      )
    : cards;

  const [likedUsers, setLikedUsers] = useState<string[]>([]);

  // Функция переключения лайка
  const handleLikeToggle = (userId: string) => {
    setLikedUsers((prev) =>
      prev.includes(userId)
        ? prev.filter((id) => id !== userId)
        : [...prev, userId]
    );
  };

  return (
    <div className={styles.layout}>
      <div className={styles.sidebar}>
        <FiltersArea />
      </div>
      <div className={styles.cardsContainer}>
        {filteredCards.length === 0 && (
          <Text color='text' as='h2'>
            Ничего не найдено
          </Text>
        )}
        {filteredCards.map((card: TUserCard, index: number) => (
          <SkillCard
            key={index}
            data={card}
            learnSkills={card.skillWants}
            onLikeToggle={() => handleLikeToggle(card._id)}
            isLiked={likedUsers.includes(card._id)}
            onDetailsClick={() => (window.location.href = '/skill')}
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
