import { Suspense, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { MoonLoader } from 'react-spinners';

import { useDispatch } from '@app/store/store';
import { skillsThunk } from '@entities/Skills';

import styles from './content-layout.module.css';

export const ContentLayout = () => {
  const { pathname } = useLocation();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(skillsThunk.getSkills());
  }, []);

  return (
    <div>
      <h1>Header</h1> {/* Здесь должен будет быть компонент Header */}
      <Suspense
        fallback={
          <div className={styles.center}>
            <MoonLoader />
          </div>
        }
      >
        <Outlet />
      </Suspense>
      {pathname !== '/register' && pathname !== '/login' && <h1>Footer</h1>}
      {/* Здесь должен будет быть компонент Footer */}
    </div>
  );
};
