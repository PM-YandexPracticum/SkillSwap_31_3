import { FC, useEffect } from 'react';
import React, { useState } from 'react';
import { StepIndicator } from '@shared/ui/StepIndicator/step-indicator';
import styles from './register.module.css';
import RegistrationDescription from '@shared/ui/RegistrationDescription/registration-description';
import RegistrationFormStep2 from '@shared/ui/RegistrationFormStep2/RegistrationFormStep2';
import RegistrationFormStep3 from '@shared/ui/RegistrationFormStep3/RegistrationFormStep3';
import RegistrationFormStep1 from '@shared/ui/RegistrationFormStep1/RegistrationFormStep1';

import { useDispatch } from '@app/store/store';
import { userThunk } from '@entities/User';

const saveFormDataToLocalStorage = (data: any) => {
  try {
    localStorage.setItem('registrationFormData', JSON.stringify(data));
  } catch (error) {
    console.error('Ошибка при сохранении в localStorage:', error);
  }
};

const getFormDataFromLocalStorage = () => {
  try {
    const data = localStorage.getItem('registrationFormData');
    return data ? JSON.parse(data) : {};
  } catch (error) {
    console.error('Ошибка при получении из localStorage:', error);
    return {};
  }
};

export const Register: FC = () => {
  const dispatch = useDispatch();
  const [step, setStep] = useState(1);
  const totalSteps = 3;
  const [formData, setFormData] = useState(getFormDataFromLocalStorage());

  dispatch(userThunk.register(formData)); // - это на сабмите должно будет быть. В принципе всё.

  const handleStepChange = (newStep: number) => {
    if (newStep >= 1 && newStep <= totalSteps) {
      setStep(newStep);
    }
  };

  const handleNextStep = (stepData: any) => {
    // Объединили полученные данные с общими данными формы
    setFormData({ ...formData, ...stepData });
    handleStepChange(step + 1); // Пошли на следующий шаг
  };

  const handlePrevStep = (stepData: any) => {
    setFormData({ ...formData, ...stepData });
    handleStepChange(step - 1);
  };

  useEffect(() => {
    saveFormDataToLocalStorage(formData);
  }, [formData]); // Сохранять в localStorage когда данные изменились
  console.log('formData:', formData);
  return (
    <div className={styles.registerContainer}>
      <div className={styles.stepIndicator}>
        <StepIndicator currentStep={step} totalSteps={totalSteps} />
      </div>
      <div className={styles.content}>
        <div className={styles.leftColumn}>
          {step === 1 && (
            <RegistrationFormStep1
              onNextStep={handleNextStep}
              formData={formData}
              setFormData={setFormData}
            />
          )}
          {step === 2 && (
            <RegistrationFormStep2
              onNextStep={handleNextStep}
              onPrevStep={handlePrevStep}
              formData={formData}
              setFormData={setFormData}
            />
          )}
          {step === 3 && (
            <RegistrationFormStep3
              onNextStep={handleNextStep}
              onPrevStep={handlePrevStep}
              formData={formData}
              setFormData={setFormData}
            />
          )}
        </div>
        <div className={styles.rightColumn}>
          <RegistrationDescription step={step} />
        </div>
      </div>
    </div>
  );
};
