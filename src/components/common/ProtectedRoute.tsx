import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

interface ProtectedRouteProps {
  element: JSX.Element;
  path: string;
}

const ProtectedRoute = ({ element, path }: ProtectedRouteProps) => {
  const navigate = useNavigate();
  const params = useParams();

  const isLoggedIn = () => {
    const token = localStorage.getItem('token');
    return !!token;
  };

  useEffect(() => {
    if (path === 'signin' || path === 'signup') {
      isLoggedIn() && navigate('/todo');
    } else if (path === 'todo') {
      !isLoggedIn() && navigate('/signin');
    } else {
      isLoggedIn() ? navigate('/todo') : navigate('/signin');
    }
  }, [params]);

  return element;
};

export default ProtectedRoute;
