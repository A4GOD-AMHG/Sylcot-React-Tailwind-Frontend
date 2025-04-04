import { Link } from 'react-router-dom';

import { FiSun, FiMoon } from 'react-icons/fi';
import { FaUserCircle } from 'react-icons/fa';
import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import useTheme from '@/hooks/useTheme';

const Header = () => {
    const { toggleTheme, isDark } = useTheme();
    const { user, isAuthenticated, logout } = useAuth();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <header className="bg-gray-100 dark:bg-gray-900 shadow-md">
            <nav className="container max-w-7xl mx-auto px-6 py-3">
                <div className="flex items-center text-gray-800 dark:text-white h-12 justify-between">
                    <Link to="/">
                        <h1 className='text-4xl py-2 mt-4 font-bold bg-gradient-to-r from-gray-600 to-gray-800 dark:from-gray-400 dark:to-gray-300 bg-clip-text text-transparent mb-6 leading-tight'>Sylcot</h1>
                    </Link>
                    <div className="flex items-center gap-4">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-lg cursor-pointer bg-white dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
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
                                    className="flex items-center gap-2 hover:bg-gray-100 cursor-pointer dark:hover:bg-gray-700 p-2 rounded-lg transition-colors"
                                >
                                    <FaUserCircle className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                                </button>

                                {isDropdownOpen && (
                                    <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-2 border dark:border-gray-700 z-20">
                                        <div

                                            className="block w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-200 cursor-default text-left"
                                        >
                                            User: {user.name}
                                        </div>
                                        <hr className='text-gray-700 dark:text-gray-200 mx-1' />
                                        <button
                                            onClick={() => {
                                                logout();
                                                setIsDropdownOpen(false);
                                            }}
                                            className="block w-full cursor-pointer px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 text-left"
                                        >
                                            Log out
                                        </button>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <Link
                                to="/auth/login"
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