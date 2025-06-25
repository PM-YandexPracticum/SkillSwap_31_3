import React from 'react';
import '../button/button.css';

interface ButtonProps {
  label: string;
  onClick: () => void;
  color?: string;
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  isPressed?: boolean;
  hover?: boolean;
  variant?: 'primary' | 'secondary' | 'tertiary';
}

export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  color = 'green',
  size = 'medium',
  disabled = false,
  isPressed = false,
  hover = false,
  variant = 'primary'
}) => {
  let className = `button ${variant} ${size}`;

  if (disabled) {
    className += ' disabled';
  } else if (isPressed) {
    className += ' pressed';
  } else if (hover) {
    className += ' hover';
  }

  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};
