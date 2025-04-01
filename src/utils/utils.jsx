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
    FaExclamationTriangle,
    FaFlag,
    FaChevronDown,
} from 'react-icons/fa';

const getCategoryIcon = (categoryIcon, color) => {
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
    }[categoryIcon.toLowerCase()];

    return <IconComponent className="text-lg" style={{ color }} />;
};

const getPriorityIcon = (priority) => {
    switch (priority) {
        case 'low':
            return <FaChevronDown className="text-green-600" />;
        case 'medium':
            return <FaExclamationTriangle className="text-yellow-500" />;
        case 'high':
            return <FaFlag className="text-red-500" />;
        default:
            return <FaExclamationTriangle />;
    }
};

export { getCategoryIcon, getPriorityIcon }