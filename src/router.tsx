import RouteError from '@/components/route-error';
import RootLayout from '@/layouts/root-layout';
import Home from '@/pages/Home';
import { createBrowserRouter } from 'react-router-dom';
import { BlogPage } from './pages/BlogPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { ProjectsPage } from './pages/ProjectsPage';

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
      {
        element: <ProjectsPage />,
        path: 'projects',
      },
      {
        path: 'projects/:id',
        element: <ProjectDetailPage />,
      },
    ],
  },
]);

export default router;
