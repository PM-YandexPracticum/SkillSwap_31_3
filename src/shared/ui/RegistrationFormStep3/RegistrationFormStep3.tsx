import React, { useState, useEffect } from 'react';
import styles from './RegistrationFormStep3.module.css';
import { Button } from '@shared/ui/button/button';
import { SearchableSelect } from '../SearchableSelect/SearchableSelect';
import galleryAdd from '../../assets/icons/gallery-add.svg';
import { TRegisterData } from '../types';

// Стор
import { useDispatch, useSelector } from '@app/store/store';
import {
  selectAllSkills,
  selectSubcategoriesByCategory
} from '@entities/Skills/model/selectors';
import { skillsThunk } from '@entities/Skills';

interface RegistrationFormStep3Props {
  onNextStep: (data: TRegisterData) => void;
  onPrevStep: (data: TRegisterData) => void;
  formData: TRegisterData;
  setFormData: (data: TRegisterData) => void;
}

export const RegistrationFormStep3: React.FC<RegistrationFormStep3Props> = ({
  onNextStep,
  onPrevStep,
  formData,
  setFormData
}) => {
  const dispatch = useDispatch();

  // Получаем все навыки из стора
  const allSkills = useSelector(selectAllSkills);
  // console.log('allSkills:', allSkills);

  // Локальные состояния формы
  const [selectedCategory, setSelectedCategory] = useState<string>(
    formData.skillCanTeachCategory || ''
  );
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>(
    formData.skillCanTeachSubCategory || ''
  );
  const [description, setDescription] = useState<string>(
    formData.description || ''
  );
  const [skillName, setSkillName] = useState<string>(formData.skillName || '');
  const [photos, setPhotos] = useState<File[]>(formData.photos || []);

  // Получаем подкатегории по выбранной категории
  const subCategoriesList = useSelector(
    selectSubcategoriesByCategory(selectedCategory || '')
  );

  // Список топ-уровневых категорий
  const topLevelCategories = allSkills.filter((item) => item.parent_id === '0');

  // Загрузка навыков при монтировании
  useEffect(() => {
    if (allSkills.length === 0) {
      dispatch(skillsThunk.getSkills());
    }
  }, [dispatch]);

  // Установка начальных значений после загрузки allSkills
  useEffect(() => {
    if (allSkills.length === 0) return;

    let category = '';
    if (formData.skillCanTeachCategory) {
      const categoryObj = allSkills.find(
        (s) => s._id === formData.skillCanTeachCategory && s.parent_id === '0'
      );
      category = categoryObj?.name || formData.skillCanTeachCategory;
    }

    setSelectedCategory(category);
    setSelectedSubCategory(formData.skillCanTeachSubCategory || '');
    setDescription(formData.description || '');
    setSkillName(formData.skillName || '');
    setPhotos(formData.photos || []);
  }, [allSkills]);

  // Очистка подкатегории при изменении категории или подкатегорий
  useEffect(() => {
    if (selectedCategory) {
      setSelectedSubCategory('');
    }
  }, [selectedCategory]);

  // Логика отправки формы
  const handleSubmit = () => {
    const selectedSkill = topLevelCategories.find(
      (cat) => cat.name === selectedCategory
    );

    const finalData = {
      ...formData,
      skillName,
      skillCanTeachCategory: selectedCategory,
      skillCanTeachSubCategory: selectedSubCategory,
      description,
      photos,
      skillId: selectedSkill?._id || '',
      skillWants: selectedSubCategory ? [selectedSubCategory] : []
    };

    setFormData(finalData);
    onNextStep(finalData);
  };

  const handlePrev = () => {
    const dataToSave = {
      skillName,
      skillCanTeachCategory: selectedCategory,
      skillCanTeachSubCategory: selectedSubCategory,
      description,
      photos,
      skillId: formData.skillId || '',
      skillWants: formData.skillWants || []
    };

    onPrevStep(dataToSave);
  };

  const isFormValid = Boolean(
    skillName && selectedCategory && selectedSubCategory && description
  );

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      setPhotos(filesArray);
    }
  };

  return (
    <form className={styles.formContainer} onSubmit={(e) => e.preventDefault()}>
      {/* Название навыка */}
      <div className={styles.inputContainer}>
        <label htmlFor='skillName' className={styles.label}>
          Название навыка
        </label>
        <input
          id='skillName'
          type='text'
          value={skillName}
          placeholder='Введите название вашего навыка'
          onChange={(e) => setSkillName(e.target.value)}
          className={styles.input}
        />
      </div>

      {/* Категория навыка */}
      <div className={styles.inputContainer}>
        <label className={styles.label}>Категория навыка</label>
        <SearchableSelect
          values={topLevelCategories.map((cat) => cat.name)}
          onChange={setSelectedCategory}
          placeholder='Выберите категорию навыка'
        />
      </div>

      {/* Подкатегория навыка */}
      <div className={styles.inputContainer}>
        <label className={styles.label}>Подкатегория навыка</label>
        <SearchableSelect
          values={subCategoriesList}
          onChange={setSelectedSubCategory}
          placeholder='Выберите подкатегорию навыка'
        />
      </div>

      {/* Описание навыка */}
      <div className={styles.inputContainer}>
        <label className={styles.label}>Описание</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder='Коротко опишите, чему можете научить'
          className={styles.textarea}
        />
      </div>

      {/* Фото навыка */}
      <div className={styles.inputContainer}>
        <label className={styles.label}>Фото навыка</label>
        <div className={styles.fileInputWrapper}>
          <label htmlFor='photos'>
            Перетащите или выберите изображения навыка
            <div className={styles.gallerySkillContainer}>
              <img src={galleryAdd} alt='Загрузить аватар' />
              <div className={styles.fileInputLabel}>Выбрать изображения</div>
            </div>
          </label>
          <input
            type='file'
            id='photos'
            multiple
            accept='image/*'
            onChange={handleFileChange}
            style={{ display: 'none' }}
          />
        </div>
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

export default RegistrationFormStep3;
