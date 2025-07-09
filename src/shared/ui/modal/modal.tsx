import { FC, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Overlay } from './overlay';
import React from 'react';

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal: FC<ModalProps> = ({ onClose, children }) => {
  const [modalRoot, setModalRoot] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const element = document.getElementById('modals');
    setModalRoot(element);

    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  if (!modalRoot) return null;

  return createPortal(
    <Overlay onClick={onClose}>{children}</Overlay>,
    modalRoot
  );
};
