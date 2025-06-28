import { useRef } from 'react';
import styles from './RadioGroup.module.css';
import React from 'react';
import { Text } from '../../../shared/ui/Text/Text';

export type RadioOptionType = {
  title: string;
  value: string;
  className: string;
  optionClassName?: string;
};

type RadioOptionProps = {
  value: RadioOptionType['value'];
  title: RadioOptionType['title'];
  selected: RadioOptionType;
  groupName: string;
  onChange?: (option: RadioOptionType) => void;
  option: RadioOptionType;
};

export const RadioOption = (props: RadioOptionProps) => {
  const { value, title, selected, groupName, onChange, option } = props;

  const optionRef = useRef<HTMLDivElement>(null);

  const handleChange = () => onChange?.(option);

  const inputId = `${groupName}_radio_item_with_value__${value}`;
  const isChecked = value === selected.title;

  return (
    <div
      className={styles.item}
      key={value}
      data-checked={isChecked}
      data-testid={inputId}
      tabIndex={0}
      ref={optionRef}
    >
      <input
        className={styles.radio}
        type='radio'
        name={groupName}
        id={inputId}
        value={value}
        onChange={handleChange}
        tabIndex={-1}
      />
      <label className={styles.label} htmlFor={inputId}>
        <Text as='bodyText' color='text'>
          {title}
        </Text>
      </label>
    </div>
  );
};
