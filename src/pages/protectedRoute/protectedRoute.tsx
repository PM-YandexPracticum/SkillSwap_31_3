import { Navigate, useLocation } from 'react-router-dom';
import DataLoader from '@shared/ui/DataLoader/DataLoader';
import { ReactElement } from 'react';
import { useSelector } from '@app/store/store';
import { selectIsUserAuth, selectUser } from '@entities';

type ProtectedRouteProps = {
  onlyUnAuth?: boolean;
  children: ReactElement;
};

export const ProtectedRoute = ({
  onlyUnAuth = false,
  children
}: ProtectedRouteProps) => {
  const isAuthChecked = useSelector(selectIsUserAuth);
  const user = useSelector(selectUser);
  const location = useLocation();

  if (!isAuthChecked) {
    return <DataLoader />;
  }

  if (onlyUnAuth && user) {
    const from = location.state?.from || { pathname: '/' };
    return <Navigate replace to={from} />;
  }

  if (!onlyUnAuth && !user) {
    return <Navigate to='/login' replace state={{ from: location.pathname }} />;
  }

  return children;
};
