import styles from './CheckboxList.module.css';
import React from 'react';
import { useRef } from 'react';
import { ButtonEl } from './ButtonEl';
import { Text } from '../../../shared/ui/Text/Text';

export type CheckboxListOptionType = {
  title: string;
  value: string;
  className: string;
  optionClassName?: string;
};

type CheckboxListOptionProps = {
  value: CheckboxListOptionType['value'];
  title: CheckboxListOptionType['title'];
  selected: CheckboxListOptionType;
  groupName: string;
  onChange?: (option: CheckboxListOptionType) => void;
  option: CheckboxListOptionType;
};

export const CheckboxOption = (props: CheckboxListOptionProps) => {
  const { value, title, selected, groupName, onChange, option } = props;

  const optionRef = useRef<HTMLDivElement>(null);

  const handleChange = () => onChange?.(option);

  const inputId = `${groupName}_checkbox_item_with_value__${value}`;
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
        type='checkbox'
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
      <div className={styles.group_checkboxOption_buttonContainer}>
        <ButtonEl />
      </div>
    </div>
  );
};
