import api from '@/services/api';

const AuthService = {
    login: async (credentials) => {
        try {
            const response = await api.post('/auth/login', credentials);
            return response.data;
        } catch (error) {
            throw new Error(error.response?.data?.error);
        }
    },

    register: async (userData) => {
        try {
            const response = await api.post('/auth/register', userData);
            return response.data;
        } catch (error) {
            throw new Error(error.response?.data?.error);
        }
    },

    forgotPassword: async (email) => {
        try {
            const response = await api.post('/auth/forgot-password', { email });
            return response.data;
        } catch (error) {
            throw new Error(error.response?.data?.error);
        }
    },

    resetPassword: async ({ token, password }) => {
        try {
            const response = await api.post('/auth/reset-password', { token, password });
            return response.data;
        } catch (error) {
            throw new Error(error.response?.data?.error);
        }
    },

    verifyEmail: async (token) => {
        try {
            const response = await api.get(`/auth/verify-email?token=${token}`);
            return response.data;
        } catch (error) {
            throw new Error(error.response?.data?.error);
        }
    },
};

export default AuthService;