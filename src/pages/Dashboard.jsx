import { useEffect, useState } from 'react';
import TaskModal from '@/components/tasks/TaskModal';
import TaskCard from '@/components/tasks/TaskCard';
import { FaChevronDown, FaTimes } from 'react-icons/fa';


const data = [
    {
        "id": 2,
        "created_at": "2025-03-31T02:08:07.508Z",
        "updated_at": "2025-03-31T02:08:07.508Z",
        "deleted_at": null,
        "title": "Task 1",
        "priority": "low",
        "status": false,
        "category_id": 1,
        "user_id": 1,
        "category": {
            "id": 1,
            "created_at": "2025-02-25T20:39:58.304Z",
            "updated_at": "2025-02-25T20:39:58.304Z",
            "deleted_at": null,
            "title": "Home",
            "color": "#FFAB91",
            "icon_name": "home"
        },
        "user": {
            "id": 1,
            "created_at": "2025-03-27T19:18:14.314Z",
            "updated_at": "2025-03-27T19:19:59.194Z",
            "deleted_at": null,
            "name": "alexis",
            "email": "alexisalastor@gmail.com",
            "password": "$2a$10$wcdiAgLOb/GpvkWk5BKcbeF3xbgo69C9ZaiDsikQ4R07cJICodSnq",
            "is_verified": true,
            "refresh_token": "",
            "token": "",
            "reset_token": ""
        }
    },
    {
        "id": 3,
        "created_at": "2025-03-31T02:08:17.81Z",
        "updated_at": "2025-03-31T02:08:17.81Z",
        "deleted_at": null,
        "title": "Task 2",
        "priority": "high",
        "status": false,
        "category_id": 1,
        "user_id": 1,
        "category": {
            "id": 1,
            "created_at": "2025-02-25T20:39:58.304Z",
            "updated_at": "2025-02-25T20:39:58.304Z",
            "deleted_at": null,
            "title": "Home",
            "color": "#FFAB91",
            "icon_name": "home"
        },
        "user": {
            "id": 1,
            "created_at": "2025-03-27T19:18:14.314Z",
            "updated_at": "2025-03-27T19:19:59.194Z",
            "deleted_at": null,
            "name": "alexis",
            "email": "alexisalastor@gmail.com",
            "password": "$2a$10$wcdiAgLOb/GpvkWk5BKcbeF3xbgo69C9ZaiDsikQ4R07cJICodSnq",
            "is_verified": true,
            "refresh_token": "",
            "token": "",
            "reset_token": ""
        }
    },
    {
        "id": 4,
        "created_at": "2025-03-31T02:08:22.888Z",
        "updated_at": "2025-03-31T02:08:22.888Z",
        "deleted_at": null,
        "title": "Task 3",
        "priority": "high",
        "status": false,
        "category_id": 3,
        "user_id": 1,
        "category": {
            "id": 3,
            "created_at": "2025-02-25T20:39:58.324Z",
            "updated_at": "2025-02-25T20:39:58.324Z",
            "deleted_at": null,
            "title": "Sports",
            "color": "#81C784",
            "icon_name": "sports_soccer"
        },
        "user": {
            "id": 1,
            "created_at": "2025-03-27T19:18:14.314Z",
            "updated_at": "2025-03-27T19:19:59.194Z",
            "deleted_at": null,
            "name": "alexis",
            "email": "alexisalastor@gmail.com",
            "password": "$2a$10$wcdiAgLOb/GpvkWk5BKcbeF3xbgo69C9ZaiDsikQ4R07cJICodSnq",
            "is_verified": true,
            "refresh_token": "",
            "token": "",
            "reset_token": ""
        }
    },
    {
        "id": 5,
        "created_at": "2025-03-31T02:08:31.787Z",
        "updated_at": "2025-03-31T02:08:31.787Z",
        "deleted_at": null,
        "title": "Task 4",
        "priority": "medium",
        "status": false,
        "category_id": 3,
        "user_id": 1,
        "category": {
            "id": 3,
            "created_at": "2025-02-25T20:39:58.324Z",
            "updated_at": "2025-02-25T20:39:58.324Z",
            "deleted_at": null,
            "title": "Sports",
            "color": "#81C784",
            "icon_name": "sports_soccer"
        },
        "user": {
            "id": 1,
            "created_at": "2025-03-27T19:18:14.314Z",
            "updated_at": "2025-03-27T19:19:59.194Z",
            "deleted_at": null,
            "name": "alexis",
            "email": "alexisalastor@gmail.com",
            "password": "$2a$10$wcdiAgLOb/GpvkWk5BKcbeF3xbgo69C9ZaiDsikQ4R07cJICodSnq",
            "is_verified": true,
            "refresh_token": "",
            "token": "",
            "reset_token": ""
        }
    },
    {
        "id": 6,
        "created_at": "2025-03-31T02:08:41.992Z",
        "updated_at": "2025-03-31T02:08:41.992Z",
        "deleted_at": null,
        "title": "Task 5",
        "priority": "low",
        "status": false,
        "category_id": 3,
        "user_id": 1,
        "category": {
            "id": 3,
            "created_at": "2025-02-25T20:39:58.324Z",
            "updated_at": "2025-02-25T20:39:58.324Z",
            "deleted_at": null,
            "title": "Sports",
            "color": "#81C784",
            "icon_name": "sports_soccer"
        },
        "user": {
            "id": 1,
            "created_at": "2025-03-27T19:18:14.314Z",
            "updated_at": "2025-03-27T19:19:59.194Z",
            "deleted_at": null,
            "name": "alexis",
            "email": "alexisalastor@gmail.com",
            "password": "$2a$10$wcdiAgLOb/GpvkWk5BKcbeF3xbgo69C9ZaiDsikQ4R07cJICodSnq",
            "is_verified": true,
            "refresh_token": "",
            "token": "",
            "reset_token": ""
        }
    },
    {
        "id": 7,
        "created_at": "2025-03-31T02:08:49.092Z",
        "updated_at": "2025-03-31T02:08:49.092Z",
        "deleted_at": null,
        "title": "Task 6",
        "priority": "medium",
        "status": false,
        "category_id": 5,
        "user_id": 1,
        "category": {
            "id": 5,
            "created_at": "2025-02-25T20:39:58.343Z",
            "updated_at": "2025-02-25T20:39:58.343Z",
            "deleted_at": null,
            "title": "Health",
            "color": "#EF9A9A",
            "icon_name": "favorite_border"
        },
        "user": {
            "id": 1,
            "created_at": "2025-03-27T19:18:14.314Z",
            "updated_at": "2025-03-27T19:19:59.194Z",
            "deleted_at": null,
            "name": "alexis",
            "email": "alexisalastor@gmail.com",
            "password": "$2a$10$wcdiAgLOb/GpvkWk5BKcbeF3xbgo69C9ZaiDsikQ4R07cJICodSnq",
            "is_verified": true,
            "refresh_token": "",
            "token": "",
            "reset_token": ""
        }
    },
    {
        "id": 8,
        "created_at": "2025-03-31T02:08:55.222Z",
        "updated_at": "2025-03-31T02:08:55.222Z",
        "deleted_at": null,
        "title": "Task 7",
        "priority": "medium",
        "status": false,
        "category_id": 7,
        "user_id": 1,
        "category": {
            "id": 7,
            "created_at": "2025-02-25T20:39:58.362Z",
            "updated_at": "2025-02-25T20:39:58.362Z",
            "deleted_at": null,
            "title": "Shopping",
            "color": "#CE93D8",
            "icon_name": "shopping_cart"
        },
        "user": {
            "id": 1,
            "created_at": "2025-03-27T19:18:14.314Z",
            "updated_at": "2025-03-27T19:19:59.194Z",
            "deleted_at": null,
            "name": "alexis",
            "email": "alexisalastor@gmail.com",
            "password": "$2a$10$wcdiAgLOb/GpvkWk5BKcbeF3xbgo69C9ZaiDsikQ4R07cJICodSnq",
            "is_verified": true,
            "refresh_token": "",
            "token": "",
            "reset_token": ""
        }
    },
    {
        "id": 9,
        "created_at": "2025-03-31T02:09:02.958Z",
        "updated_at": "2025-03-31T02:09:02.958Z",
        "deleted_at": null,
        "title": "Task 8",
        "priority": "high",
        "status": false,
        "category_id": 10,
        "user_id": 1,
        "category": {
            "id": 10,
            "created_at": "2025-02-25T20:39:58.39Z",
            "updated_at": "2025-02-25T20:39:58.39Z",
            "deleted_at": null,
            "title": "Social",
            "color": "#FFCC80",
            "icon_name": "groups"
        },
        "user": {
            "id": 1,
            "created_at": "2025-03-27T19:18:14.314Z",
            "updated_at": "2025-03-27T19:19:59.194Z",
            "deleted_at": null,
            "name": "alexis",
            "email": "alexisalastor@gmail.com",
            "password": "$2a$10$wcdiAgLOb/GpvkWk5BKcbeF3xbgo69C9ZaiDsikQ4R07cJICodSnq",
            "is_verified": true,
            "refresh_token": "",
            "token": "",
            "reset_token": ""
        }
    },
    {
        "id": 10,
        "created_at": "2025-03-31T02:09:06.411Z",
        "updated_at": "2025-03-31T02:09:06.411Z",
        "deleted_at": null,
        "title": "Task 9",
        "priority": "high",
        "status": false,
        "category_id": 10,
        "user_id": 1,
        "category": {
            "id": 10,
            "created_at": "2025-02-25T20:39:58.39Z",
            "updated_at": "2025-02-25T20:39:58.39Z",
            "deleted_at": null,
            "title": "Social",
            "color": "#FFCC80",
            "icon_name": "groups"
        },
        "user": {
            "id": 1,
            "created_at": "2025-03-27T19:18:14.314Z",
            "updated_at": "2025-03-27T19:19:59.194Z",
            "deleted_at": null,
            "name": "alexis",
            "email": "alexisalastor@gmail.com",
            "password": "$2a$10$wcdiAgLOb/GpvkWk5BKcbeF3xbgo69C9ZaiDsikQ4R07cJICodSnq",
            "is_verified": true,
            "refresh_token": "",
            "token": "",
            "reset_token": ""
        }
    },
    {
        "id": 11,
        "created_at": "2025-03-31T02:09:12.849Z",
        "updated_at": "2025-03-31T02:09:12.849Z",
        "deleted_at": null,
        "title": "Task 10",
        "priority": "low",
        "status": false,
        "category_id": 12,
        "user_id": 1,
        "category": {
            "id": 12,
            "created_at": "2025-02-25T20:39:58.408Z",
            "updated_at": "2025-02-25T20:39:58.408Z",
            "deleted_at": null,
            "title": "Pets",
            "color": "#BCAAA4",
            "icon_name": "pets"
        },
        "user": {
            "id": 1,
            "created_at": "2025-03-27T19:18:14.314Z",
            "updated_at": "2025-03-27T19:19:59.194Z",
            "deleted_at": null,
            "name": "alexis",
            "email": "alexisalastor@gmail.com",
            "password": "$2a$10$wcdiAgLOb/GpvkWk5BKcbeF3xbgo69C9ZaiDsikQ4R07cJICodSnq",
            "is_verified": true,
            "refresh_token": "",
            "token": "",
            "reset_token": ""
        }
    }
];

const dataCategories = [
    { "id": 1, "title": "Home" },
    { "id": 2, "title": "Work" },
]

export const Dashboard = () => {
    const [showModal, setShowModal] = useState(false);
    const [tasks, setTasks] = useState([]);
    const [categories, setCategories] = useState([]);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);
    const [filters, setFilters] = useState({
        search: '',
        selectedCategories: [],
        selectedStatuses: [],
        selectedPriorities: [],
        sortBy: 'created_at',
        order: 'asc'
    });

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

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const categoriesResponse = await fetch('/api/categories');
    //             const categoriesData = await categoriesResponse.json();
    //             setCategories(categoriesData);

    //             const tasksResponse = await fetch('/api/tasks');
    //             const tasksData = await tasksResponse.json();
    //             setTasks(tasksData);
    //         } catch (err) {
    //             setError(err.message);
    //         } finally {
    //             setLoading(false);
    //         }
    //     };

    //     fetchData();
    // }, []);

    useEffect(() => {
        setCategories(dataCategories);
    }, []);

    useEffect(() => {
        setTasks(data);
    }, []);

    const addTask = (newTask) => {
        setTasks([...tasks, { ...newTask, id: Date.now(), createdAt: new Date() }]);
    };

    const onToggleTask = (taskId) => {
        setTasks(prevTasks =>
            prevTasks.map(task =>
                task.id === taskId
                    ? { ...task, status: !task.status }
                    : task
            )
        );
    }

    const onDeleteTask = (taskId) => {
        setTasks(prevTasks =>
            prevTasks.filter(task => task.id !== taskId)
        );
    };

    // if (loading) {
    //     return (
    //         <div className="flex flex-col py-4">
    //             <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
    //                 {[...Array(6)].map((_, i) => (
    //                     <div key={i} className="animate-pulse bg-gray-200 dark:bg-gray-700 h-32 rounded-lg" />
    //                 ))}
    //             </div>
    //         </div>
    //     );
    // }

    // if (error) {
    //     return <div className="text-red-500 p-4">Error: {error}</div>;
    // }
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

                <button
                    onClick={() => setShowModal(true)}
                    className="px-4 py-2 bg-blue-500 cursor-pointer text-white rounded-lg hover:bg-blue-600"
                >
                    New Task
                </button>
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