import React, { FC, useState } from 'react';
import styles from './Header.module.css';
import SkillSwapLogo from '@shared/assets/icons/Logo.svg';
import Arrow from '@shared/assets/icons/arrow-down.svg';
import { Link, useNavigate } from 'react-router-dom';
import SearchBar from '@shared/ui/SearchBar/search-bar';
import { Button } from '@shared/ui/button/button';
import { TUserCard } from '@api';
import { Notification } from '@shared/ui/Notification/Notification';
import { ToggleLike } from '@shared/ui/ToggleLike/ToggleLike';
import MoonIcon from '@shared/ui/MoonIcon/MoonIcon';
import ClearIcon from '@shared/assets/icons/cross.svg';

interface HeaderProps {
  isLoggedIn: boolean;
  data?: TUserCard | null;
  isFormOpen?: boolean;
  onCloseForm?: () => void;
}

export const Header: FC<HeaderProps> = ({
  isLoggedIn,
  data,
  isFormOpen = false,
  onCloseForm = () => {}
}) => {
  const navigate = useNavigate();

  // Состояние для уведомлений
  const [hasUnreadNotifications, setHasUnreadNotifications] =
    useState<boolean>(true);

  // Состояние для лайков
  const [isLiked, setIsLiked] = useState(false);

  // Для поиска
  const handleSearchSubmit = (searchText: string) => {};

  // Обработчик для компонента Notification
  const handleNotificationToggle = (value: boolean) => {
    setHasUnreadNotifications(value);
  };

  // Обработчик для лайкп
  const onLikeToggle = (value: boolean) => {
    setIsLiked(value);
  };

  const handleCloseForm = () => {
    navigate(-1); // Перешли на предыдущую страницу
    onCloseForm();
  };

  if (isFormOpen) {
    return (
      <header className={`${styles.header} ${styles.headerFormOpen}`}>
        <div className={styles.leftSection}>
          <Link to='/'>
            <img
              src={SkillSwapLogo}
              alt='SkillSwap Logo'
              className={styles.logo}
            />
          </Link>
        </div>
        <div className={styles.rightSection}>
          <Button variant='secondary' size='medium' onClick={handleCloseForm}>
            Закрыть
            <img src={ClearIcon} alt='Close' className={styles.clearIcon} />
          </Button>
        </div>
      </header>
    );
  }
  return (
    <header className={styles.header}>
      <div className={styles.leftSection}>
        <Link to='/'>
          <img
            src={SkillSwapLogo}
            alt='SkillSwap Logo'
            className={styles.logo}
          />
        </Link>
        <button className={styles.aboutProjectButton}>О проекте</button>
        <button className={styles.allSkillsButton}>
          Все навыки
          <span className={styles.dropdownArrow}>
            <img src={Arrow} alt='Arrow' />
          </span>
        </button>
      </div>

      <div className={styles.centerSection}>
        <SearchBar
          placeholder='Искать навык'
          submit={handleSearchSubmit}
          size='medium'
        />
      </div>

      <div className={styles.rightSection}>
        <MoonIcon />
        {isLoggedIn ? (
          <>
            <Notification
              checked={hasUnreadNotifications}
              onChange={handleNotificationToggle}
            />
            <div className={styles.like}>
              <ToggleLike onChange={onLikeToggle} checked={isLiked} />
            </div>
            <Link to='/profile' className={styles.userProfile}>
              {data?.name && (
                <span className={styles.userName}>{data.name}</span>
              )}
              {data && (
                <div
                  className={styles.userAvatar}
                  style={{
                    backgroundImage: `url(./images/${data.photos})`
                  }}
                />
              )}
            </Link>
          </>
        ) : (
          <div className={styles.buttonContainer}>
            <Link to='/login'>
              <Button variant='secondary' size='medium' onClick={() => {}}>
                Войти
              </Button>
            </Link>
            <Link to='/register'>
              <Button variant='primary' size='medium' onClick={() => {}}>
                Зарегистрироваться
              </Button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};
