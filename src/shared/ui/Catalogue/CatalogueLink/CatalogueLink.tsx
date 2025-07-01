import React from 'react';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { TSkill } from '../common-type';
import styles from '../common.module.css';

type CatalogueLinkProps = {
  data: TSkill[];
  skill_id: string;
};

export const CatalogueLinkUI: FC<CatalogueLinkProps> = ({ data, skill_id }) => (
  <ul key={skill_id}>
    {data.map((skill: TSkill) => {
      if (skill.parent_id === skill_id) {
        return (
          <li key={skill._id}>
            <Link to={`skills/${skill._id}`} className={styles.megamenu_link}>
              {skill.name}
            </Link>
          </li>
        );
      }
    })}
  </ul>
);
