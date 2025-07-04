
//import { MainPage } from '../pages/MainPage/MainPage';

//export const App = () => {
  //return (
 //   <div>
  //    <MainPage />
 //   </div>
//  );
//};



import {
  Home,
  Profile,
  Skill,
  Modal,
  Login,
  Register,
  ProtectedRoute,
  NotFound404,
  Error500
} from '@pages';
import './styles/index.css';
import styles from './app.module.css';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
//import { example } from '@widgets';
//import { useDispatch, useSelector } from '../../services/store';
//import {getError,getIngredientsThunk,getLoading,getData} from '../../services/slices/ingredientsSlice/ingredientsSlice';
//import { getUser } from '../../services/slices/userSlice/userSlice';
import { useEffect, useState } from 'react';
import Header from '../features/ui/Header/Header';
import { Footer } from '../features/ui/Footer/Footer';
import { TUser } from '@app/styles/typs';

const App = () => {
  //const disp = useDispatch();
  const navigate = useNavigate();
  //const ingredients = useSelector(getData);
  //const loading = useSelector(getLoading);
  //const error = useSelector(getError);

  // useEffect(() => {
  //   disp(getIngredientsThunk());
  //   disp(getUser());
  // }, [disp]);

  const location = useLocation();
  const background = location.state && location.state.background;

  //мок логики для header
  const [userData, setUserData] = useState<TUser | undefined>(undefined);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('/db/users.json');
        if (!response.ok) {
          throw new Error(`Ошибка: ${response.status}`);
        }
        const users = await response.json();

        if (users) {
          setUserData(users.data[0] as TUser);
        } else {
          console.warn('users.json пустой или имеет не ту структуру');
          setUserData(undefined);
        }
      } catch (error) {
        console.error('Не смог загрузить users.json:', error);
        setUserData(undefined);
      }
    };

    fetchUserData();
  }, []);

  const isLoggedIn = !!userData;
  //конец логики header

  return (
    <div className={styles.app}>
      <Header isLoggedIn={isLoggedIn} data={userData} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/skill' element={<Skill />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<NotFound404 />} />
      </Routes>
      <Footer />)
    </div>
  );
};

export default App;
