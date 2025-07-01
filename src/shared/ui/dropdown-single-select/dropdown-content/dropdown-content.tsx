import React, { FC } from 'react';
import styles from './dropdown-content.module.css';
import { DropdownContentUIProps } from './type';

export const DropdownContentUI: FC<DropdownContentUIProps> = ({
  children,
  open
}) => (
  <div
    className={`${styles.dropdown_content} ${open ? styles.content_open : null}`}
  >
    {children}
  </div>
);
