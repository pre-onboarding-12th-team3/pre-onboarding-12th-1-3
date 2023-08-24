import App from '@/App';
import { createBrowserRouter } from 'react-router-dom';
import { ProtectedRoute } from '@/components/common';
import { HomePage, SignInPage, SignUpPage, TodoPage } from '@/pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <ProtectedRoute element={<HomePage />} path="" />,
    },
    {
      path: 'signin',
      element: <ProtectedRoute element={<SignInPage />} path="signin" />,
    },
    {
      path: 'signup',
      element: <ProtectedRoute element={<SignUpPage />} path="signup" />,
    },
    {
      path: 'todo',
      element: <ProtectedRoute element={<TodoPage />} path="todo" />,
    },
  ],
},
]);

export default router;