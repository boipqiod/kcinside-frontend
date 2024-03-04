import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {HomePage} from '../pages/HomePage.tsx';
import {AboutPage} from '../pages/AboutPage.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
]);

export const RootRouter = () => {
  return <RouterProvider router={router} />;
};
