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
import { useEffect } from 'react';

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
  return (
    <div className={styles.app}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/skill' element={<Skill />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<NotFound404 />} />
      </Routes>
      )
    </div>
  );
};

export default App;
