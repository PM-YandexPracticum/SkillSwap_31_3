import React, { FC, useEffect } from 'react';
import { ModeFilter } from '@pages/usersPage/filtersPanel/modeFilter';
import { SkillFilter } from '@pages/usersPage/filtersPanel/skillFilter';
import { GenderFilter } from '@pages/usersPage/filtersPanel/genderFilter';
import { CityFilter } from '@pages/usersPage/filtersPanel/cityFilter';
import { Filters } from '@pages/usersPage/usersPage';
import { TSkill, TUserCard } from '@api/types';
import styles from '@pages/usersPage/usersPage.module.css';
import { Text } from '@shared';
import { Button } from '@shared/ui/button/button';
import crossIcon from '../../../shared/assets/icons/cross.svg';

type FiltersPanelProps = {
  setFilters: (filter: (prev: Filters) => any) => void;
  skillsData: TSkill[];
  usersData: TUserCard[];
};

export const FiltersPanel: FC<FiltersPanelProps> = ({
  setFilters,
  skillsData,
  usersData
}) => {
  const handleResetClick = () => {
    setFilters((prev) => ({
      ...prev,
      mode: 'Все',
      gender: 'all',
      cities: [],
      skillIds: [] // id подкатегорий или навыков
    }));
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.heading}>
        <Text as='h2' color='text'>
          Фильтры
        </Text>
        <div className={styles.reset}>
          <Button
            children={'Сбросить'}
            onClick={handleResetClick}
            variant={'tertiary'}
            type={'reset'}
          />
          <img src={crossIcon} alt='Сброс' />
        </div>
      </div>
      <ModeFilter setFilters={setFilters} />
      <SkillFilter setFilters={setFilters} skillsData={skillsData} />
      <GenderFilter setFilters={setFilters} />
      <CityFilter setFilters={setFilters} usersData={usersData} />
    </div>
  );
};
