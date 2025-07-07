import React from 'react';
import styles from './CheckboxList.module.css';
import { CheckboxOption } from './CheckboxOption';
import type { CheckboxListOptionType } from './CheckboxOption';
import { Text } from '../../Text/Text';
import { useState } from 'react';

type CheckboxListProps = {
  name: string;
  options: CheckboxListOptionType[];
  selected: string[];
  onChange?: (value: string) => void;
  title?: string;
  isSubcategory?: boolean;
  checkboxClass?: string;
  onClick?: () => void;
};

export const CheckboxList = (props: CheckboxListProps) => {
  const { name, options, selected, onChange, title, checkboxClass, onClick } = props;

  const handleChange = (value: string) => onChange?.(value);

  const [selectedOptions, setselectedOptions] = useState<string[]>([]);

  const selectOption = (value: string) => {
    setselectedOptions((prev) =>
      prev.includes(value) ? prev.filter((s) => s !== value) : [...prev, value]
    );
  };

  return (
    <div className={styles.container}>
      {title && (
        <>
          <Text as='h3' color='text'>
            {title}
          </Text>
        </>
      )}
      <div className={styles.group}>
        {options.map((option) => (
          <CheckboxOption
            key={option.value}
            groupName={name}
            value={option.value}
            selected={selectedOptions}
            onChange={() => selectOption}
            option={option}
            checkboxClass={checkboxClass}
            onClick={onClick}
          />
        ))}
      </div>
    </div>
  );
};
