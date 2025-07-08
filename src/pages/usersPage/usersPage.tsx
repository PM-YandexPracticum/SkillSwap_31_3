import { FC } from 'react';
import { useState, useMemo } from 'react';
import { UsersGrid } from '@pages/usersPage/usersGrid';
import { FiltersPanel } from '@pages/usersPage/filtersPanel';
import { useSelector } from '@app/store/store';
import { selectUserCards } from '@entities/UserCards/model/selectors';
import { selectAllSkills } from '@entities/Skills/model/selectors';

import styles from '@pages/usersPage/usersPage.module.css';

export type Filters = {
  mode: string;
  gender: string;
  cities: string[];
  skillIds: string[];
};

export const UsersPage: FC = () => {
  const usersData = useSelector(selectUserCards);
  const skillsData = useSelector(selectAllSkills);

  const [filters, setFilters] = useState<Filters>({
    mode: 'Все',
    gender: 'all',
    cities: [],
    skillIds: [] // id подкатегорий или навыков
  });

  const filteredUsers = useMemo(
    () =>
      usersData.filter((user) => {
        let isCity = true;
        if (filters.cities.length !== 0) {
          isCity = filters.cities.includes(user.city);
        }

        let isGender = true;
        if (filters.gender !== 'all') {
          isGender = filters.gender === user.gender;
        }

        let isSkills = true;
        if (filters.skillIds.length !== 0) {
          if (filters.mode === 'Хочу научиться') {
            isSkills = filters.skillIds.includes(user.skillId);
          }

          if (filters.mode === 'Могу научить') {
            const skillWants = new Set(user.skillWants);
            return filters.skillIds.some((skillId) => skillWants.has(skillId));
          }
        }

        return isCity && isGender && isSkills;
      }),
    [usersData, filters]
  );

  // console.log(filters);
  // console.log(filteredUsers);

  return (
    <div className={styles.layout}>
      <FiltersPanel
        setFilters={setFilters}
        skillsData={skillsData}
        usersData={usersData}
      />
      <UsersGrid filteredUsers={filteredUsers} />
    </div>
  );
};
