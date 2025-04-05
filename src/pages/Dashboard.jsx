import { useEffect, useState } from 'react';
import TaskModal from '@/components/tasks/TaskModal';
import TaskCard from '@/components/tasks/TaskCard';
import { FaChevronDown, FaTimes } from 'react-icons/fa';
import useTasks from '@/hooks/useTasks';
import useCategories from '@/hooks/useCategories';

export const Dashboard = () => {
    const [showModal, setShowModal] = useState(false);
    const { tasks, loading, createTask, deleteTask, getTasks, toggleTask, updateTask } = useTasks();
    const { categories, loading: categoriesLoading, getCategories } = useCategories();
    const [selectedTask, setSelectedTask] = useState(null);

    const [filters, setFilters] = useState({
        search: '',
        selectedCategories: [],
        selectedStatuses: [],
        selectedPriorities: [],
        sortBy: 'created_at',
        order: 'asc'
    });

    useEffect(() => {
        const fetchData = async () => await Promise.all([getTasks(), getCategories()]);
        fetchData();
    }, [getCategories, getTasks]);

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
        const taskTitle = task?.title?.toLowerCase() || '';
        const taskCategory = task?.category_id?.toString() || '';
        const taskStatus = task?.status?.toString() || '';
        const taskPriority = task?.priority || '';

        const matchesSearch = taskTitle.includes(filters.search.toLowerCase());

        const matchesCategory = filters.selectedCategories.length === 0 ||
            filters.selectedCategories.includes(taskCategory);

        const matchesStatus = filters.selectedStatuses.length === 0 ||
            filters.selectedStatuses.includes(taskStatus);

        const matchesPriority = filters.selectedPriorities.length === 0 ||
            filters.selectedPriorities.includes(taskPriority);

        return matchesSearch && matchesCategory && matchesStatus && matchesPriority;
    });

    var sortedTasks = [...filteredTasks].sort((a, b) => {
        if (filters.sortBy === 'created_at') {
            return new Date(a.created_at) - new Date(b.created_at);
        }
        if (filters.sortBy === 'title') {
            return a.title.localeCompare(b.title);
        }
        if (filters.sortBy === 'category') {
            return a.category.title.localeCompare(b.category.title);
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

    const onCreateTask = async (newTask) => {
        await createTask({
            title: newTask.title,
            category_id: parseInt(newTask.category),
            priority: newTask.priority
        });
    };

    const onUpdateTask = async (updatedTask) => {
        await updateTask(updatedTask.id, {
            title: updatedTask.title,
            category_id: parseInt(updatedTask.category),
            priority: updatedTask.priority
        });
    };

    const onDeleteTask = async (taskId) => {
        await deleteTask(taskId);
        await getTasks()
    };

    const onToggleTask = async (taskId) => {
        await toggleTask(taskId);
        await getTasks();
    };

    const openEditModal = (task) => {
        setSelectedTask(task);
        setShowModal(true);
    };

    if (loading || categoriesLoading) {
        return (
            <div className="flex justify-center p-8">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
            </div>
        );
    }

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
                {sortedTasks?.length > 0 && sortedTasks.map(task => (
                    <TaskCard
                        key={task.id}
                        task={task}
                        onUpdateTask={openEditModal}
                        onToggleTask={onToggleTask}
                        onDeleteTask={onDeleteTask}
                    />
                ))}
            </div>

            {showModal && (
                <TaskModal
                    onClose={() => setShowModal(false)}
                    onCreate={onCreateTask}
                    onUpdate={onUpdateTask}
                    selectedTask={selectedTask}
                    categories={categories}
                />
            )}
        </div>
    );
};