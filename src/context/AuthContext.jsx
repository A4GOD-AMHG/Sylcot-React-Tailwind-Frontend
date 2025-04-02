// src/context/auth-context.jsx
import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import api from '@/services/api';
import { toast } from 'react-toastify';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [state, setState] = useState({
        user: null,
        loading: true,
        isAuthenticated: false
    });

    const checkSession = useCallback(async () => {
        try {
            const { data } = await api.get('/auth/me');
            setState(prev => ({
                ...prev,
                user: data,
                isAuthenticated: !!data,
                loading: false
            }));
        } catch (error) {
            localStorage.removeItem('token');
            setState(prev => ({ ...prev, loading: false, isAuthenticated: false }));
        }
    }, []);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) checkSession();
        else setState(prev => ({ ...prev, loading: false }));
    }, [checkSession]);

    const login = async (credentials) => {
        try {
            const { data: { token } } = await api.post('/auth/login', credentials);
            localStorage.setItem('token', token);
            await checkSession();
            toast.success('Welcome back!');
        } catch (error) {
            const message = error.response?.data?.message || 'Login failed';
            toast.error(message);
            throw error;
        }
    };

    const register = async (userData) => {
        try {
            await api.post('/auth/register', userData);
            toast.success('Registration successful! Check your email to verify');
            return true;
        } catch (error) {
            const message = error.response?.data?.message || 'Registration failed';
            toast.error(message);
            throw error;
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        setState({
            user: null,
            loading: false,
            isAuthenticated: false
        });
        toast.info('Logged out successfully');
    };

    const value = {
        ...state,
        login,
        logout,
        register
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};