import api from '@/services/api';

const CategoryService = {
    getCategories: async () => {
        try {
            const response = await api.get('/categories');
            return response.data;
        } catch (error) {
            throw new Error(error.response?.data?.error);
        }
    }
}

export default CategoryService