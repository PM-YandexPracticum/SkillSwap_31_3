import * as ReactDOMClient from 'react-dom/client';

import '@app/styles/index.css';
import skillsData from '../public/db/users.json';
import { SkillCard } from './features/skillcard/skillcard';
import styles from './index.module.css';

const container = document.getElementById('root') as HTMLElement;
const root = ReactDOMClient.createRoot(container!);

root.render(
  <>
    <h1>Тут главная страница</h1>
    <div className={styles.cardsContainer}>
      {skillsData.data.map((user) => (
        <SkillCard
          key={user._id}
          data={user}
          onLikeToggle={() => console.log('Like toggled')}
          isLiked={false}
          onDetailsClick={() => console.log('Details clicked')}
        />
      ))}
    </div>
  </>
);
