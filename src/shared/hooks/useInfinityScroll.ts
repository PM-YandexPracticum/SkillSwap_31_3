import { TServerResponse, TUserCardsResponse } from '@shared/api';
import { useState, useEffect, useCallback } from 'react';

type TUseInfinityiScroll<T extends object> = {
  fetchData: (page: number, limit: number) => Promise<TServerResponse<T[]>>;
  limit?: number;
};

export const useInfinityScroll = <T extends object>({
  fetchData,
  limit = 5
}: TUseInfinityiScroll<T>) => {
  const [data, setData] = useState<T[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const loadMore = useCallback(async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    try {
      const response = await fetchData(page, limit);
      setData(response.data);
      setPage((prev) => prev + 1);
      setHasMore(response?.hasMore !== undefined && response.hasMore);
    } catch (error) {
      console.error('Ошибка', error);
    } finally {
      setLoading(false);
    }
  }, [page, limit, loading, hasMore, fetchData]);

  const handleScroll = useCallback(() => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (scrollHeight - (scrollTop + clientHeight) < 100 && !loading) {
      loadMore();
    }
  }, [loadMore, loading]);

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);
    return () => document.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    loadMore();
  }, []);

  return { data, loading };
};
