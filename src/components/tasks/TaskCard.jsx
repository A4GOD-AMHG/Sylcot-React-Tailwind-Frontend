import { useState } from 'react';
import {
    FaCheckCircle,
    FaRegCircle,
    FaTrash
} from 'react-icons/fa';
import { getCategoryIcon, getPriorityIcon } from '@/utils/utils';

const TaskCard = ({ task, onToggleTask, onDeleteTask }) => {
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const handleDelete = () => {
        setShowDeleteModal(false);
        onDeleteTask(task.id);
    };

    return (
        <>
            <div
                className={`relative p-4 rounded-lg shadow-md transition-all duration-300 
            bg-gray-100 dark:bg-gray-700 border-[5px] ${task.status ? 'opacity-50' : 'opacity-100'}`}
                style={{ borderColor: task.category.color }}
            >
                <div className="absolute top-2 right-2 flex items-center">
                    <div className="p-1.5">
                        {getCategoryIcon(task.category.icon_name, task.category.color)}
                    </div>
                    <div className="p-1.5">
                        {getPriorityIcon(task.priority)}
                    </div>
                </div>

                <div className="mb-8">
                    <h3 className={`text-lg font-semibold text-gray-800 dark:text-white transition-all duration-1000
                        ${task.status ? 'line-through opacity-75' : 'no-underline'}`}>
                        {task.title}
                    </h3>
                </div>

                <div className="absolute bottom-2 right-2 flex">
                    <button
                        onClick={() => onToggleTask(task.id)}
                        className={`p-1 cursor-pointer rounded-full hover:opacity-80 transition-opacity ${task.status ? 'text-green-500' : 'text-gray-500 dark:text-gray-300'
                            }`}
                    >
                        {task.status ? (<FaCheckCircle className="text-2xl" />) : (<FaRegCircle className="text-2xl" />)}
                    </button>

                    <button
                        onClick={() => setShowDeleteModal(true)}
                        className="p-1 cursor-pointer text-red-500 hover:opacity-80 transition-opacity"
                    >
                        <FaTrash className="text-xl" />
                    </button>
                </div>
            </div>

            {showDeleteModal && (
                <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg max-w-xs w-full">
                        <h4 className="text-lg mb-4 font-medium dark:text-white">Do you want to delete this task?</h4>
                        <div className="flex justify-end space-x-3">
                            <button
                                onClick={() => setShowDeleteModal(false)}
                                className="px-4 py-2 cursor-pointer text-white bg-gray-600 rounded hover:bg-gray-700 transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleDelete}
                                className="px-4 py-2 cursor-pointer bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </>
    );

    // return (
    //     <div
    //         className={`relative p-4 rounded-lg shadow-md transition-all duration-300 ${task.status ? 'opacity-75' : 'opacity-100'}`}
    //         style={{ backgroundColor: task.category.color }}
    //     >
    //         <div className="absolute top-2 right-2 p-2 bg-white rounded-full border-2 border-gray-200">
    //             {getCategoryIcon(task.category.icon_name)}
    //         </div>

    //         <div className="flex items-center justify-between mb-2">
    //             <h3 className={`text-lg font-semibold text-gray-800 dark:text-white ${task.status ? 'line-through transition-all duration-1000' : ''
    //                 }`}>
    //                 {task.title}
    //             </h3>
    //             <div className='w-12'>
    //                 {getPriorityIcon(task.priority)}

    //             </div>
    //         </div>

    //         <div className="flex justify-end space-x-2">
    //             <button
    //                 onClick={() => onToggleTask(task.id)}
    //                 className={`p-2 rounded-full ${task.status ? 'bg-green-500' : 'bg-gray-200'} hover:opacity-80`}
    //             >
    //                 {task.status ? <FaCheck className="text-white" /> : <FaTimes />}
    //             </button>

    //             <button
    //                 onClick={() => setShowDeleteModal(true)}
    //                 className="p-2 rounded-full bg-red-500 hover:opacity-80"
    //             >
    //                 <FaTrash className="text-white" />
    //             </button>
    //         </div>

    //         {showDeleteModal && (
    //             <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    //                 <div className="bg-white p-6 rounded-lg max-w-xs w-full">
    //                     <h4 className="text-lg mb-4 font-medium">¿Eliminar esta tarea?</h4>
    //                     <div className="flex justify-end space-x-3">
    //                         <button
    //                             onClick={() => setShowDeleteModal(false)}
    //                             className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition-colors"
    //                         >
    //                             Cancelar
    //                         </button>
    //                         <button
    //                             onClick={handleDelete}
    //                             className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
    //                         >
    //                             Eliminar
    //                         </button>
    //                     </div>
    //                 </div>
    //             </div>
    //         )}
    //     </div>
    // );
};

export default TaskCard;