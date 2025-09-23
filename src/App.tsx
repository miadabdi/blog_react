import '@/App.css';
import ErrorBoundary from '@/components/ErrorBoundary';
import router from '@/router';
import { RouterProvider } from 'react-router';

function App() {
  return (
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  );
}

export default App;
