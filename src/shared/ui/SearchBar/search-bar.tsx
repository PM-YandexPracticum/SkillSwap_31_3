import React, {
  useState,
  ChangeEvent,
  FormEvent,
  useRef,
  useEffect
} from 'react';
import styles from './search-bar.module.css';

import SearchIcon from '../../../images/search.svg';
import ClearIcon from '../../../images/cross.svg';

interface SearchBarProps {
  placeholder: string;
  submit: (text: string) => void;
  color?: string;
  backgroundColor?: string;
  placeholderColor?: string;
  size?: 'small' | 'medium' | 'large';
  searchText?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder,
  submit,
  color = 'var(--text)',
  backgroundColor = 'var(--input)',
  placeholderColor = 'var(--caption)',
  size = 'medium',
  searchText = ''
}) => {
  const [text, setText] = useState(searchText);
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.setProperty(
        '--placeholder-color',
        placeholderColor
      );
    }
  }, [placeholderColor, color]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    submit(text);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleClear = () => {
    setText('');
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <form
      className={`${styles.searchBarContainer} ${styles[size] || ''}`}
      onSubmit={handleSubmit}
      style={{ backgroundColor: backgroundColor }}
    >
      <img src={SearchIcon} alt='Поиск' />
      <input
        type='text'
        placeholder={isFocused ? '' : placeholder}
        value={text}
        onChange={handleChange}
        className={styles.searchInput}
        style={{ color }}
        onFocus={handleFocus}
        onBlur={handleBlur}
        ref={inputRef}
      />
      {text && (
        <button
          type='button'
          className={styles.searchButton}
          onClick={handleClear}
        >
          <img src={ClearIcon} alt='Очистить' className={styles.clearIcon} />
        </button>
      )}
    </form>
  );
};

export default SearchBar;
