import RouteError from '@/components/route-error';
import RootLayout from '@/layouts/root-layout';
import Home from '@/pages/Home';
import { createBrowserRouter } from 'react-router';

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    errorElement: <RouteError />,
    children: [{ index: true, element: <Home /> }],
  },
]);

export default router;
