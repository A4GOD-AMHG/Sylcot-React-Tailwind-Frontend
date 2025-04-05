import { useCallback, useState } from 'react';
import { toast } from 'react-toastify';
import CategoryService from '@/services/CategoryService';

const useCategories = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleError = (message) => {
        toast.error(message || 'Error!', {
            position: "top-right",
            autoClose: 5000,
            className: 'bg-red-700 text-white'
        });
    };
    const getCategories = useCallback(async () => {
        try {
            setLoading(true);
            const data = await CategoryService.getCategories();
            setCategories(data);
        } catch (error) {
            handleError(error.message);
        } finally {
            setLoading(false);
        }
    }, []);

    return { categories, loading, getCategories }
};

export default useCategories