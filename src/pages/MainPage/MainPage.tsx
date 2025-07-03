import { ScaleLoader } from 'react-spinners';

import { getUserCardsApi, TUserCard } from '@shared/api';

import { useInfinityScroll } from '@shared/hooks';

export const MainPage = () => {
  const { data: cards, loading } = useInfinityScroll({
    fetchData: getUserCardsApi
  });

  return (
    <>
      {loading && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <ScaleLoader />
        </div>
      )}
    </>
  );
};
