import { useEffect, useState } from 'react';
import TaskModal from '@/components/tasks/TaskModal';
import TaskCard from '@/components/tasks/TaskCard';


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

export const Dashboard = () => {
    const [showModal, setShowModal] = useState(false);
    const [tasks, setTasks] = useState([]);
    const [filters, setFilters] = useState({
        search: '',
        sortBy: 'createdAt',
        order: 'asc'
    });

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
    // const filteredTasks = tasks.filter(task =>
    //     task.title.toLowerCase().includes(filters.search.toLowerCase()) ||
    //     task.description.toLowerCase().includes(filters.search.toLowerCase())
    // ).sort((a, b) => {
    // });

    return (
        <div className='flex flex-col py-4'>
            <div className="mb-6 flex justify-between items-center">
                <div className="flex gap-3">
                    <input
                        type="text"
                        placeholder="Search by title..."
                        className="custom-input w-48"
                        onChange={(e) => setFilters({ ...filters, search: e.target.value })}
                    />
                    <select
                        className="custom-input w-32"
                        value={filters.sortBy}
                        onChange={(e) => setFilters({ ...filters, sortBy: e.target.value })}
                    >
                        <option value="createdAt">Date</option>
                        <option value="title">Title</option>
                        <option value="category">Category</option>
                    </select>
                </div>
                <button
                    onClick={() => setShowModal(true)}
                    className="px-4 py-2 bg-blue-500 cursor-pointer text-white rounded-lg hover:bg-blue-600"
                >
                    New Task
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                {tasks.map(task => (<TaskCard
                    key={task.id}
                    task={task}
                    onToggleTask={onToggleTask}
                    onDeleteTask={onDeleteTask}
                />))}
            </div>

            {showModal && (
                <TaskModal
                    onClose={() => setShowModal(false)}
                    onSave={addTask}
                />
            )}
        </div>
    );
};