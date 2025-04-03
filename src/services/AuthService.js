import api from '@/services/api';

const AuthService = {
    login: async (credentials) => {
        const { data } = await api.post('/auth/login', credentials);
        return data;
    },

    register: async (userData) => {
        const { data } = await api.post('/auth/register', userData);
        return data;
    },

    forgotPassword: async (email) => {
        const { data } = await api.post('/auth/forgot-password', { email });
        return data;
    },

    resetPassword: async ({ token, password }) => {
        const { data } = await api.post('/auth/reset-password', { token, password });
        return data;
    },

    verifyEmail: async (token) => {
        const { data } = await api.post(`/auth/verify-email/${token}`);
        return data;
    },
};

export default AuthService;