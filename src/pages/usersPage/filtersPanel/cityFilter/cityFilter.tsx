import React, { FC, useEffect, useState } from 'react';
import { CheckboxList } from '@shared/ui/FiltersArea/checkbox-lists/CheckboxList';
import styles from '@shared/ui/FiltersArea/FiltersArea.module.css';
import clsx from 'clsx';
import { Text } from '@shared/ui';
import { getUniqCities } from '@shared/lib/getUniqCities';
import { TUserCard } from '@api/types';
import { Filters } from '@pages/usersPage/usersPage';

type CityFilterProps = {
  setFilters: (filter: (prev: Filters) => any) => void;
  usersData: TUserCard[];
};

export const CityFilter: FC<CityFilterProps> = ({ setFilters, usersData }) => {
  const cities = getUniqCities(usersData);

  const [showAllCities, setShowAllCities] = useState(false);
  const [selectedCities, setSelectCities] = useState<string[]>([]);

  const toggleCity = (value: string) => {
    setSelectCities((prev) =>
      prev.includes(value) ? prev.filter((c) => c !== value) : [...prev, value]
    );
  };

  useEffect(() => {
    setFilters((prev) => ({
      ...prev,
      cities: selectedCities
    }));
  }, [selectedCities]);

  return (
    <section className={styles.section}>
      <CheckboxList
        title={'Город'}
        name={'checkboxList_cities'}
        options={showAllCities ? cities : cities.slice(0, 5)}
        selected={[]}
        onChange={toggleCity}
        boxClass={clsx(styles.boxSubcategory)}
      />
      <button
        type='button'
        className={styles.toggleButton}
        onClick={() => setShowAllCities(!showAllCities)}
      >
        <Text as='bodyText' color='text-link'>
          Все города
        </Text>
        <span
          className={clsx(styles.chevronIcon, {
            [styles.open]: showAllCities
          })}
        />
      </button>
    </section>
  );
};
