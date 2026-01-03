import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Spinner } from './components';

const PublicRoute = () => {
  const { isAuthenticated, isInitializing } = useSelector(state => state.auth);

  if (isInitializing) {
    return <Spinner/>;
  }

  return isAuthenticated
    ? <Navigate to="/dashboard" replace />
    : <Outlet />;
};

export default PublicRoute;
