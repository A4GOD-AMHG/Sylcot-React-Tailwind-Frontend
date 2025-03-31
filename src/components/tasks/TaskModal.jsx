import { useState } from 'react';

const TaskModal = ({ onClose, onSave }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('todo');

    const handleSubmit = () => {
        onSave({ title, description, category });
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg w-96">
                <h2 className="text-xl font-bold mb-4 dark:text-white">Nueva Tarea</h2>
                <div className="space-y-4">
                    <div>
                        <label className="block mb-2 dark:text-gray-300">Título</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full px-3 py-2 border rounded dark:bg-gray-700"
                        />
                    </div>
                    <div>
                        <label className="block mb-2 dark:text-gray-300">Descripción</label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full px-3 py-2 border rounded dark:bg-gray-700"
                        />
                    </div>
                    <div>
                        <label className="block mb-2 dark:text-gray-300">Categoría</label>
                        <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="w-full px-3 py-2 border rounded dark:bg-gray-700"
                        >
                            <option value="todo">Por Hacer</option>
                            <option value="inProgress">En Progreso</option>
                            <option value="done">Completada</option>
                        </select>
                    </div>
                    <div className="flex justify-end gap-4">
                        <button
                            onClick={onClose}
                            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                        >
                            Cancelar
                        </button>
                        <button
                            onClick={handleSubmit}
                            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                        >
                            Guardar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TaskModal