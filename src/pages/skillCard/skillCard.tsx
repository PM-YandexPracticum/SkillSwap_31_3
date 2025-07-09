import { FC } from 'react';
import styles from './skillCard.module.css';
import React, { useState } from 'react';
import { TSkill, TUser } from '@app/styles/typs';
import skillsData from '../../../public/db/skills.json';
import { Tag } from '@shared/ui/tag';
import { ToggleLike } from '@shared/ui/ToggleLike/ToggleLike';

import image from './images/image.jpg';
import image3 from './images/image3.jpg';
import image2 from './images/image2.jpg';
import image4 from './images/image4.jpg';

import moreSquare from '../../images/more-square.svg';
import share from '../../images/share.svg';
import { Link } from 'react-router-dom';
import { Button } from '@shared/ui/button/button';
import { ImageCarousel } from './ImageCarousel/ImageCarousel';
import { CardOffersCarousel } from './CardOffersCarousel/CardOffersCarousel';

const usersData: TUser[] = [
  {
    _id: '1',
    name: 'Иван',
    city: 'Санкт-Петербург',
    age: '34',
    gender: 'male',
    image: '4dd5fb27150ba4c12797e6d6af90c48b27853d2e.jpg',
    skillName: 'Игра на барабанах',
    skillId: '31',
    skillWants: ['12', '42', '23', '5'],
    like: 5,
    cratedAt: '2025-04-22',
    about:
      'Привет! Люблю ритм, кофе по утрам и людей, которые не боятся пробовать новое',
    text: 'Привет! Я играю на барабанах уже больше 10 лет — о репетиций в гараже до выступлений н сцене с живыми группами. Научу основам техники (и как не отбить себе пальцы), играть любимые ритмы и разбирать песни, импровизировать и звучать уверенно даже без паритуры',
    images: [image, image2, image3, image4]
  },
  {
    _id: '2',
    name: 'Анна',
    city: 'Казань',
    age: '26',
    gender: 'female',
    image: '25d1a77020008b9e3f08babd1f67f01cdb8f89d6.jpg',
    skillName: 'Английский язык',
    skillId: '15',
    skillWants: ['12', '42', '23', '5'],
    like: 89,
    cratedAt: '2024-12-29'
  },
  {
    _id: '3',
    name: 'Максим',
    city: 'Москва',
    age: '23',
    gender: 'male',
    image: '3f997ac88310448974cf239a72bad8ef817f985f.jpg',
    skillName: 'Бизнес-план',
    skillId: '14',
    skillWants: ['12', '42', '23', '5'],
    like: 65,
    cratedAt: '2025-05-15'
  },
  {
    _id: '4',
    name: 'Илона',
    city: 'Екатеринбург',
    age: '33',
    gender: 'female',
    image: 'd0400c167c2b5599f72e19a01b70f51fb477fb65.jpg',
    skillName: 'Английский язык',
    skillId: '15',
    skillWants: ['12', '42', '23', '5'],
    like: 96,
    cratedAt: '2025-04-29'
  },
  {
    _id: '5',
    name: 'Михаил',
    city: 'Новосибирск',
    age: '29',
    gender: 'male',
    image: '8ece67ec5c10e439951d37b38e99e3eb549a39e9.jpg',
    skillName: 'Английский язык',
    skillId: '15',
    skillWants: ['12', '42', '23', '5'],
    like: 46,
    cratedAt: '2024-07-10'
  },
  {
    _id: '6',
    name: 'Мария',
    city: 'Краснодар',
    age: '21',
    gender: 'female',
    image: 'cdadf12938e46556fb74ea7e1316f36893b432c2.jpg',
    skillName: 'Английский язык',
    skillId: '15',
    skillWants: ['12', '42', '23', '5'],
    like: 1,
    cratedAt: '2025-02-11'
  }
];

export const SkillCard: React.FC = () => {
  const [likedUsers, setLikedUsers] = useState<string[]>([]);

  const user = usersData[0];

  // Функция переключения лайка
  const handleLikeToggle = (userId: string) => {
    setLikedUsers((prev) =>
      prev.includes(userId)
        ? prev.filter((id) => id !== userId)
        : [...prev, userId]
    );
  };

  // Получаем навык, которому может научить
  const getWantToTeachSkills = skillsData.data.find(
    (skill: TSkill) => skill._id === user.skillId
  )!;

  // Получаем навыки, которым хочет научиться
  const getWantToLearnSkills = user.skillWants.map(
    (skillId) => skillsData.data.find((skill: TSkill) => skill._id === skillId)!
  );

  // Находим родительскую категорию
  const parentCategory = skillsData.data.find(
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
                style={{ backgroundImage: `url(./images/${user.image})` }}
              />
              <div className={styles.cardText}>
                <div className={styles.name}>{user.name}</div>
                <div className={styles.description}>
                  {`${user.city}, ${user.age} года`}
                </div>
              </div>
            </div>
          </div>
          <div className={styles.sectionCardAbout}>{user.about}</div>
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
              checked={likedUsers.includes(user._id)}
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
                <p className={styles.text}>{user.text}</p>
              </div>

              <Button
                onClick={() => console.log('Details clicked')}
                type='button'
              >
                Предложить обмен
              </Button>
            </div>
            {/* Галерея пользователя */}
            <div className={styles.imageContainer}>
              <ImageCarousel images={user.images!} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.similarOffers}>
        <h2>Похожие предложения</h2>
        <CardOffersCarousel
          users={usersData}
          likedUsers={likedUsers}
          teachSkills={getWantToTeachSkills}
          learnSkills={getWantToLearnSkills}
          onLikeToggle={() => (window.location.href = '/skill')}
        />
      </div>
    </div>
  );
};
