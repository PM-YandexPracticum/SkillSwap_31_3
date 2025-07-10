import {
  Home,
  ProfilePage,
  Modal,
  Login,
  Register,
  ProtectedRoute,
  NotFound404,
  Error500,
  Skill
} from '@pages';

import './styles/index.css';
import styles from './app.module.css';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Header, Footer } from '@features';
import { TUser } from '@api';
import { useDispatch } from './store/store';
import { userCardsThunk } from '@entities/UserCards';
import { skillsThunk } from '@entities/Skills';
import { useSelector } from 'react-redux';
import { selectUser } from '@entities';

const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //const loading = useSelector(getLoading);
  //const error = useSelector(getError);

  const location = useLocation();
  const background = location.state && location.state.background;
  const userData = useSelector(selectUser);
  const isLoggedIn = false;

  useEffect(() => {
    dispatch(userCardsThunk.getUserCards());
    dispatch(skillsThunk.getSkills());
  }, []);

  return (
    <div className={styles.app}>
      <Header isLoggedIn={isLoggedIn} data={userData?.userCard} />
      <div className={styles.main}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/skillCard' element={<Skill />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='/login' element={<NotFound404 />} />
          <Route path='/register' element={<NotFound404 />} />
          <Route path='*' element={<NotFound404 />} />
        </Routes>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default App;
