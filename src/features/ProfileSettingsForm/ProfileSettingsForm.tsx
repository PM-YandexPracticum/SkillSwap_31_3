import { FC, useCallback } from 'react';
import styles from './ProfileSettingsForm.module.css';
import { Text } from '../../shared/ui/Text/Text';
import { useState } from 'react';
import { InputDateUI } from '../../shared/ui/InputDate/InputDate';
import { Button } from '../../shared/ui/button/button';
import { SearchableSelect } from '../../shared/ui/SearchableSelect/SearchableSelect';
import { CITIES, GENDER } from './mockData';
import { TextBlock } from '../../shared/ui/textBlock/textBlock';
import { NavLink } from 'react-router-dom';
import { useSelector } from '@app/store/store';
import { selectUserProfileData } from '@entities/User';
import myImage from '../../../public/images/03a69e3af2677c18576441e05e66092043930940.jpg';
import editIcon from '@shared/assets/icons/edit-icon.svg';
import { TUserDataUpdate } from '@api/types';

export const ProfileSettingsForm: FC = () => {
  // Данные пользователя
  //   const [userData, setUserData] = useState({
  //     email: 'Mariia@gmail.com',
  //     name: 'Мария',
  //     birthDate: new Date(1995, 9, 28),
  //     gender: 'Женский',
  //     city: 'Москва',
  //     about:
  //       'Люблю учиться новому, особенно если это можно делать за чаем и в пижаме.\nВсегда готова пообщаться и обменяться чем‑то интересным!'
  //   });

  // Обработчик изменения данных
  const userData = useSelector(selectUserProfileData);
  const [userUpdate, setUserUpdate] = useState<TUserDataUpdate>(
    userData as TUserDataUpdate
  );

  const handleChange = (field: string, value: string | Date | string[]) => {};
  console.log(userUpdate);
  // Сохранение данных в профиле
  const handleClickSubmit = () => {
    setUserUpdate((prev) => ({ ...prev, city: 'Москва' }));
    console.log('Сохранение данных в профиле');
  };

  const [changePassword, setChangePassword] = useState(false);
  const [image, setImage] = useState<FileList | null>(null);

  return (
    <div className={styles.wrapper}>
      <div className={styles.profileContent}>
        <div className={styles.mainContent}>
          <form className={styles.profileForm}>
            <div className={styles.formFields}>
              <div className={styles.formField}>
                <Text as='bodyText' color='text'>
                  Почта
                </Text>
                <TextBlock
                  value={userData?.email}
                  maxLength={30}
                  onChange={() => {}}
                />

                {changePassword ? (
                  <p>Не надо</p>
                ) : (
                  <a
                    style={{ cursor: 'pointer' }}
                    onClick={() => {
                      setChangePassword(true);
                    }}
                  >
                    <Text as='bodyText' color='text-link'>
                      Изменить пароль
                    </Text>
                  </a>
                )}
                {/* <NavLink to='/register' className={styles.link}>
                <Text as='bodyText' color='text-link'>
                  Изменить пароль
                </Text>
                <input type='password' />
              </NavLink> */}
              </div>

              <div className={styles.formField}>
                <Text as='bodyText' color='text'>
                  Имя
                </Text>
                <TextBlock
                  value={userData?.name}
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
                    placeholder={'Выберите пол'}
                    defaultValue={userUpdate.gender}
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
                  placeholder={'Выберите город'}
                  defaultValue={userUpdate.city}
                />
              </div>

              <div className={styles.formField} style={{ marginBlockEnd: 32 }}>
                <Text as='bodyText' color='text'>
                  О себе
                </Text>
                <TextBlock
                  value={userUpdate?.description}
                  maxLength={200}
                  onChange={(value) => handleChange('about', value)}
                />
              </div>
              <Button
                onClick={handleClickSubmit}
                children={
                  <Text as='bodyText' color='text'>
                    Сохранить
                  </Text>
                }
                size='large'
                type='submit'
                // disabled
              />
            </div>
          </form>
        </div>

        <div className={styles.avatarSection}>
          <div style={{ width: 244, height: 244, position: 'relative' }}>
            <img
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '50%'
              }}
              src={image?.length ? URL.createObjectURL(image[0]) : myImage}
              alt='Аватарка пользователя'
            />
            <button className={styles.imageButton}>
              <label htmlFor='avatarImage' className={styles.avatarLabel}>
                <img src={editIcon} alt='редактировать аватарку' />
                <input
                  id='avatarImage'
                  type='file'
                  accept='image/*'
                  className={styles.visuallyHidden}
                  onChange={(e) => {
                    console.log(e.target.files);
                    setImage(e.target.files);
                  }}
                />
              </label>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
