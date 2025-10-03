import RouteError from '@/components/route-error';
import RootLayout from '@/layouts/root-layout';
import Home from '@/pages/Home';
import { createBrowserRouter } from 'react-router-dom';
import { BlogPage } from './pages/BlogPage';

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    errorElement: <RouteError />,
    children: [
      { index: true, element: <Home /> },
      {
        element: <BlogPage />,
        path: 'blog',
      },
    ],
  },
]);

export default router;
