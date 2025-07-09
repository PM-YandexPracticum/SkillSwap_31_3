import { FC } from 'react';
import { Modal } from '@shared/ui/modal/modal';
import { ModalUI } from '@shared/ui/modal/modalUI';
import doneIcon from '../../../../images/Done.svg';
import styles from '../modal.module.css';
import React from 'react';

interface Props {
  onClose: () => void;
}

export const Offered: FC<Props> = ({ onClose }) => {
  return (
    <Modal onClose={onClose}>
      <ModalUI onClose={onClose}>
        <img
          src={doneIcon}
          alt='иконка успеха'
          className={styles['modal-icon']}
        />
        <h2 className={styles['modal-title']}>Ваше предложение создано</h2>
        <p className={styles['modal-subtitle']}>
          Теперь вы можете предложить обмен
        </p>
        <button className={styles['modal-button']} onClick={onClose}>
          Готово
        </button>
      </ModalUI>
    </Modal>
  );
};
