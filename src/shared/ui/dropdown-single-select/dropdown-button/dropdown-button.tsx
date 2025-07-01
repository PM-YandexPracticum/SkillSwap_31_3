import React, { FC } from 'react';
import styles from './dropdown-button.module.css';
import { DropdownButtonUIProps } from './type';
import { Text } from '../../Text/Text';
import 'primeicons/primeicons.css';

export const DropdownButtonUI: FC<DropdownButtonUIProps> = ({
  children,
  open,
  toggle,
  className
}) => (
  <div className={`${styles.container} ${open ? styles.container_open : null}`}>
    <div
      className={`${styles.dropdown_btn} ${open ? styles.button_open : null}`}
      onClick={toggle}
    >
      {className === 'active' ? (
        <Text color='text'>{children}</Text>
      ) : (
        <Text color='caption'>{children}</Text>
      )}
      {open ? (
        <span className='pi pi-chevron-down' />
      ) : (
        <span className='pi pi-chevron-up' />
      )}
    </div>
  </div>
);
