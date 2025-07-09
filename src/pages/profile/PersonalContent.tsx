import React from 'react';
import styles from './profile.module.css';
import { ProfileForm } from './profileForm';

export const PersonalContent: React.FC = () => (
  <div className={styles.contentContainer}>
    <ProfileForm/>
  </div>
);
