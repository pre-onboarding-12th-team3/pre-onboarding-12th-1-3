import { useEffect, useState } from 'react';
import { useNavigate, NavigateFunction } from 'react-router-dom';
import { todoApi } from '@/apis/todo';

interface ProtectedRouteProps {
  element: JSX.Element;
  path: string;
}

const isSignInOrSignUp = (path: string) => path === 'signin' || path === 'signup';

const navigateBasedOnAuth = (
  navigate: NavigateFunction,
  path: string,
  isAuthenticated: boolean,
) => {
  if (path === 'todo' && !isAuthenticated) {
    navigate('/');
  } else if (isSignInOrSignUp(path) && isAuthenticated) {
    navigate('/todo');
  } else if (!isSignInOrSignUp(path) && !isAuthenticated) {
    navigate('/signin');
  } else if (!isSignInOrSignUp(path) && isAuthenticated) {
    navigate('/todo');
  }
};

const ProtectedRoute = ({ element, path }: ProtectedRouteProps) => {
  const navigate = useNavigate();
  const [authenticated, setAuthenticated] = useState<boolean | null>(null);

  const isLoggedIn = async () => {
    const token = localStorage.getItem('access_token');
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
      setAuthenticated(isAuthenticated);
      navigateBasedOnAuth(navigate, path, isAuthenticated);
    };
    checkLoggedIn();
  }, [path]);

  const shouldRender = () => {
    if ((isSignInOrSignUp(path) && authenticated) || (path === 'todo' && !authenticated)) {
      return null;
    } else {
      return element;
    }
  };

  return shouldRender();
};

export default ProtectedRoute;
