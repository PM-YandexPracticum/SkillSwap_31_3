import React from 'react';
import { useRouteError, isRouteErrorResponse } from 'react-router-dom';
import styles from './ErrorPage.module.css';
import iconError404 from './error404.png';
import iconError500 from './error500.png';

export const ErrorPage = () => {
  const error = useRouteError();

  // Определяем тип ошибки
  let errorType;
  if (isRouteErrorResponse(error)) {
    errorType = error.status === 404 ? '404' : '500';
  } else {
    // Это JavaScript-ошибка (краш компонента)
    errorType = '500';
  }

  const is404 = errorType === '404';
  const title = is404 ? 'Страница не найдена' : 'На сервере произошла ошибка';
  const description = is404
    ? 'К сожалению, эта страница недоступна. Вернитесь на главную страницу или попробуйте позже'
    : 'Попробуйте позже или вернитесь на главную страницу';

  return (
    <div className='error-page'>
      <div className='error-content'>
        <img
          src={is404 ? iconError404 : iconError500}
          alt={is404 ? 'Ошибка 404' : 'Ошибка 500'}
          className='error-image'
        />

        <h1 className='error-title'>{title}</h1>

        <p className='error-description'>{description}</p>

        <div className='error-actions'>
          <button className='error-button report-button'>
            Сообщить об ошибке
          </button>
          <button
            className='error-button home-button'
            onClick={() => (window.location.href = '/')}
          >
            На главную
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
