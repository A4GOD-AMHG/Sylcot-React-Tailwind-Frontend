import { Routes, Route } from 'react-router-dom';
import { Home } from '@/pages/Home';
import { Login } from '@/components/auth/Login';
import { Dashboard } from '@/pages/Dashboard';
import ProtectedRoute from '@/components/auth/ProtectedRoute';
import { NotFound } from '@/components/shared/NotFound';

const RouterConfig = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />

            <Route element={<ProtectedRoute />}>
                <Route path="/dashboard" element={<Dashboard />} />
            </Route>

            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default RouterConfig;