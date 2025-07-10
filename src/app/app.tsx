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
import { ConfirmModal, Created, NeedRegister, Offered } from '@widgets';
import './styles/index.css';
import styles from './app.module.css';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Header, Footer } from '@features';
import { TUser } from '@api';
import { userCardsThunk } from '@entities/UserCards';
import { skillsThunk } from '@entities/Skills';
import { useSelector, useDispatch } from './store/store';
import { selectUser } from '@entities';

const mockData = {
  email: 'test@mail.ru',
  password: '1111',
  name: 'Василий',
  city: 'Томск',
  age: '',
  description: 'Что-то. О чём-то',
  gender: 'Мужской',
  avatar: undefined,
  photos: [],
  skillName: 'SomeSkill',
  skillCanTeachCategory: '1',
  skillCanTeachSubCategory: '1',
  skillWants: ['1'],
  skillId: '1'
};

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
        <Routes location={background || location}>
          <Route path='/' element={<Home />} />

          <Route
            path='/skill/exchenge'
            element={<Created onClose={() => navigate(-1)} />}
          />

          <Route path='/skill' element={<Skill />} />
          <Route
            path='/profile'
            index
            element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            }
          />
          <Route
            path='/login'
            element={
              <ProtectedRoute onlyUnAuth>
                <Login />
              </ProtectedRoute>
            }
          />
          <Route
            path='/register/confirm'
            element={
              <ProtectedRoute>
                <ConfirmModal
                  onClose={() => navigate(-1)}
                  data={mockData}
                  submit={() => navigate('/offered')}
                />
              </ProtectedRoute>
            }
          />

          <Route
            path='/register'
            element={
              <ProtectedRoute onlyUnAuth>
                <Register />
              </ProtectedRoute>
            }
          />
          <Route path='*' element={<NotFound404 />} />
        </Routes>

        {background && (
          <Routes>
            <Route
              path='/offered'
              element={
                <ProtectedRoute>
                  <Offered onClose={() => navigate('/')} />
                </ProtectedRoute>
              }
            />
          </Routes>
        )}
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default App;
