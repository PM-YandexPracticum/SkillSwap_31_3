import React, { FC, useEffect, useState } from 'react';
import styles from '@shared/ui/FiltersArea/FiltersArea.module.css';
import { Text } from '@shared/ui';
import clsx from 'clsx';
import { CheckboxList } from '@shared/ui/FiltersArea/checkbox-lists/CheckboxList';
import { getSkills, getSkillsDict } from '@shared/lib/getSkills';
import { Filters } from '@pages/usersPage/usersPage';
import { TSkill } from '@api';

type SkillFilterProps = {
  setFilters: (filter: (prev: Filters) => any) => void;
  skillsData: TSkill[];
};

export const SkillFilter: FC<SkillFilterProps> = ({
  setFilters,
  skillsData
}) => {
  const skills = getSkills(skillsData);
  const skillsDict = getSkillsDict(skillsData);

  const [showAllSkills, setShowAllSkills] = useState(false);
  const [selectedSkills, setSelectSkills] = useState<string[]>([]);
  const [dropdownSkills, setDropdownSkills] = useState<Record<string, boolean>>(
    {}
  );

  const toggleSkillCategory = (itemCategory: string) => {
    setDropdownSkills((prev) => ({
      ...prev,
      [itemCategory]: !prev[itemCategory]
    }));

    // if (!dropdownSkills[itemCategory]) {
    //   setSelectSkills((prev) =>
    //     prev.includes(itemCategory) ? prev : [...prev, itemCategory]
    //   );
    // } else {
    //   setSelectSkills((prev) => prev.filter((value) => value !== itemCategory));
    // }
  };

  const toggleSkill = (value: string) => {
    setSelectSkills((prev) =>
      prev.includes(value) ? prev.filter((s) => s !== value) : [...prev, value]
    );
  };

  useEffect(() => {
    const skillIds = selectedSkills.map((item) => skillsDict[item]);
    setFilters((prev) => ({
      ...prev,
      skillIds: skillIds
    }));
  }, [selectedSkills]);

  return (
    <section className={styles.section}>
      <div className={styles.sectionTitle}>
        <Text as='h3' color='text'>
          Навыки
        </Text>
      </div>

      {(showAllSkills ? skills : skills.slice(0, 5)).map((item) => (
        <div key={item.category} className={styles.skillCategory}>
          <div
            className={styles.skillCategoryHeader}
            onClick={() => toggleSkillCategory(item.category)}
            role='button'
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                toggleSkillCategory(item.category);
              }
            }}
          >
            <CheckboxList
              name='checkboxList_skills'
              options={[{ value: item.category }]}
              selected={selectedSkills}
              onChange={() => {}}
              boxClass={clsx(styles.boxCategory)}
              onClick={() => toggleSkillCategory(item.category)}
              isSubcategory
            />
            <span
              className={clsx(styles.Icon_skill, {
                [styles.open]:
                  dropdownSkills[item.category] && item.subcategories
              })}
            />
          </div>

          {dropdownSkills[item.category] && item.subcategories && (
            <div className={styles.subcategories}>
              <CheckboxList
                name='checkboxList_skills_subcategories'
                options={item.subcategories.map((value: string) => ({ value }))}
                selected={selectedSkills}
                onChange={toggleSkill}
                boxClass={clsx(styles.boxSubcategory)}
              />
            </div>
          )}
        </div>
      ))}

      <button
        type='button'
        className={styles.toggleButton}
        onClick={() => setShowAllSkills(!showAllSkills)}
      >
        <Text as='bodyText' color='text-link'>
          Все категории
        </Text>
        <span
          className={clsx(styles.chevronIcon, {
            [styles.open]: showAllSkills
          })}
        />
      </button>
    </section>
  );
};
