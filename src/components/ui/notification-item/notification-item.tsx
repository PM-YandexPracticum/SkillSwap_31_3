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
  backgroundColor = 'rgba(222, 235, 197, 1)',
  textColor = 'rgba(37, 48, 23, 1)',
  onClose,
  onAction
}) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      className={styles.notificationItem}
      style={{ backgroundColor, color: textColor }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.iconContainer}>
        <img
          src={LightbulbIcon}
          alt='Иконка лампочки'
          className={styles.icon}
        />
      </div>
      <span className={styles.text}>{text}</span>
      <button className={styles.closeButton} onClick={onClose}>
        <img src={ClearIcon} alt='Закрыть' className={styles.closeIcon} />
      </button>

      {isHovered && (
        <button className={styles.actionButton} onClick={onAction}>
          Перейти
        </button>
      )}
    </div>
  );
};

export default NotificationItem;
