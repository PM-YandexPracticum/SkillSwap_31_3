import React, { FC, useState, useEffect } from 'react';
import styles from './RegistrationFormStep2.module.css';
import { Button } from '@shared/ui/button/button';
import { SearchableSelect } from '../SearchableSelect/SearchableSelect';
import { InputDateUI } from '../InputDate/InputDate';
import iconAdd from '../../assets/icons/Icon+Add.svg';
import { cities, gender } from './constants';
import { TRegisterData } from '../types';

// Хуки и селекторы
import { useSelector } from '@app/store/store';
import {
  selectAllSkills,
  selectSubcategoriesByCategory
} from '@entities/Skills/model/selectors';

interface RegistrationFormStep2Props {
  onNextStep: (data: TRegisterData) => void;
  onPrevStep: (data: TRegisterData) => void;
  formData: TRegisterData;
  setFormData: (data: TRegisterData) => void;
}

const RegistrationFormStep2: FC<RegistrationFormStep2Props> = ({
  onNextStep,
  onPrevStep,
  formData,
  setFormData
}) => {
  // ------------- Состояния формы ---------------
  const [selectedGender, setSelectedGender] = useState<string>(
    formData.gender || ''
  );
  const [selectedCity, setSelectedCity] = useState<string>(formData.city || '');
  const [selectedCategory, setSelectedCategory] = useState<string>(
    formData.skillCanTeachCategory || ''
  );
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>(
    formData.skillCanTeachSubCategory || ''
  );
  const [name, setName] = useState<string>(formData.name || '');
  const [age, setAge] = useState<Date | null>(formData.age || null);
  const [image, setImage] = useState<File | null>(null);

  // ------------- Получила навыки из стора ---------------
  const allSkills = useSelector(selectAllSkills);

  // Только категории верхнего уровня
  const topLevelCategories = allSkills.filter((item) => item.parent_id === '0');

  // Подкатегории выбранной категории
  const subCategoriesList = useSelector((state) =>
    selectedCategory
      ? selectSubcategoriesByCategory(selectedCategory)(state)
      : []
  );

  // При изменении категории меняем подкатегории
  useEffect(() => {
    if (selectedCategory && subCategoriesList.length > 0) {
      setSelectedSubCategory('');
    }
  }, [selectedCategory]);

  // ОбновляЮ стейт при изменении formData
  useEffect(() => {
    setSelectedGender(formData.gender || '');
    setSelectedCity(formData.city || '');
    setSelectedCategory(formData.skillCanTeachCategory || '');
    setSelectedSubCategory(formData.skillCanTeachSubCategory || '');
    setName(formData.name || '');
    setAge(formData.age || null);
  }, [formData]);

  // Обработчики событий
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      const file = e.target.files[0];
      setImage(file);
      setFormData({
        ...formData,
        avatar: file
      });
    }
  };

  const handleSubmit = () => {
    // Ищем ID навыка по имени
    const selectedSkill = topLevelCategories.find(
      (cat) => cat.name === selectedCategory
    );

    const updatedData = {
      ...formData,
      name,
      age,
      gender: selectedGender,
      city: selectedCity,
      skillCanTeachCategory: selectedCategory,
      skillCanTeachSubCategory: selectedSubCategory,
      skillId: selectedSkill?._id || '',
      skillWants: selectedSubCategory ? [selectedSubCategory] : [],
      avatar: image
    };

    setFormData(updatedData);
    onNextStep(updatedData);
  };

  const handlePrev = () => {
    const dataToSave = {
      name,
      age,
      gender: selectedGender,
      city: selectedCity,
      skillCanTeachCategory: selectedCategory,
      skillCanTeachSubCategory: selectedSubCategory
    };
    onPrevStep(dataToSave as TRegisterData);
  };

  const isFormValid = Boolean(
    name &&
      age &&
      selectedGender &&
      selectedCity &&
      selectedCategory &&
      selectedSubCategory
  );

  return (
    <form className={styles.formContainer} onSubmit={(e) => e.preventDefault()}>
      {/* Аватар */}
      <div className={styles.avatarContainer}>
        <label htmlFor='avatar' className={styles.avatarLabel}>
          <img src={iconAdd} alt='Загрузить аватар' />
        </label>
        <input
          type='file'
          id='avatar'
          onChange={handleImageChange}
          style={{ display: 'none' }}
        />
      </div>

      {/* Имя */}
      <div className={styles.inputContainer}>
        <label htmlFor='name' className={styles.label}>
          Имя
        </label>
        <input
          id='name'
          type='text'
          value={name}
          placeholder='Введите ваше имя'
          onChange={(e) => setName(e.target.value)}
          className={styles.input}
        />
      </div>

      {/* Дата рождения + Пол */}
      <div className={styles.twoColumnContainer}>
        <div className={styles.column}>
          <label className={styles.label}>Дата рождения</label>
          <InputDateUI selectedDate={age} onChange={setAge} />
        </div>
        <div className={styles.column}>
          <label className={styles.label}>Пол</label>
          <SearchableSelect
            values={gender}
            onChange={setSelectedGender}
            placeholder='Не указан'
          />
        </div>
      </div>

      {/* Город */}
      <div className={styles.inputContainer}>
        <label className={styles.label}>Город</label>
        <SearchableSelect
          values={cities}
          onChange={setSelectedCity}
          placeholder='Не указан'
        />
      </div>

      {/* Категория навыка */}
      <div className={styles.inputContainer}>
        <label className={styles.label}>
          Категория навыка, которому хотите научиться
        </label>
        <SearchableSelect
          values={topLevelCategories.map((cat) => cat.name)}
          onChange={setSelectedCategory}
          placeholder='Выберите категорию'
        />
      </div>

      {/* Подкатегория навыка */}
      <div className={styles.inputContainer}>
        <label className={styles.label}>
          Подкатегория навыка, которому хотите научиться
        </label>
        <SearchableSelect
          values={subCategoriesList}
          onChange={setSelectedSubCategory}
          placeholder='Выберите подкатегорию'
        />
      </div>

      {/* Кнопки */}
      <div className={styles.buttonContainer}>
        <Button
          variant='secondary'
          size='large'
          children='Назад'
          onClick={handlePrev}
        />
        <Button
          variant='primary'
          size='large'
          children='Продолжить'
          onClick={handleSubmit}
          disabled={!isFormValid}
        />
      </div>
    </form>
  );
};
export default RegistrationFormStep2;
