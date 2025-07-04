import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFoundPage.module.css';
import iconError404 from './error404.png';
import { Button } from '../../shared/ui/button/button';

type ErrorType = '404';

interface ErrorConfig {
  title: string;
  description: string;
  icon: string;
  alt: string;
}

export const NotFoundPage = () => {
  const errorConfig: Record<ErrorType, ErrorConfig> = {
    '404': {
      title: 'Страница не найдена',
      description:
        'К сожалению, эта страница недоступна. Вернитесь на главную страницу или попробуйте позже',
      icon: iconError404,
      alt: 'Ошибка 404'
    }
  };

  const { title, description, icon, alt } = errorConfig['404'];

  return (
    <div className={styles.errorPage}>
      <div className={styles.errorContent}>
        <img src={icon} alt={alt} className={styles.errorImage} />
        <h1 className={styles.errorTitle}>{title}</h1>
        <p className={styles.errorDescription}>{description}</p>
        <div className={styles.errorActions}>
          <Button size='large' variant='secondary' onClick={() => {}}>
            Сообщить об ошибке
          </Button>
          <Link to='/'>
            <Button size='large' variant='primary' onClick={() => {}}>
              На главную
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
