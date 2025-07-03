import React from 'react';
import clsx from 'clsx'; // npm i clsx
import '../button/button.css';

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'tertiary';
  type?: 'button' | 'submit' | 'reset';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  size = 'medium',
  disabled = false,
  variant = 'primary',
  type = 'button'
}) => {
  const className = clsx('button', variant, size, { disabled });

  return (
    <button
      className={className}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
};
