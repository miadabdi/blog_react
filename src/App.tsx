import router from '@/router';
import { RouterProvider } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <RouterProvider router={router} />
    </BrowserRouter>
  );
}

export default App;
