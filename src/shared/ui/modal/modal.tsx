import { FC, useEffect, memo } from 'react';
import ReactDOM from 'react-dom';
import { ModalUI } from './modalUI';
import React from 'react';

interface ModalProps {
  title?: string;
  onClose: () => void;
  children: React.ReactNode;
}

const modalRoot = document.getElementById('modals');

export const Modal: FC<ModalProps> = memo(({ onClose, children }) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!modalRoot) return null;

  return ReactDOM.createPortal(
    <ModalUI onClose={onClose}>{children}</ModalUI>,
    modalRoot
  );
});
