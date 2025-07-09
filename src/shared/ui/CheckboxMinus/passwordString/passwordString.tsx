import React, { useState } from 'react';
import './passwordString.css';

interface SecureInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  security?: boolean;
  color?: string;
  error?: string;
}

const SecureInput: React.FC<SecureInputProps> = ({
  value,
  onChange,
  placeholder,
  security = false,
  color = '#000000',
  error = ''
}) => {
  const [isTouched, setIsTouched] = useState(false);
  const [isHidden, setIsHidden] = useState(security);

  const isValid = /^[a-zA-Z]{8,}$/.test(value);
  const showError = isTouched && !isValid;

  return (
    <div className='input-wrapper'>
      <label className='input-label'>Пароль</label>
      <div className={`input-container ${showError ? 'input-error' : ''}`}>
        <input
          type={isHidden ? 'password' : 'text'}
          placeholder={placeholder}
          value={value}
          onChange={(e) => {
            onChange(e);
            setIsTouched(true);
          }}
          onBlur={() => setIsTouched(true)}
          style={{ color }}
        />
        <button
          type='button'
          className='toggle-button'
          onClick={() => setIsHidden(!isHidden)}
        >
          👁️
        </button>
      </div>
      {showError && <div className='error-text'>{error}</div>}
    </div>
  );
};

export default SecureInput;
