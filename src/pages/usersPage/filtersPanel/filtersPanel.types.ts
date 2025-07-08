import { Filters } from '@pages/usersPage/usersPage';

export type TFilterProps = {
  setFilters: (filter: (prev: Filters) => any) => void;
};
