import React from 'react';
import { FAKEUserCard } from '../../shared/ui/FAKEUserCard';
import './MainPage.css';

/* Когда будут реальные данные сколько будет карточек, заменю эти переменные на настоящие массивы */
const POPULAR_USERS = 4;
const NEW_USERS = 3;
const RECOMMENDED_USERS = 8;

export const MainPage: React.FC = () => (
  <main className='main-page'>
    <section>
      <h2>Популярное</h2>
      <div className='grid-section'>
        {Array.from({ length: POPULAR_USERS }).map((_, i) => (
          <FAKEUserCard key={`pop-${i}`} />
        ))}
      </div>
    </section>

    <section>
      <h2>Новое</h2>
      <div className='grid-section'>
        {Array.from({ length: NEW_USERS }).map((_, i) => (
          <FAKEUserCard key={`new-${i}`} />
        ))}
      </div>
    </section>

    <section>
      <h2>Рекомендуем</h2>
      <div className='grid-section'>
        {Array.from({ length: RECOMMENDED_USERS }).map((_, i) => (
          <FAKEUserCard key={`rec-${i}`} />
        ))}
      </div>
    </section>
  </main>
);
