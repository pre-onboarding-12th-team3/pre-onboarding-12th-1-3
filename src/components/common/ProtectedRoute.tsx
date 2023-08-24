import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

interface ProtectedRouteProps {
    element: JSX.Element;
    path: string;
  }
  
  const isLoggedIn = () => {
    const token = localStorage.getItem('access_token');
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
  
export default ProtectedRoute;