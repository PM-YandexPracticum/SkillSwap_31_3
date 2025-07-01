import React from 'react';
import styles from './tag.module.css';

interface TagProps {
  text?: string;
  textColor?: string;
  backgroundColor?: string;
  category?: string;
  skillId?: string;
}

export const Tag: React.FC<TagProps> = ({
  text,
  textColor,
  backgroundColor,
  category,
  skillId
}) => {
  const getCategoryClass = () => {
    if (category) {
      switch (category) {
        case '1':
          return styles.business; // Бизнес и карьера
        case '2':
          return styles.languages; // Иностранные языки
        case '3':
          return styles.home; // Дом и уют
        case '4':
          return styles.creative; // Творчество и искусство
        case '5':
          return styles.education; // Образование и развитие
        case '6':
          return styles.health; // Здоровье и лайфстайл
        default:
          return styles.default;
      }
    }

    if (skillId) {
      // Бизнес и карьера (1)
      if (['7', '8', '9', '10', '11', '12', '13', '14'].includes(skillId)) {
        return styles.business;
      }
      // Иностранные языки (2)
      if (['15', '16', '17', '18', '19', '20', '21'].includes(skillId)) {
        return styles.languages;
      }
      // Дом и уют (3)
      if (['22', '23', '24', '25', '26', '27'].includes(skillId)) {
        return styles.home;
      }
      // Творчество и искусство (4)
      if (['28', '29', '30', '31', '32', '33', '34', '35'].includes(skillId)) {
        return styles.creative;
      }
      // Образование и развитие (5)
      if (['36', '37', '38', '39', '40', '41'].includes(skillId)) {
        return styles.education;
      }
      // Здоровье и лайфстайл (6)
      if (['42', '43', '44', '45', '46', '47', '48'].includes(skillId)) {
        return styles.health;
      }
    }
    return styles.default;
  };

  return (
    <label
      className={`${styles.tag} ${getCategoryClass()}`}
      style={{
        color: textColor,
        backgroundColor: backgroundColor
      }}
    >
      {text}
    </label>
  );
};
