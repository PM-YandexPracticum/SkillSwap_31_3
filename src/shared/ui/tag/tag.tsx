import React from 'react';
import styles from './tag.module.css';
import { TColors } from '../types';

interface TagProps {
  text: string;
  textColor: TColors;
  backgroundColor: TColors;
}

export const Tag: React.FC<TagProps> = ({
  text,
  textColor,
  backgroundColor
}) => (
  <span
    className={`${styles.tag}`}
    style={{ color: `${textColor}`, backgroundColor: `${backgroundColor}` }}
  >
    {text}
  </span>
);
