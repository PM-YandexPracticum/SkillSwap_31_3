import { FC, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Overlay } from './overlay';
import React from 'react';

interface ModalLogicProps {
  onClose: () => void;
  children: React.ReactNode;
}

export const ModalLogic: FC<ModalLogicProps> = ({ onClose, children }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return createPortal(
    <Overlay onClick={onClose}>{children}</Overlay>,
    document.body
  );
};
