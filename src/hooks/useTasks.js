import { useCallback, useState } from 'react';
import { toast } from 'react-toastify';
import TaskService from '@/services/TaskService';

const useTasks = () => {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(false);

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

    const getTasks = useCallback(async (userID) => {
        try {
            setLoading(true);
            const data = await TaskService.getTasks({ userID });
            setTasks(data || []);
        } catch (error) {
            handleError(error.message);
        } finally {
            setLoading(false);
        }
    }, []);

    const createTask = async (task) => {
        try {
            const data = await TaskService.createTask(task);
            setTasks(prev => [...prev, data.task]);
            handleSuccess(data.message);
            return data;
        } catch (error) {
            handleError(error.response?.data?.message || error.message);
        }
    };

    const updateTask = async (taskID, task) => {
        try {
            const data = await TaskService.updateTask(taskID, task);
            setTasks(prev => prev.map(task =>
                task.id === taskID ? data.task : task
            ));
            handleSuccess(data.message);
            return data;
        } catch (error) {
            handleError(error.response?.data?.message || error.message);
        }
    };

    const deleteTask = async (taskID) => {
        try {
            const data = await TaskService.deleteTask(taskID);
            setTasks(prev => prev.filter(task => task.id !== taskID));
            handleSuccess(data.message);
            return data;
        } catch (error) {
            handleError(error.response?.data?.message || error.message);
        }
    };

    const toggleTask = async (taskID) => {
        try {
            const data = await TaskService.toggleTask(taskID);
            setTasks(prev => prev.map(task =>
                task.id === taskID ? data.task : task
            ));
            handleSuccess(data.message);
            return data;
        } catch (error) {
            console.log(error)
            handleError(error.response?.data?.message || error.message);
        }
    };

    return { tasks, loading, getTasks, createTask, updateTask, deleteTask, toggleTask }
};

export default useTasks