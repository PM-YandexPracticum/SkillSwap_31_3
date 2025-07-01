import React, { FC } from 'react';
import styles from './dropdown-item.module.css';
import { DropdownItemUIProps } from './type';
import { Text } from '../../Text/Text';

export const DropdownItemUI: FC<DropdownItemUIProps> = ({
  children,
  onClick,
  className
}) => (
  <div className={styles.dropdown_item} onClick={onClick}>
    {className === 'active' ? (
      <Text color='text-link'>{children}</Text>
    ) : (
      <Text color='text'>{children}</Text>
    )}
  </div>
);
