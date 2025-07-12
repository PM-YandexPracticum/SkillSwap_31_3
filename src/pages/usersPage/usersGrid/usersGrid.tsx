import { FC } from 'react';
import { SkillCard } from '@features';
import { TUserCard } from '@api/types';
import styles from './../usersPage.module.css';

type UsersGridProps = {
  filteredUsers: TUserCard[];
};

export const UsersGrid: FC<UsersGridProps> = ({ filteredUsers }) => (
  <div className={styles.cardsContainer}>
    {filteredUsers.map((user: TUserCard) => (
      <SkillCard
        key={user._id}
        data={user}
        learnSkills={user.skillWants}
        onDetailsClick={() => console.log('Details clicked')}
      />
    ))}
  </div>
);
