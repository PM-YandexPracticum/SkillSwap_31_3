import { TUserData } from '@shared/api';

export type TAuthState = {
  isAuthChecked: boolean;
  user: TUserData | null;
  error: string | null;
};
