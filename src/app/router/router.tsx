import { lazy } from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from 'react-router-dom';

import { ERoutes } from '@shared/constants';
import { ContentLayout } from '@layouts/content-layout';

const MainPage = lazy(() => import('@pages/MainPage'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path={ERoutes.MAIN} element={<ContentLayout />}>
        <Route index element={<MainPage />} />
        {/* Сюда добавляем пути по аналогии MainPage, указывая атрибут path . Также в ERoutes вносите необходимые пути*/}
      </Route>
    </Route>
  )
);

export default router;
