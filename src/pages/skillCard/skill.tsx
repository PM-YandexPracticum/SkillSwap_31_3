import { FC } from 'react';
import styles from './skill.module.css';
import React, { useState } from 'react';
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
import { TSkill, TUserCard } from '@api/types';
import { useNavigate } from 'react-router-dom';

export type TUserSkill = TUserCard & {
  about?: string;
};
const usersData: TUserSkill[] = [
  {
    _id: '1',
    name: 'Иван',
    city: 'Санкт-Петербург',
    age: '34',
    gender: 'male',
    avatar: '4dd5fb27150ba4c12797e6d6af90c48b27853d2e.jpg',
    skillName: 'Игра на барабанах',
    skillId: '31',
    skillWants: ['12', '42', '23', '5'],
    about:
      'Привет! Люблю ритм, кофе по утрам и людей, которые не боятся пробовать новое',
    description:
      'Привет! Я играю на барабанах уже больше 10 лет — о репетиций в гараже до выступлений н сцене с живыми группами. Научу основам техники (и как не отбить себе пальцы), играть любимые ритмы и разбирать песни, импровизировать и звучать уверенно даже без паритуры',
    photos: [image, image2, image3, image4]
  },
  {
    _id: '2',
    name: 'Анна',
    city: 'Казань',
    age: '26',
    gender: 'female',
    avatar: '25d1a77020008b9e3f08babd1f67f01cdb8f89d6.jpg',
    skillName: 'Английский язык',
    skillId: '15',
    skillWants: ['12', '42', '23', '5'],
    about:
      'Привет! Люблю ритм, кофе по утрам и людей, которые не боятся пробовать новое',
    description:
      'Привет! Я играю на барабанах уже больше 10 лет — о репетиций в гараже до выступлений н сцене с живыми группами. Научу основам техники (и как не отбить себе пальцы), играть любимые ритмы и разбирать песни, импровизировать и звучать уверенно даже без паритуры',
    photos: [image, image2, image3, image4]
  },
  {
    _id: '3',
    name: 'Максим',
    city: 'Москва',
    age: '23',
    gender: 'male',
    avatar: '3f997ac88310448974cf239a72bad8ef817f985f.jpg',
    skillName: 'Бизнес-план',
    skillId: '14',
    skillWants: ['12', '42', '23', '5'],
    about:
      'Привет! Люблю ритм, кофе по утрам и людей, которые не боятся пробовать новое',
    description:
      'Привет! Я играю на барабанах уже больше 10 лет — о репетиций в гараже до выступлений н сцене с живыми группами. Научу основам техники (и как не отбить себе пальцы), играть любимые ритмы и разбирать песни, импровизировать и звучать уверенно даже без паритуры',
    photos: [image, image2, image3, image4]
  },
  {
    _id: '4',
    name: 'Илона',
    city: 'Екатеринбург',
    age: '33',
    gender: 'female',
    avatar: 'd0400c167c2b5599f72e19a01b70f51fb477fb65.jpg',
    skillName: 'Английский язык',
    skillId: '15',
    skillWants: ['12', '42', '23', '5'],
    about:
      'Привет! Люблю ритм, кофе по утрам и людей, которые не боятся пробовать новое',
    description:
      'Привет! Я играю на барабанах уже больше 10 лет — о репетиций в гараже до выступлений н сцене с живыми группами. Научу основам техники (и как не отбить себе пальцы), играть любимые ритмы и разбирать песни, импровизировать и звучать уверенно даже без паритуры',
    photos: [image, image2, image3, image4]
  },
  {
    _id: '5',
    name: 'Михаил',
    city: 'Новосибирск',
    age: '29',
    gender: 'male',
    avatar: '8ece67ec5c10e439951d37b38e99e3eb549a39e9.jpg',
    skillName: 'Английский язык',
    skillId: '15',
    skillWants: ['12', '42', '23', '5'],
    about:
      'Привет! Люблю ритм, кофе по утрам и людей, которые не боятся пробовать новое',
    description:
      'Привет! Я играю на барабанах уже больше 10 лет — о репетиций в гараже до выступлений н сцене с живыми группами. Научу основам техники (и как не отбить себе пальцы), играть любимые ритмы и разбирать песни, импровизировать и звучать уверенно даже без паритуры',
    photos: [image, image2, image3, image4]
  },
  {
    _id: '6',
    name: 'Мария',
    city: 'Краснодар',
    age: '21',
    gender: 'female',
    avatar: 'cdadf12938e46556fb74ea7e1316f36893b432c2.jpg',
    skillName: 'Английский язык',
    skillId: '15',
    skillWants: ['12', '42', '23', '5'],
    about:
      'Привет! Люблю ритм, кофе по утрам и людей, которые не боятся пробовать новое',
    description:
      'Привет! Я играю на барабанах уже больше 10 лет — о репетиций в гараже до выступлений н сцене с живыми группами. Научу основам техники (и как не отбить себе пальцы), играть любимые ритмы и разбирать песни, импровизировать и звучать уверенно даже без паритуры',
    photos: [image, image2, image3, image4]
  }
];

export const Skill: React.FC = () => {
  const navigate = useNavigate();

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
                src={user.avatar}
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
              <ImageCarousel images={user.photos} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.similarOffers}>
        <h2>Похожие предложения</h2>
        <CardOffersCarousel
          users={usersData}
          likedUsers={likedUsers}
          learnSkills={user.skillWants}
          onLikeToggle={handleLikeToggle}
        />
      </div>
    </div>
  );
};
