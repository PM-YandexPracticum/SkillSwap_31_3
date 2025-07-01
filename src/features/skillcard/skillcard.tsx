import React, { FC } from 'react';
import styles from './skillcard.module.css';
import { ToggleLike } from '@shared/ui/ToggleLike/ToggleLike';
import { Tag } from '@shared/ui/tag';
import { TUser } from '@app/styles/typs';

export type TSkillCardProps = {
  data: TUser;
  onLikeToggle?: () => void;
  isLiked?: boolean;
  onDetailsClick?: () => void;
  wantsToLearnSkills?: { name: string; parent_id: string }[];
};

export const SkillCard: FC<TSkillCardProps> = ({
  data,
  onLikeToggle,
  isLiked,
  onDetailsClick,
  wantsToLearnSkills = []
}) => {
  const visibleSkills = wantsToLearnSkills.slice(0, 2);
  const hiddenSkillsCount = wantsToLearnSkills.length - visibleSkills.length;

  return (
    <div className={styles.cardsContainer}>
      <div className={styles.cardsHeader}>
        <div className={styles.cardsUserInfo}>
          <img
            className={`${styles.avatar} ${styles.medium}`}
            style={{ backgroundImage: `url(./images/${data.image})` }}
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
            <Tag text={data.skillName} skillId={data.skillId} />
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
      <button
        className={styles.cardButton}
        onClick={onDetailsClick}
        type='button'
      >
        Подробнее
      </button>
    </div>
  );
};