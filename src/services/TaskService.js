import api from '@/services/api';

const TaskService = {
    getTasks: async () => {
        try {
            const response = await api.get('/tasks');
            return response.data;
        } catch (error) {
            throw new Error(error.response?.data?.error);
        }
    },

    createTask: async (task) => {
        try {
            const response = await api.post('/tasks', task);
            return response.data;
        } catch (error) {
            throw new Error(error.response?.data?.error);
        }
    },

    updateTask: async (id, task) => {
        try {
            const response = await api.put(`/tasks/${id}`, task);
            return response.data;
        } catch (error) {
            throw new Error(error.response?.data?.error);
        }
    },

    deleteTask: async (id) => {
        try {
            const response = await api.delete(`/tasks/${id}`);
            return response.data;
        } catch (error) {
            throw new Error(error.response?.data?.error);
        }
    },

    toggleTask: async (id) => {
        try {
            const response = await api.patch(`/tasks/${id}/complete`);
            return response.data;
        } catch (error) {
            throw new Error(error.response?.data?.error);
        }
    },
};

export default TaskService;