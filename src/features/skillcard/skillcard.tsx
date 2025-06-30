import { FC } from 'react';
import styles from './skillcard.module.css';


export type TSkillCardProps = {
  data: {
    _id: string;
    name: string;
    city: string;
    age: string;
    gender: string;
    image: string;
    skillName: string;
    skillId: string;
    skillWants: string[];
    like: number;
    cratedAt: string;
  };
  onLikeToggle?: () => void;
  isLiked?: boolean;
  onDetailsClick?: () => void;
};

export const SkillCard: FC<TSkillCardProps> = ({
  data,
  onLikeToggle,
  isLiked,
  onDetailsClick
}) => {
  console.log(data.image);
  return (
    <div>
      <div
        className={`${styles.avatar} ${styles.medium}`}
        style={{
          backgroundImage: `url(${data.image})`,
          backgroundColor: '#eee'
        }}
      />
    </div>
  );
};
