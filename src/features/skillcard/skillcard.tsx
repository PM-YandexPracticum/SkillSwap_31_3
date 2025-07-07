import React, { FC } from 'react';
import styles from './skillcard.module.css';
import { ToggleLike } from '@shared/ui/ToggleLike/ToggleLike';
import { Tag } from '@shared/ui/tag';
import { TUser } from '@app/styles/typs';
import { Button } from '@shared/ui/button/button';
import { TUserCard, TSkill } from '@api';
import { useSelector } from 'react-redux';
import { selectSkillById } from '@entities';
export type TSkillCardProps = {
  data: TUserCard;
  teachSkills: TSkill;
  learnSkills: string[];
  onLikeToggle?: () => void;
  isLiked?: boolean;
  onDetailsClick: () => void;
};

export const SkillCard: FC<TSkillCardProps> = ({
  data,
  teachSkills,
  learnSkills = [],
  onLikeToggle,
  isLiked,
  onDetailsClick
}) => {
  const lernSkills = learnSkills.map((id) => {
    let skills = [];
    const skill = useSelector((state) => selectSkillById(state, id));
    skills.push(skill);
    return skills;
  });

  const visibleSkills = lernSkills.slice(0, 2);
  const hiddenSkillsCount = lernSkills.length - visibleSkills.length;

  return (
    <div className={styles.cardsContainer}>
      <div className={styles.cardsHeader}>
        <div className={styles.cardsUserInfo}>
          <img
            className={`${styles.avatar} ${styles.medium}`}
            style={{ backgroundImage: `url(./images/${data.avatar})` }}
          />
          <div className={styles.cardText}>
            <div className={styles.name}>{data.name}</div>
            <div className={styles.description}>
              {`${data.city}, ${data.age} года`}
            </div>
          </div>
        </div>
        <div className={styles.like}>
          <ToggleLike onChange={onLikeToggle} checked={isLiked} />
        </div>
      </div>
      <div className={styles.sectionSkils}>
        <div className={styles.cardSkils}>
          <div className={styles.learnSkils}>Может научить:</div>
          <div>
            <Tag text={data.skillName} category={teachSkills.parent_id} />
          </div>
        </div>
        <div className={styles.cardSkils}>
          <div className={styles.teachSkils}>Хочет научиться:</div>
          <div className={styles.tegSkils}>
            {visibleSkills.map((skill, index) => (
              <Tag key={index} text={skill.name} category={skill.parent_id} />
            ))}
            {hiddenSkillsCount > 0 && <Tag text={`+${hiddenSkillsCount}`} />}
          </div>
        </div>
      </div>
      <Button onClick={onDetailsClick} type='button'>
        Подробнее
      </Button>
    </div>
  );
};
