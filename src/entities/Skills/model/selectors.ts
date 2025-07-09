import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '@app/store/store';

const getSkillsData = (state: RootState) => state.skills;

export const selectAllSkills = createSelector(
  getSkillsData,
  (state) => state.skills
);

export const selectSkillByName = createSelector(
  [getSkillsData, (_, name: string) => name],
  (state, name) => state.skills.find((skill) => skill.name === name)
);

export const selectSkillById = createSelector(
  [getSkillsData, (_, id: string) => id],
  (state, id) => state.skills.find((skill) => skill._id === id)
);
