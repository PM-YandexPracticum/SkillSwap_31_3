import React, { FC, useEffect, useState } from 'react';
import { TFilterProps } from '@pages/usersPage/filtersPanel/filtersPanel.types';
import styles from '@shared/ui/FiltersArea/FiltersArea.module.css';
import { RadioGroup } from '@shared/ui/FiltersArea/radio-group/RadioGroup';

export const ModeFilter: FC<TFilterProps> = ({ setFilters }) => {
  const [selectMode, setSelectMode] = useState('Все');

  useEffect(() => {
    setFilters((prev) => ({
      ...prev,
      mode: selectMode
    }));
  }, [selectMode]);

  return (
    <section className={styles.section}>
      <RadioGroup
        title=''
        name={'radio-group_all'}
        options={[
          { value: 'Все' },
          { value: 'Хочу научиться' },
          { value: 'Могу научить' }
        ]}
        selected={selectMode}
        onChange={setSelectMode}
      />
    </section>
  );
};
