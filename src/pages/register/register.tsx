import { FC } from 'react';
import React, { useState } from 'react';
import { StepIndicator } from '@shared/ui/StepIndicator/step-indicator';
import styles from './register.module.css';
import RegistrationDescription from '@shared/ui/RegistrationDescription/registration-description';
import RegistrationFormStep2 from '@shared/ui/RegistrationFormStep2/RegistrationFormStep2';
import RegistrationFormStep3 from '@shared/ui/RegistrationFormStep3/RegistrationFormStep3';
import RegistrationFormStep1 from '@shared/ui/RegistrationFormStep1/RegistrationFormStep1';

import { TRegisterData } from '@api/types';

export const Register: FC = () => {
  const [step, setStep] = useState(1);
  const totalSteps = 3;
  const [formData, setFormData] = useState<TRegisterData>({} as TRegisterData);

  const handleStepChange = (newStep: number) => {
    if (newStep >= 1 && newStep <= totalSteps) {
      setStep(newStep);
    }
  };

  const handleNextStep = () => {
    handleStepChange(step + 1);
  };

  const handlePrevStep = () => {
    handleStepChange(step - 1);
  };

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
