import { FC } from 'react';
import { Modal } from '../modal';
import { ModalUI } from '../modalUI';
import styles from '../modal.module.css';
import React from 'react';

type Props = {
  onClose: () => void;
  submit: () => void;
  title: string;
  description: string;
  images: string[];
};

export const ConfirmModal: FC<Props> = ({
  onClose,
  submit,
  title,
  description,
  images
}) => {
  return (
    <Modal onClose={onClose}>
      <ModalUI onClose={onClose}>
        <div className={styles.modalContent}>
          <div className={styles.modalTitle}>Ваше предложение</div>
          <div className={styles.modalSubtitle}>
            Пожалуйста, проверьте и подтвердите правильность данных
          </div>

          <h3>{title}</h3>

          <p>{description}</p>

          <div className={styles.imageList}>
            {images.map((src, index) => (
              <img key={index} src={src} alt={`Фото ${index + 1}`} />
            ))}
          </div>

          <div className={styles.buttonRow}>
            <button onClick={onClose} className={styles.modalButton}>
              Редактировать
            </button>
            <button onClick={submit} className={styles.modalButton}>
              Готово
            </button>
          </div>
        </div>
      </ModalUI>
    </Modal>
  );
};
