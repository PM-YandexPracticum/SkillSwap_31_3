import { createAsyncThunk } from '@reduxjs/toolkit';
import { getSkillsApi, TSkillsResponse } from '@shared/api';

export const skillsThunk = {
  getSkills: createAsyncThunk<TSkillsResponse>('getSkills/get', () =>
    getSkillsApi()
  )
};
