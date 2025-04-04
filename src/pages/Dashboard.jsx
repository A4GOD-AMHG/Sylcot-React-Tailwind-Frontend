import { useEffect, useState } from 'react';
import TaskModal from '@/components/tasks/TaskModal';
import TaskCard from '@/components/tasks/TaskCard';
import { FaChevronDown, FaTimes } from 'react-icons/fa';

const dataCategories = [
    { "id": 1, "title": "Home" },
    { "id": 2, "title": "Work" },
]

export const Dashboard = () => {
    const [showModal, setShowModal] = useState(false);
    const [tasks, setTasks] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filters, setFilters] = useState({
        search: '',
        selectedCategories: [],
        selectedStatuses: [],
        selectedPriorities: [],
        sortBy: 'created_at',
        order: 'asc'
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [tasksRes, categoriesRes] = await Promise.all([
                    getTasks(),
                    getCategories()
                ]);
                setTasks(tasksRes.data);
                setCategories(categoriesRes.data);
            } catch (err) {
                setError(err.response?.data?.message || 'Error fetching data');
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const handleClearSearch = () => {
        setFilters(prev => ({ ...prev, search: '' }));
    };

    const handleResetFilters = () => {
        setFilters({
            search: '',
            selectedCategories: [],
            selectedStatuses: [],
            selectedPriorities: [],
            sortBy: 'created_at',
            order: 'asc'
        });
    };

    const filteredTasks = tasks.filter(task => {
        const matchesSearch = task.title.toLowerCase().includes(filters.search.toLowerCase());

        const matchesCategory = filters.selectedCategories.length === 0 ||
            filters.selectedCategories.includes(task.category_id.toString());

        const matchesStatus = filters.selectedStatuses.length === 0 ||
            filters.selectedStatuses.includes(task.status.toString());

        const matchesPriority = filters.selectedPriorities.length === 0 ||
            filters.selectedPriorities.includes(task.priority);

        return matchesSearch && matchesCategory && matchesStatus && matchesPriority;
    });
    const sortedTasks = [...filteredTasks].sort((a, b) => {
        if (filters.sortBy === 'created_at') {
            return new Date(a.created_at) - new Date(b.created_at);
        }
        if (filters.sortBy === 'title') {
            return a.title.localeCompare(b.title);
        }
        return 0;
    });

    const handleCategoryFilter = (categoryId) => {
        setFilters(prev => ({
            ...prev,
            selectedCategories: prev.selectedCategories.includes(categoryId)
                ? prev.selectedCategories.filter(id => id !== categoryId)
                : [...prev.selectedCategories, categoryId]
        }));
    };

    const handleStatusFilter = (status) => {
        setFilters(prev => ({
            ...prev,
            selectedStatuses: prev.selectedStatuses.includes(status)
                ? prev.selectedStatuses.filter(s => s !== status)
                : [...prev.selectedStatuses, status]
        }));
    };

    const handlePriorityFilter = (priority) => {
        setFilters(prev => ({
            ...prev,
            selectedPriorities: prev.selectedPriorities.includes(priority)
                ? prev.selectedPriorities.filter(p => p !== priority)
                : [...prev.selectedPriorities, priority]
        }));
    };

    useEffect(() => {
        setCategories(dataCategories);
    }, []);

    useEffect(() => {
        setTasks([]);
    }, []);
    const addTask = async (newTask) => {
        try {
            const res = await createTask({
                title: newTask.title,
                category_id: parseInt(newTask.category),
                priority: newTask.priority
            });
            setTasks([...tasks, res.data]);
        } catch (err) {
            setError(err.response?.data?.message || 'Error creating task');
        }
    };

    const handleUpdateTask = async (updatedTask) => {
        try {
            const res = await updateTask(updatedTask.id, {
                title: updatedTask.title,
                category_id: parseInt(updatedTask.category),
                priority: updatedTask.priority
            });
            setTasks(tasks.map(task => task.id === res.data.id ? res.data : task));
        } catch (err) {
            setError(err.response?.data?.message || 'Error updating task');
        }
    };

    const onDeleteTask = async (taskId) => {
        try {
            await deleteTask(taskId);
            setTasks(tasks.filter(task => task.id !== taskId));
        } catch (err) {
            setError(err.response?.data?.message || 'Error deleting task');
        }
    };

    const onToggleTask = async (taskId) => {
        try {
            const res = await toggleTask(taskId);
            setTasks(tasks.map(task =>
                task.id === taskId ? res.data : task
            ));
        } catch (err) {
            setError(err.response?.data?.message || 'Error toggling task');
        }
    };

    const handleEditTask = (task) => {
        setEditingTask(task);
        setShowModal(true);
    };

    return (
        <div className='flex flex-col py-4'>
            <div className="mb-6">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold text-gray-700 dark:text-white">Filters</h2>
                    <div className="flex gap-3">
                        <button
                            onClick={handleResetFilters}
                            className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                        >
                            Reset Filters
                        </button>
                        <button
                            onClick={() => setShowModal(true)}
                            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                        >
                            New Task
                        </button>
                    </div>
                </div>

                <div className="flex flex-wrap gap-3">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search by title..."
                            className="custom-input w-48 text-gray-700 dark:text-white pr-8"
                            value={filters.search}
                            onChange={(e) => setFilters(prev => ({ ...prev, search: e.target.value }))}
                        />
                        {filters.search && (
                            <button
                                onClick={handleClearSearch}
                                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-200"
                            >
                                <FaTimes className="w-4 h-4" />
                            </button>
                        )}
                    </div>

                    <div className="relative group">
                        <button className="custom-input flex items-center gap-2 text-gray-700 dark:text-white">
                            <span>Categories</span>
                            <FaChevronDown className="text-sm" />
                        </button>
                        <div className="absolute hidden group-hover:block bg-white dark:bg-gray-800 p-2 rounded shadow-lg z-10 min-w-[200px]">
                            {categories.map(category => (
                                <label key={category.id} className="flex items-center gap-2 p-1 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-100">
                                    <input
                                        type="checkbox"
                                        checked={filters.selectedCategories.includes(category.id.toString())}
                                        onChange={() => handleCategoryFilter(category.id.toString())}
                                        className="form-checkbox"
                                    />
                                    {category.title}
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className="relative group">
                        <button className="custom-input flex items-center gap-2 text-gray-700 dark:text-white">
                            <span>Status</span>
                            <FaChevronDown className="text-sm" />
                        </button>
                        <div className="absolute hidden group-hover:block bg-white dark:bg-gray-800 p-2 rounded shadow-lg z-10">
                            {['true', 'false'].map(status => (
                                <label key={status} className="flex items-center gap-2 p-1 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-100">
                                    <input
                                        type="checkbox"
                                        checked={filters.selectedStatuses.includes(status)}
                                        onChange={() => handleStatusFilter(status)}
                                        className="form-checkbox"
                                    />
                                    {status === 'true' ? 'Completed' : 'Incomplete'}
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className="relative group">
                        <button className="custom-input flex items-center gap-2 text-gray-700 dark:text-white">
                            <span>Priority</span>
                            <FaChevronDown className="text-sm" />
                        </button>
                        <div className="absolute hidden group-hover:block bg-white dark:bg-gray-800 p-2 rounded shadow-lg z-10">
                            {['low', 'medium', 'high'].map(priority => (
                                <label key={priority} className="flex items-center gap-2 p-1 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-100">
                                    <input
                                        type="checkbox"
                                        checked={filters.selectedPriorities.includes(priority)}
                                        onChange={() => handlePriorityFilter(priority)}
                                        className="form-checkbox"
                                    />
                                    {priority.charAt(0).toUpperCase() + priority.slice(1)}
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className="relative group">
                        <button className="custom-input flex items-center gap-2 text-gray-700 dark:text-white">
                            <span>Sort By</span>
                            <FaChevronDown className="text-sm" />
                        </button>
                        <div className="absolute hidden group-hover:block bg-white dark:bg-gray-800 p-2 rounded shadow-lg z-10 min-w-[120px]">
                            {[
                                { value: 'created_at', label: 'Date' },
                                { value: 'title', label: 'Title' },
                                { value: 'category', label: 'Category' }
                            ].map(option => (
                                <div
                                    key={option.value}
                                    onClick={() => setFilters(prev => ({ ...prev, sortBy: option.value }))}
                                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer text-gray-700 dark:text-gray-100"
                                >
                                    {option.label}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                {sortedTasks.map(task => (
                    <TaskCard
                        key={task.id}
                        task={task}
                        onToggleTask={onToggleTask}
                        onDeleteTask={onDeleteTask}
                    />
                ))}
            </div>

            {showModal && (
                <TaskModal
                    onClose={() => setShowModal(false)}
                    onSave={addTask}
                    categories={categories}
                />
            )}
        </div>
    );
};