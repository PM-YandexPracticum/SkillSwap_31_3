import { FC } from 'react';
import styles from './skill.module.css';
import React, { useState } from 'react';
import skillsData from '../../../public/db/skills.json';
import { Tag } from '@shared/ui/tag';
import { ToggleLike } from '@shared/ui/ToggleLike/ToggleLike';

import moreSquare from '../../images/more-square.svg';
import share from '../../images/share.svg';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button } from '@shared/ui/button/button';
import { ImageCarousel } from './ImageCarousel/ImageCarousel';
import { CardOffersCarousel } from './CardOffersCarousel/CardOffersCarousel';
import { TSkill, TUserCard } from '@api/types';
import { selectUserCards } from '@entities/UserCards/model/selectors';
import { selectAllSkills } from '@entities/Skills/model/selectors';
import { selectIsUserAuth, selectUser, userThunk } from '@entities';
import { useSelector, useDispatch } from '@app/store/store';

export const Skill: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const disp = useDispatch();
  const userAuto = useSelector(selectIsUserAuth);
  const skils = useSelector(selectUser);
  const cards = useSelector(selectUserCards);
  const allSkills = useSelector(selectAllSkills);
  const user: TUserCard = cards.find((card) => card._id === id)!;

  // Функция переключения лайка
  const handleLikeToggle = (id: string) => {
    if (!userAuto) {
      navigate('/login');
      return;
    }

    const isLiked = skils!.favorites.includes(id);
    if (isLiked) {
      disp(userThunk.deleteLike(id));
    } else {
      disp(userThunk.putLike(id));
    }
  };

  // Получаем навык, которому может научить
  const getWantToTeachSkills = allSkills.find(
    (skill: TSkill) => skill._id === user!.skillId
  )!;

  // Получаем навыки, которым хочет научиться
  const getWantToLearnSkills = user!.skillWants.map(
    (skillId) => allSkills.find((skill: TSkill) => skill._id === skillId)!
  );

  // Находим родительскую категорию
  const parentCategory = allSkills.find(
    (skill: TSkill) => skill._id === getWantToTeachSkills.parent_id
  )!;

  const category = `${parentCategory.name} / ${getWantToTeachSkills.name}`;

  return (
    <div className={styles.mainContent}>
      <div className={styles.usreInfoContainer}>
        <div className={styles.cardsContainer}>
          <div className={styles.cardsHeader}>
            <div className={styles.cardsUserInfo}>
              <img
                className={`${styles.avatar} ${styles.medium}`}
                src={`/${user.avatar}`}
              />
              <div className={styles.cardText}>
                <div className={styles.name}>{user?.name}</div>
                <div className={styles.description}>
                  {`${user.city}, ${user.age} года`}
                </div>
              </div>
            </div>
          </div>
          <div className={styles.sectionCardAbout}>{user!.about}</div>
          <div className={styles.sectionSkils}>
            <div className={styles.cardSkils}>
              <div className={styles.learnSkils}>Может научить:</div>
              <div>
                <Tag
                  text={user.skillName}
                  category={getWantToTeachSkills.parent_id}
                />
              </div>
            </div>
            <div className={styles.cardSkils}>
              <div className={styles.teachSkils}>Хочет научиться:</div>
              <div className={styles.tegSkils}>
                {getWantToLearnSkills.map((skill, index) => (
                  <Tag
                    key={index}
                    text={skill.name}
                    category={skill.parent_id}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Описание пользователя */}
        <div className={styles.offerContainer}>
          <div className={styles.actionOffer}>
            <ToggleLike
              onChange={() => handleLikeToggle(user._id)}
              checked={skils?.favorites.includes(user._id)}
            />
            <Link to='#'>
              <img src={share} alt='share' />
            </Link>
            <Link to='#'>
              <img src={moreSquare} alt='moreSquare' />
            </Link>
          </div>
          <div className={styles.directionOffer}>
            <div className={styles.offerDetails}>
              <div className={styles.offerDiscription}>
                <div className={styles.offerHeader}>
                  <h2>{user.skillName}</h2>
                  <p className={styles.category}>{category}</p>
                </div>
                <p className={styles.text}>{user.description}</p>
              </div>

              <Button
                onClick={() => {
                  navigate('/skill/exchenge', {
                    state: { backgroundLocation: location.pathname }
                  });
                }}
                type='button'
              >
                Предложить обмен
              </Button>
            </div>
            {/* Галерея пользователя */}
            <div className={styles.imageContainer}>
              <ImageCarousel images={user.photos.map((photo) => `/${photo}`)} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.similarOffers}>
        <h2>Похожие предложения</h2>
        <CardOffersCarousel
          users={cards.filter((card) => card._id !== user._id)}
          likedUsers={skils?.favorites.includes(user._id)}
          learnSkills={user.skillWants}
          onLikeToggle={handleLikeToggle}
        />
      </div>
    </div>
  );
};
