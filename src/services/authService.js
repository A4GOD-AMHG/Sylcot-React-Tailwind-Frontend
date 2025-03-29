import api from '@/services/api';

const authService = {
    async login(credentials) {
        const { data } = await api.post('/auth/login', credentials);
        localStorage.setItem('token', data.token);
        return this.getUserData();
    },

    async checkSession() {
        const token = localStorage.getItem('token');
        if (!token) return null;

        const { data } = await api.get('/auth/me');
        return data;
    },

    logout() {
        localStorage.removeItem('token');
        api.defaults.headers.common['Authorization'] = '';
    },

    clearSession() {
        this.logout();
        window.location.reload();
    },

    async getUserData() {
        const { data } = await api.get('/auth/me');
        return data;
    }
};

export default authService;