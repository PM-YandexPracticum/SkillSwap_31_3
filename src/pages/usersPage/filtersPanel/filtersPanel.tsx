import React, { FC } from 'react';
import { ModeFilter } from '@pages/usersPage/filtersPanel/modeFilter';
import { SkillFilter } from '@pages/usersPage/filtersPanel/skillFilter';
import { GenderFilter } from '@pages/usersPage/filtersPanel/genderFilter';
import { CityFilter } from '@pages/usersPage/filtersPanel/cityFilter';
import { Filters } from '@pages/usersPage/usersPage';
import { TSkill, TUserCard } from '@api/types';
import styles from '@pages/usersPage/usersPage.module.css';
import { Text } from '@shared';

type FiltersPanelProps = {
  setFilters: (filter: (prev: Filters) => any) => void;
  skillsData: TSkill[];
  usersData: TUserCard[];
};

export const FiltersPanel: FC<FiltersPanelProps> = ({
  setFilters,
  skillsData,
  usersData
}) => (
  <>
    <div className={styles.sidebar}>
      <Text as='h2' color='text'>
        Фильтры
      </Text>
      <ModeFilter setFilters={setFilters} />
      <SkillFilter setFilters={setFilters} skillsData={skillsData} />
      <GenderFilter setFilters={setFilters} />
      <CityFilter setFilters={setFilters} usersData={usersData} />
    </div>
  </>
);
