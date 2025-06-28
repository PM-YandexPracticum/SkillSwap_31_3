import { RadioOption } from './RadioOption';
import { Text } from '../../../shared/ui/Text/Text';
import type { RadioOptionType } from './RadioOption';
import styles from './RadioGroup.module.css';
import React from 'react';

type RadioGroupProps = {
  name: string;
  options: RadioOptionType[];
  selected: RadioOptionType;
  onChange?: (value: RadioOptionType) => void;
  title: string;
};

export const RadioGroup = (props: RadioGroupProps) => {
  const { name, options, selected, onChange, title } = props;

  const handleChange = (option: RadioOptionType) => onChange?.(option);

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
          <RadioOption
            key={option.value}
            groupName={name}
            value={option.value}
            title={option.title}
            selected={selected}
            onChange={() => handleChange(option)}
            option={option}
          />
        ))}
      </div>
    </div>
  );
};
