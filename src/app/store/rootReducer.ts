import { combineReducers } from '@reduxjs/toolkit';

import { skillsReducer } from '@entities/Skills';
import { userReducer } from '@entities/User/store';

const rootReducer = combineReducers({
  skills: skillsReducer,
  user: userReducer
});

export default rootReducer;
