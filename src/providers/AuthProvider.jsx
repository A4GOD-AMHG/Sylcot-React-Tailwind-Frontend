import { useState } from 'react';
import { AuthContext } from '@/context/AuthContext';
import AuthService from '@/services/AuthService';
import { toast } from 'react-toastify';

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const handleSuccess = (message) => {
        toast.success(message || 'Success!', {
            position: "top-right",
            autoClose: 5000,
            className: 'bg-green-700 text-white'
        });
    };

    const handleError = (message) => {
        toast.error(message || 'Error!', {
            position: "top-right",
            autoClose: 5000,
            className: 'bg-red-700 text-white'
        });
    };

    const login = async (credentials) => {

        try {
            const data = await AuthService.login(credentials);
            localStorage.setItem('token', data.token);
            setUser(data.user);
            handleSuccess("User successfully logged");
        } catch (error) {
            handleError(error.message);
        }
    };

    const register = async (userData) => {
        try {
            const data = await AuthService.register(userData);
            if (data.token) {
                localStorage.setItem('token', data.token);
                setUser(data.user);
            }
            handleSuccess(data.message);
            return data;
        } catch (error) {
            console.log(error)
            handleError(error.response?.data?.message || error.message);
        }
    };

    const verifyEmail = async (email) => {
        try {
            const data = await AuthService.verifyEmail(email);
            console.log(data)
            handleSuccess(data.message);
            return data;
        } catch (error) {
            handleError(error.response?.data?.message || error.message);
        }
    };

    const forgotPassword = async (email) => {
        try {
            const data = await AuthService.forgotPassword(email);
            handleSuccess(data.message);
            return data;
        } catch (error) {
            handleError(error.response?.data?.message || error.message);
            throw error;
        }
    };

    const resetPassword = async ({ token, password }) => {
        try {
            const data = await AuthService.resetPassword({ token, password });
            handleSuccess(data.message);
            return data;
        } catch (error) {
            handleError(error.response?.data?.message || error.message);
            throw error;
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
        handleSuccess('User successfully logged out');
    };

    const value = {
        user,
        login,
        register,
        verifyEmail,
        resetPassword,
        forgotPassword,
        logout,
        isAuthenticated: !!user,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;