import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';

export const Header = () => {
    const { toggleTheme, isDark } = useTheme();

    return (
        <header className="bg-white dark:bg-gray-800 shadow-md">
            <nav className="container mx-auto px-6 py-3">
                <div className="flex items-center justify-between">
                    <Link to="/" className="text-2xl font-bold text-gray-800 dark:text-white">
                        TaskFlow
                    </Link>
                    <div className="flex items-center gap-4">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700"
                        >
                            {isDark ? '🌞' : '🌙'}
                        </button>
                        <Link
                            to="/login"
                            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                        >
                            Login
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
};