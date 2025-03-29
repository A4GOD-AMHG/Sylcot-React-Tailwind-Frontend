import { Link } from 'react-router-dom';
import { useTheme } from '@/context/ThemeContext';
import { FiSun, FiMoon } from 'react-icons/fi';
import { FaUserCircle } from 'react-icons/fa';
import { useState } from 'react';
import useAuth from '@/hooks/useAuth';

const Header = () => {
    const { toggleTheme, isDark } = useTheme();
    const { user, isAuthenticated, login, logout } = useAuth();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <header className="bg-white dark:bg-gray-800 shadow-md">
            <nav className="container max-w-7xl mx-auto px-6 py-3">
                <div className="flex items-center text-gray-800 dark:text-white h-12 justify-between">
                    <Link to="/">
                        <h1 className='text-4xl font-bold'>SyLCot</h1>
                    </Link>
                    <div className="flex items-center gap-4">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-lg cursor-pointer bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                        >
                            {isDark ? (
                                <FiSun className="w-5 h-5 text-gray-800 dark:text-white" />
                            ) : (
                                <FiMoon className="w-5 h-5 text-gray-800 dark:text-white" />
                            )}
                        </button>

                        {isAuthenticated ? (
                            <div className="relative">
                                <button
                                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                    className="flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-lg transition-colors"
                                >
                                    <FaUserCircle className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                                </button>

                                {isDropdownOpen && (
                                    <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-2 border dark:border-gray-700 z-20">
                                        <button
                                            onClick={() => {
                                                logout();
                                                setIsDropdownOpen(false);
                                            }}
                                            className="block w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 text-left"
                                        >
                                            Cerrar sesión
                                        </button>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <Link
                                to="/login"
                                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                            >
                                Login
                            </Link>
                        )}
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;