import React from 'react';
import styles from './tag.module.css';

interface TagProps {
  text: string;
  textColor: string;
  backgroundColor: string;
}

export const Tag: React.FC<TagProps> = ({
  text,
  textColor,
  backgroundColor
}) => {
  return (
    <label className={`${styles.tag}`} style={{color: `${textColor}`, backgroundColor: `${backgroundColor}`}}>
      { text }
    </label>
  );
}
