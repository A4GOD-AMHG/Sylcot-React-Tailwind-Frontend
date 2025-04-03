import { useEffect, useState } from 'react';
import { AuthContext } from '@/context/AuthContext';
import AuthService from '@/services/AuthService';

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadUser = async () => {
            try {
                const userData = await AuthService.getMe();
                setUser(userData);
            } catch (error) {
                console.log(error)
                setUser(null);
            } finally {
                setLoading(false);
            }
        };

        const token = localStorage.getItem('access_token');
        token ? loadUser() : setLoading(false);
    }, []);

    const login = async (credentials) => {
        const data = await AuthService.login(credentials);
        localStorage.setItem('access_token', data.accessToken);
        setUser(data.user);
    };

    const register = async (userData) => {
        const data = await AuthService.register(userData);
        if (data.accessToken) {
            localStorage.setItem('access_token', data.accessToken);
            setUser(data.user);
        }
        return data;
    };

    const forgotPassword = async (email) => {
        const data = await AuthService.forgotPassword(email);
        return data;
    };

    const resetPassword = async ({ token, password }) => {
        const data = await AuthService.resetPassword({ token, password });
        return data;
    };

    const logout = () => {
        localStorage.removeItem('access_token');
        setUser(null);
    };

    const value = {
        user,
        loading,
        login,
        register,
        resetPassword,
        forgotPassword,
        logout,
        isAuthenticated: !!user,
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}

export default AuthProvider