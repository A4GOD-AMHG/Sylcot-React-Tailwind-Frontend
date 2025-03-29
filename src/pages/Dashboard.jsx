import { useState } from 'react';
import Header from '../components/shared/Header';
import Footer from '../components/shared/Footer';
import { TaskModal } from '../components/tasks/TaskModal';

export const Dashboard = () => {
    const [showModal, setShowModal] = useState(false);
    const [tasks, setTasks] = useState([]);
    const [filters, setFilters] = useState({
        search: '',
        sortBy: 'createdAt',
        order: 'asc'
    });

    const columns = {
        todo: 'Por Hacer',
        inProgress: 'En Progreso',
        done: 'Completadas'
    };

    const addTask = (newTask) => {
        setTasks([...tasks, { ...newTask, id: Date.now(), createdAt: new Date() }]);
    };

    const filteredTasks = tasks.filter(task =>
        task.title.toLowerCase().includes(filters.search.toLowerCase()) ||
        task.description.toLowerCase().includes(filters.search.toLowerCase())
    ).sort((a, b) => {
        // Lógica de ordenamiento
    });

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="container mx-auto px-6 py-8 flex-1">
                <div className="mb-6 flex justify-between items-center">
                    <div className="flex gap-4">
                        <input
                            type="text"
                            placeholder="Buscar tareas..."
                            className="px-4 py-2 border rounded-lg dark:bg-gray-700"
                            onChange={(e) => setFilters({ ...filters, search: e.target.value })}
                        />
                        <select
                            className="px-4 py-2 border rounded-lg dark:bg-gray-700"
                            value={filters.sortBy}
                            onChange={(e) => setFilters({ ...filters, sortBy: e.target.value })}
                        >
                            <option value="createdAt">Fecha</option>
                            <option value="title">Título</option>
                            <option value="category">Categoría</option>
                        </select>
                    </div>
                    <button
                        onClick={() => setShowModal(true)}
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                    >
                        Nueva Tarea
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {Object.entries(columns).map(([key, label]) => (
                        <div key={key} className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                            <h3 className="text-lg font-semibold mb-4 dark:text-white">{label}</h3>
                            {filteredTasks
                                .filter(task => task.status === key)
                                .map(task => (
                                    <TaskCard
                                        key={task.id}
                                        task={task}
                                        onDelete={() => handleDelete(task.id)}
                                        onToggleComplete={() => handleToggleComplete(task.id)}
                                    />
                                ))}
                        </div>
                    ))}
                </div>
            </main>

            <Footer />

            {showModal && (
                <TaskModal
                    onClose={() => setShowModal(false)}
                    onSave={addTask}
                />
            )}
        </div>
    );
};