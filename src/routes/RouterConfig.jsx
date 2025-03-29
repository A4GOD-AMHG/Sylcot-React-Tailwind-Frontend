import { Routes, Route } from 'react-router-dom';
import { Home } from '@/pages/Home';
import { Dashboard } from '@/pages/Dashboard';
import ProtectedRoute from '@/components/auth/ProtectedRoute';
import { PageNotFound } from '@/pages/PageNotFound';
import { Login, Register, VerifyEmail, ResetPassword } from '@/components/auth';
import { AuthLayout, Layout } from '@/components/layout';

const RouterConfig = () => {
    return (
        <Routes>
            <Route path="/auth" element={<AuthLayout />}>
                <Route path="/auth/login" element={<Login />} />
                <Route path="/auth/register" element={<Register />} />
                <Route path="/auth/verify-email" element={<VerifyEmail />} />
                <Route path="/auth/reset-password" element={<ResetPassword />} />
            </Route>

            <Route path='/' element={<Layout />}>
                <Route path="/" element={<Home />} />
            </Route>

            <Route element={<ProtectedRoute />}>
                <Route path="/dashboard" element={<Dashboard />} />
            </Route>

            <Route path="*" element={<PageNotFound />} />
        </Routes>
    );
};

export default RouterConfig;