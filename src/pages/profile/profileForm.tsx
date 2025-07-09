import { FC } from 'react';
import styles from './profile.module.css';
import { Text } from '../../shared/ui/Text/Text';
import { useState } from 'react';
import { InputDateUI } from '../../shared/ui/InputDate/InputDate';
import { Button } from '../../shared/ui/button/button';
import { SearchableSelect } from '../../shared/ui/SearchableSelect/SearchableSelect';
import { CITIES, GENDER } from './mockData';
import { TextBlock } from '../../shared/ui/textBlock/textBlock';
import { NavLink } from 'react-router-dom';

export const ProfileForm: FC = () => {
  // Данные пользователя
  const [userData, setUserData] = useState({
    email: 'Mariia@gmail.com',
    name: 'Мария',
    birthDate: new Date(1995, 9, 28),
    gender: 'Женский',
    city: 'Москва',
    about:
      'Люблю учиться новому, особенно если это можно делать за чаем и в пижаме.\nВсегда готова пообщаться и обменяться чем‑то интересным!'
  });

  // Обработчик изменения данных
  const handleChange = (field: string, value: string | Date | string[]) => {
    setUserData((prev) => ({
      ...prev,
      [field]: Array.isArray(value) ? value[0] : value
    }));
  };

  // Сохранение данных в профиле
  const handleClickSubmit = () => {
    console.log('Сохранение данных в профиле');
  };

  return (
    <div className={styles.profileContent}>
      <div className={styles.mainContent}>
        <form className={styles.profileForm}>
          <div className={styles.formFields}>
            <div className={styles.formField}>
              <Text as='bodyText' color='text'>
                Почта
              </Text>
              <TextBlock
                value={userData.email}
                maxLength={30}
                onChange={(value) => handleChange('email', value)}
              />

              <NavLink to='/register' className={styles.link}>
                <Text as='bodyText' color='text-link'>
                  Изменить пароль
                </Text>
              </NavLink>
            </div>

            <div className={styles.formField}>
              <Text as='bodyText' color='text'>
                Имя
              </Text>
              <TextBlock
                value={userData.name}
                maxLength={30}
                onChange={(value) => handleChange('name', value)}
              />
            </div>

            <div className={styles.rowFields}>
              <div className={styles.rowField}>
                <Text as='bodyText' color='text'>
                  Дата рождения
                </Text>

                <InputDateUI />
              </div>

              <div className={styles.rowField}>
                <Text as='bodyText' color='text'>
                  Пол
                </Text>
                <SearchableSelect
                  values={GENDER}
                  onChange={(values) => handleChange('gender', values)}
                  placeholder={userData.gender}
                />
              </div>
            </div>

            <div className={styles.formField}>
              <Text as='bodyText' color='text'>
                Город
              </Text>
              <SearchableSelect
                values={CITIES}
                onChange={(values) => handleChange('city', values)}
                placeholder={userData.city}
              />
            </div>

            <div className={styles.formField}>
              <Text as='bodyText' color='text'>
                О себе
              </Text>
              <TextBlock
                value={userData.about}
                maxLength={200}
                onChange={(value) => handleChange('about', value)}
              />
            </div>
            <div className={styles.saveButton}>
              <Button
                onClick={handleClickSubmit}
                children={
                  <Text as='bodyText' color='text'>
                    Сохранить
                  </Text>
                }
                size='large'
                type='submit'
                disabled
              />
            </div>
          </div>
        </form>
      </div>

      <div className={styles.avatarSection}>
        <Text as='bodyText' color='text'>
          Аватарка
        </Text>
        <img src="https://avatars.mds.yandex.net/i?id=9f3692ad1e843dedec2359920db7a9b9_l-9093405-images-thumbs&n=13" alt="фото юзера" width="350px" height="200px"></img>
      </div>
    </div>
  );
};
