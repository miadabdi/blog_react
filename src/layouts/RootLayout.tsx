import ErrorBoundary from '@/components/ErrorBoundary';
import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router';
import { ThemeProvider } from '../components/ThemeProvider';
import { Footer } from './footer';
import Header from './header';

export default function RootLayout() {
  const location = useLocation();
  return (
    <ErrorBoundary resetKey={location.key}>
      <Suspense fallback={null}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <div className="min-h-screen bg-background">
            <Header />
            <Outlet />
            <Footer />
          </div>
        </ThemeProvider>
      </Suspense>
    </ErrorBoundary>
  );
}
