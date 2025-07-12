import React, { FC, useEffect, useState } from 'react';
import { TFilterProps } from '@pages/usersPage/filtersPanel/filtersPanel.types';
import styles from '@shared/ui/FiltersArea/FiltersArea.module.css';
import { RadioGroup } from '@shared/ui/FiltersArea/radio-group/RadioGroup';

export const GenderFilter: FC<TFilterProps> = ({ setFilters }) => {
  const [userSex, setUserSex] = useState<string>('Не имеет значения');

  useEffect(() => {
    let gender = 'all';
    if (userSex === 'Женский') {
      gender = 'female';
    }
    if (userSex === 'Мужской') {
      gender = 'male';
    }

    setFilters((prev) => ({
      ...prev,
      gender: gender
    }));
  }, [userSex]);

  return (
    <section className={styles.section}>
      <RadioGroup
        title='Пол автора'
        name={'radio-group_sex'}
        options={[
          { value: 'Не имеет значения' },
          { value: 'Женский' },
          { value: 'Мужской' }
        ]}
        selected={userSex}
        onChange={setUserSex}
      />
    </section>
  );
};
