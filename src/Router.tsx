import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home.page';
import TrainerPage from './pages/Trainer.page';

const router = createBrowserRouter([
  {
    path: '/trainer',
    element: <TrainerPage />
  },
  {
    path: '/',
    element: <HomePage />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
