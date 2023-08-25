import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { todoApi } from '@/apis/todo';

interface ProtectedRouteProps {
  element: JSX.Element;
  path: string;
}

const ProtectedRoute = ({ element, path }: ProtectedRouteProps) => {
  const navigate = useNavigate();

  const isLoggedIn = async () => {
    const token = localStorage.getItem('token');

    if (!token) {
      return false;
    }

    try {
      const res = await todoApi.get({ accessToken: token });
      return res.status !== 401;
    } catch (err) {
      return false;
    }
  };

  useEffect(() => {
    const checkLoggedIn = async () => {
      const isAuthenticated = await isLoggedIn();

      if (path === 'signin' || path === 'signup') {
        if (isAuthenticated) {
          navigate('/todo');
        }
      } else if (path === 'todo') {
        if (!isAuthenticated) {
          navigate('/signin');
        }
      } else {
        if (!isAuthenticated) {
          navigate('/signin');
        } else {
          navigate('/todo');
        }
      }
    };

    checkLoggedIn();
  }, []);

  return element;
};

export default ProtectedRoute;
