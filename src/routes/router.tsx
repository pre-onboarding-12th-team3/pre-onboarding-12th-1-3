import App from '@/App';
import { useEffect } from 'react';
import { createBrowserRouter, useNavigate, useParams } from 'react-router-dom';
import { HomePage, SignInPage, SignUpPage, TodoPage } from '@/pages';

interface ProtectedRouteProps {
  element: JSX.Element;
  path: string;
}

const isLoggedIn = () => {
  const token = localStorage.getItem('token');
  return !!token;
};

const ProtectedRoute = ({ element, path }: ProtectedRouteProps) => {
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    if (path === 'signin' || path === 'signup') {
      if (isLoggedIn()) {
        navigate('/todo');
      }
    } else {
      if (!isLoggedIn()) {
        navigate('/signin');
      }
    }
  }, [params]);

  return element;
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
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
