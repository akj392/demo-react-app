import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Spinner } from './components';

const ProtectedRoute = () => {
    const { isAuthenticated, isInitializing } = useSelector(state => state.auth);

    if (isInitializing) {
        return <Spinner/>;
    }

    return isAuthenticated
        ? <Outlet />
        : <Navigate to="/login" replace />;
}

export default ProtectedRoute