import React, { FC, useState, useEffect } from 'react';
import styles from './RegistrationFormStep2.module.css';
import { Button } from '@shared/ui/button/button';
import { SearchableSelect } from '../SearchableSelect/SearchableSelect';
import { InputDateUI } from '../InputDate/InputDate';
import iconAdd from '../../assets/icons/Icon+Add.svg';
import { cities, gender } from './constants';
import { TRegisterData } from '../types';
import { MultipleSelectDropdown } from '../../ui/MultipleSelectDropdown/MultipleSelectDropdown';
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
  const allSkills = useSelector(selectAllSkills);
  console.log('проверяю скиллы:', allSkills);

  // Фильтруем высшие категории
  const topLevelCategories = allSkills.filter((item) => item.parent_id === '0');

  const [selectedGender, setSelectedGender] = useState<string>(
    formData.gender || ''
  );
  const [selectedCity, setSelectedCity] = useState<string>(formData.city || '');
  const [selectedCategory, setSelectedCategory] = useState<string>(
    formData.skillCanTeachCategory || ''
  );
  const [selectedSubCategoryNames, setSelectedSubCategoryNames] = useState<
    string[]
  >([]); // Массив

  const [name, setName] = useState<string>(formData.name || '');
  const [age, setAge] = useState<Date | null>(formData.age || null);
  const [image, setImage] = useState<File | null>(null);

  // Получаем список подкатегорий из стора
  const subCategoriesList = useSelector((state) => {
    const list = selectedCategory
      ? selectSubcategoriesByCategory(selectedCategory)(state) // Возвращает список подкатегорий, связанных с выбранной категорией
      : [];
    console.log('список подкатегорий:', list);
    return list;
  });

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
    const selectedSubCategoryIds = selectedSubCategoryNames.map(
      (subCategoryName) => {
        // Преобразуеь массив имен подкатегорий в массив ID подкатегорий
        const subCategory = allSkills.find(
          (skill) => skill.name === subCategoryName
        );
        return subCategory?._id || '';
      }
    );

    const updatedData = {
      ...formData,
      name,
      age,
      gender: selectedGender,
      city: selectedCity,
      skillCanTeachCategory: selectedCategory,
      skillWants: selectedSubCategoryIds,
      avatar: image
    };
    setFormData(updatedData);
    onNextStep(updatedData);
    console.log('значения updatedData', updatedData);
  };

  const handlePrev = () => {
    const dataToSave = {
      ...formData,
      name,
      age,
      gender: selectedGender,
      city: selectedCity,
      skillCanTeachCategory: selectedCategory,
      skillWants: selectedSubCategoryNames.map((subCategoryName) => {
        // Преобразуеь массив имен подкатегорий в массив ID подкатегорий
        const subCategory = allSkills.find(
          (skill) => skill.name === subCategoryName
        );
        return subCategory?._id || '';
      })
    };
    onPrevStep(dataToSave);
  };

  const isFormValid = Boolean(
    name &&
      age &&
      selectedGender &&
      selectedCity &&
      selectedCategory &&
      selectedSubCategoryNames.length > 0
  );

  return (
    <form className={styles.formContainer} onSubmit={(e) => e.preventDefault()}>
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

      <div className={styles.twoColumnContainer}>
        <div className={styles.column}>
          <label htmlFor='age' className={styles.label}>
            Дата рождения
          </label>
          <InputDateUI selectedDate={age} onChange={setAge} />
        </div>
        <div className={styles.column}>
          <label htmlFor='gender' className={styles.label}>
            Пол
          </label>
          <SearchableSelect
            values={gender}
            onChange={setSelectedGender}
            placeholder='Не указан'
          />
        </div>
      </div>

      <div className={styles.inputContainer}>
        <label htmlFor='city' className={styles.label}>
          Город
        </label>
        <SearchableSelect
          values={cities}
          onChange={setSelectedCity}
          placeholder='Не указан'
        />
      </div>

      <div className={styles.inputContainer}>
        <label htmlFor='category' className={styles.label}>
          Категория навыка, которому хотите научиться
        </label>
        <SearchableSelect
          values={topLevelCategories.map((cat) => cat.name)}
          onChange={setSelectedCategory}
          placeholder='Выберите категорию'
        />
      </div>

      <div className={styles.inputContainer}>
        <label htmlFor='subcategory' className={styles.label}>
          Подкатегория навыка, которому хотите научиться
        </label>
        <MultipleSelectDropdown
          values={subCategoriesList}
          placeholder='Не выбрано'
          onChange={(selectedValues: string[]) => {
            console.log('выбранные подкатегории:', selectedValues);
            setSelectedSubCategoryNames(selectedValues);
          }}
        />
      </div>

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
          // disabled={!isFormValid}
        />
      </div>
    </form>
  );
};

export default RegistrationFormStep2;
