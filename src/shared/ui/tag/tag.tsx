import React from 'react';
import styles from './tag.module.css';
import { TColors } from '../types';

interface TagProps {
  text: string;
  textColor: TColors;
  backgroundColor: TColors;
}

export const Tag: React.FC<TagProps> = ({
  text = 'Тег',
  textColor,
  backgroundColor
}) => (
  <span
    className={`${styles.tag}`}
    style={{
      color: `var(--${textColor})`,
      backgroundColor: `var(--${backgroundColor})`
    }}
  >
    {text}
  </span>
);
