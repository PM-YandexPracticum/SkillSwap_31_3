import * as ReactDOMClient from 'react-dom/client';

import '@app/styles/index.css';
import {
  BrowserRouter,
  createBrowserRouter,
  createRoutesFromElements,
  json,
  Route,
  RouterProvider,
  Routes
} from 'react-router-dom';
import { ErrorPage } from './features/ErrorPage/ErrorPage';

const container = document.getElementById('root') as HTMLElement;
const root = ReactDOMClient.createRoot(container!);

function SomeComponent() {
  throw new Error('500 Server Error!');
  return <div>Some Content</div>;
}
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route
        path='/some-route'
        element={<SomeComponent />}
        errorElement={<ErrorPage />}
      />
      <Route path='*' element={<div>Not Found</div>} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

root.render(<App />);
