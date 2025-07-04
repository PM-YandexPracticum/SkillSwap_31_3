import React from 'react';
import { useRouteError, isRouteErrorResponse, Link } from 'react-router-dom';
import styles from './ServerErrorPage.module.css';
import iconError500 from './error500.png';
import iconOtherError from './otherError.png';
import { Button } from '../../shared/ui/button/button';
type ErrorType = '500' | 'otherError';

interface ErrorConfig {
  title: string;
  description: string;
  icon: string;
  alt: string;
}

export const ServerErrorPage = () => {
  const error = useRouteError();

  const determineErrorType = (): ErrorType => {
    if (isRouteErrorResponse(error)) {
      return error.status === 500 ? '500' : 'otherError';
    }
    return 'otherError';
  };

  const errorType = determineErrorType();

  const errorConfig: Record<ErrorType, ErrorConfig> = {
    '500': {
      title: 'На сервере произошла ошибка',
      description: 'Попробуйте позже или вернитесь на главную страницу',
      icon: iconError500,
      alt: 'Ошибка 500'
    },
    otherError: {
      title: 'Произошла ошибка',
      description: 'Попробуйте позже или вернитесь на главную страницу',
      icon: iconError500,
      alt: 'Ошибка'
    }
  };

  const { title, description, icon, alt } = errorConfig[errorType];

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
