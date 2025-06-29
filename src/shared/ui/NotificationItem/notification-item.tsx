import React from 'react';
import styles from './notification-item.module.css';
import LightbulbIcon from '../../../images/idea.svg';
import ClearIcon from '../../../images/cross.svg';

interface NotificationItemProps {
  text: string;
  backgroundColor?: string;
  textColor?: string;
  onClose: () => void;
  onAction?: () => void;
}

const NotificationItem: React.FC<NotificationItemProps> = ({
  text,
  backgroundColor = 'var(--button-hover)',
  textColor = 'var(--text)',
  onClose,
  onAction
}) => (
  <div
    className={styles.notificationItem}
    style={{ backgroundColor, color: textColor }}
  >
    <div className={styles.iconContainer}>
      <img src={LightbulbIcon} alt='Иконка лампочки' className={styles.icon} />
    </div>
    <span className={styles.text}>{text}</span>
    <button
      className={styles.closeButton}
      onClick={onClose}
      aria-label='Закрыть уведомление'
    >
      <img src={ClearIcon} alt='Закрыть' className={styles.closeIcon} />
    </button>

    {onAction && (
      <button
        className={styles.actionButton}
        onClick={onAction}
        aria-label='Перейти'
      >
        Перейти
      </button>
    )}
  </div>
);

export default NotificationItem;
