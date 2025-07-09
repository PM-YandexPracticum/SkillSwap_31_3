import { FC, MouseEvent } from 'react';
import styles from './modal.module.css';
import React from 'react';

interface ModalUIProps {
  onClose: () => void;
  children: React.ReactNode;
}

export const ModalUI: FC<ModalUIProps> = ({ children }) => {
  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <div className={styles.modal} onClick={handleClick}>
      {children}
    </div>
  );
};
