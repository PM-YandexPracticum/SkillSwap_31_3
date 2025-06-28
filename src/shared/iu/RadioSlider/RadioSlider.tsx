import React, { useState } from 'react';
import styles from './RadioSlider.module.css';

type TSize = 'small' | 'medium' | 'large';

type RadioSliderProps = {
  onChange?: () => void;
  color?: string;
  activeColor?: string;
  size?: TSize;
  isOn?: boolean;
};

export const RadioSlider = (props: RadioSliderProps) => {
  const {
    onChange,
    color = '#B2B9A9',
    activeColor = '#ABD27A',
    size = 'medium',
    isOn = false
  } = props;
  const [isChecked, setIsChecked] = useState(isOn);

  const handleClick = () => {
    setIsChecked(!isChecked);
    if (onChange) {
      onChange();
    }
  };

  return (
    <>
      <input
        className={styles.switchCheckbox}
        id={`switch`}
        type='checkbox'
        checked={isChecked}
        onChange={handleClick}
      />
      <label
        className={`${styles.switchLabel} ${styles[`size-${size}`]}`}
        htmlFor={`switch`}
        style={{ background: isChecked ? activeColor : color }}
      >
        <span className={styles.switchButton} />
      </label>
    </>
  );
};
