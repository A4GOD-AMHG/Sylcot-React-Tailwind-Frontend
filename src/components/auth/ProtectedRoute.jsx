import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '@/hooks/useAuth';
import LoadingSpinner from '@/components/shared/LoadingSpinner';

const ProtectedRoute = () => {
    const { isAuthenticated, loading } = useAuth();

    if (loading) {
        return <LoadingSpinner />;
    }

    // return isAuthenticated ? <Outlet /> : <Navigate to="/auth/login" replace />;
    return <Outlet />
};

export default ProtectedRoute;