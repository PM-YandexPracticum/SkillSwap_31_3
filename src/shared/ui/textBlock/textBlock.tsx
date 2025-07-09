import { FC, useState, useEffect, ChangeEvent, useRef } from 'react';
import styles from './textBlock.module.css';
import React from 'react';

type Props = {
  value?: string;
  maxLength?: number;
  onChange?: (v: string) => void;
  className?: string;
};

export const TextBlock = ({
  value = '',
  maxLength = 500,
  onChange,
  className = ''
}: Props) => {
  const [text, setText] = useState(value);
  const [isEdit, setEdit] = useState(false);
  useEffect(() => setText(value), [value]);

  useEffect(() => {
    if (isEdit) onChange?.(text);
  }, [text, isEdit, onChange]);

  const taRef = useRef<HTMLTextAreaElement>(null);

  const autoGrow = () => {
    const el = taRef.current;
    if (!el) return;
    el.style.height = 'auto';
    el.style.height = el.scrollHeight + 'px';
  };

  const startEdit = () => setEdit(true);
  const stopEdit = () => setEdit(false);

  const handleInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value;
    if (val.length <= maxLength) setText(val);
  };

  const root = [styles.wrapper, className].join(' ').trim();

  return (
    <div className={root} onClick={isEdit ? undefined : startEdit}>
      {isEdit ? (
        <textarea
          ref={taRef}
          className={styles.textarea}
          value={text}
          onInput={autoGrow}
          onChange={handleInput}
          onBlur={stopEdit}
          autoFocus
        />
      ) : (
        <>
          <p className={styles.text}>
            {text || 'Нажмите, чтобы добавить текст'}
          </p>
          <button
            type='button'
            className={styles.editLogo}
            aria-label='Редактировать'
            onClick={startEdit}
          />
        </>
      )}
    </div>
  );
};
