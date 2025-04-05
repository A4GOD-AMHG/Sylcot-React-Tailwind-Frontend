import { useState } from 'react';

const TaskModal = ({ onClose, onCreate, onUpdate, selectedTask, categories }) => {
    const [title, setTitle] = useState(selectedTask?.title || '');
    const [selectedCategory, setSelectedCategory] = useState(
        selectedTask?.category_id?.toString() || (categories[0]?.id?.toString() || '')
    );
    const [priority, setPriority] = useState(selectedTask?.priority || 'medium');


    const handleSubmit = () => {
        selectedTask ? onUpdate({
            title,
            category: selectedCategory,
            priority,
            ...(selectedTask?.id && { id: selectedTask.id })
        }) :
            onCreate({
                title,
                category: selectedCategory,
                priority,
            });
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black/70 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg w-96 max-w-[95%]">
                <h2 className="text-xl font-bold mb-4 dark:text-white">New Task</h2>

                <div className="space-y-4">
                    <div>
                        <label className="block mb-2 text-gray-700 dark:text-gray-300">Title</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-500"
                            placeholder="Task name"
                        />
                    </div>

                    <div className="flex gap-4">
                        <div className="w-1/2">
                            <label className="block mb-2 text-gray-700 dark:text-gray-300">Category</label>
                            <select
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                                className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-500"
                            >
                                {categories.map((category) => (
                                    <option key={category.id} value={category.id}>
                                        {category.title}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="w-1/2">
                            <label className="block mb-2 text-gray-700 dark:text-gray-300">Priority</label>
                            <select
                                value={priority}
                                onChange={(e) => setPriority(e.target.value)}
                                className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="low">Low</option>
                                <option value="medium">Medium</option>
                                <option value="high">High</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex justify-end gap-3 mt-6">
                        <button
                            onClick={onClose}
                            className="px-4 py-2 bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handleSubmit}
                            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                        >
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TaskModal;