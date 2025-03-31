import { useState } from 'react';
import {
    FaHome,
    FaBriefcase,
    FaFutbol,
    FaHeart,
    FaRegHeart,
    FaBook,
    FaShoppingCart,
    FaDollarSign,
    FaPlane,
    FaUsers,
    FaPaintBrush,
    FaPaw,
    FaUtensils,
    FaEllipsisH,
    FaQuestion
} from 'react-icons/fa';

const TaskCard = ({ task, onToggleTask, onDeleteTask }) => {
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const getCategoryIcon = () => {
        const iconName = task.category.icon_name.toLowerCase();
        const IconComponent = {
            'home': FaHome,
            'work_outline': FaBriefcase,
            'sports_soccer': FaFutbol,
            'favorite': FaHeart,
            'favorite_border': FaRegHeart,
            'menu_book': FaBook,
            'shopping_cart': FaShoppingCart,
            'attach_money': FaDollarSign,
            'flight': FaPlane,
            'groups': FaUsers,
            'palette': FaPaintBrush,
            'pets': FaPaw,
            'restaurant': FaUtensils,
            'more_horiz': FaEllipsisH,
        }[iconName] || FaQuestion; // Icono por defecto si no encuentra

        return <IconComponent className="text-lg" />;
    };

    const getPriorityIcon = () => {
        switch (task.priority) {
            case 'low':
                return <FaArrowDown className="text-green-600" />;
            case 'medium':
                return <FaExclamation className="text-yellow-500" />;
            case 'high':
                return <FaFire className="text-red-500" />;
            default:
                return <FaExclamation />;
        }
    };

    const handleDelete = () => {
        setShowDeleteModal(false);
        onDeleteTask(task.id);
    };

    return (
        <div
            className={`relative p-4 rounded-lg shadow-md transition-all duration-300 ${task.status ? 'opacity-75' : 'opacity-100'
                }`}
            style={{ backgroundColor: task.category.color }}
        >
            {/* Icono de categoría */}
            <div className="absolute top-2 right-2 p-2 bg-white rounded-full border-2 border-gray-200">
                {getCategoryIcon()}
            </div>

            {/* Contenido principal */}
            <div className="flex items-center justify-between mb-2">
                <h3 className={`text-lg font-semibold ${task.status ? 'line-through transition-all duration-300' : ''
                    }`}>
                    {task.title}
                </h3>
                {getPriorityIcon()}
            </div>

            {/* Botones de acción */}
            <div className="flex justify-end space-x-2">
                <button
                    onClick={() => onToggleTask(task.id)}
                    className={`p-2 rounded-full ${task.status ? 'bg-green-500' : 'bg-gray-200'} hover:opacity-80`}
                >
                    {task.status ? <FaCheck className="text-white" /> : <FaTimes />}
                </button>

                <button
                    onClick={() => setShowDeleteModal(true)}
                    className="p-2 rounded-full bg-red-500 hover:opacity-80"
                >
                    <FaTrash className="text-white" />
                </button>
            </div>

            {showDeleteModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg max-w-xs w-full">
                        <h4 className="text-lg mb-4 font-medium">¿Eliminar esta tarea?</h4>
                        <div className="flex justify-end space-x-3">
                            <button
                                onClick={() => setShowDeleteModal(false)}
                                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition-colors"
                            >
                                Cancelar
                            </button>
                            <button
                                onClick={handleDelete}
                                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                            >
                                Eliminar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TaskCard;