import React, { FC, useEffect, useRef, useState } from 'react';
import styles from './dropdown.module.css';
import { DropdownButtonUI } from '../dropdown-button';
import { DropdownContentUI } from '../dropdown-content';
import { DropdownUIProps } from './type';
import { DropdownItemUI } from '../dropdown-item';
import { Text } from '../../Text/Text';

export const DropdownUI: FC<DropdownUIProps> = ({
  placeholder,
  values,
  label
}) => {
  const [value, setValue] = useState(placeholder);
  const [open, setOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropDown = () => {
    setOpen((open) => !open);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      };
    }

    const handleEscPress = (event: KeyboardEvent) => {
      if (event.key == 'Escape') {
        setOpen(false)
      }
    }

    if(open) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscPress);

    } else {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscPress);
    };

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscPress);
    }
  }, [open])

  return (
    <div className={styles.container}>
      <Text color='text'>{label}</Text>
      <div className={`${styles.dropdown} ${value ? styles.no_value : null}`} ref={dropdownRef}>
        <DropdownButtonUI
          className={`${value !== placeholder ? 'active' : null}`}
          open={open}
          toggle={toggleDropDown}
        >
          {value ? value : placeholder}
        </DropdownButtonUI>
        {open ?
          <DropdownContentUI open={open}>
            {values.map((el, index) => (
              <DropdownItemUI
                className={el === value ? 'active' : ''}
                key={index}
                onClick={() => {setValue(el); setOpen(false)}}
              >
                {el}
              </DropdownItemUI>
            ))}
          </DropdownContentUI>
          :
          null
        }
      </div>
    </div>
  );
};
