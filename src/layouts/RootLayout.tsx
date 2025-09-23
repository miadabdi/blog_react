import ErrorBoundary from '@/components/ErrorBoundary';
import { Outlet, useLocation } from 'react-router';

export default function RootLayout() {
  const location = useLocation();
  return (
    <ErrorBoundary resetKey={location.key}>
      <Outlet />
    </ErrorBoundary>
  );
}
