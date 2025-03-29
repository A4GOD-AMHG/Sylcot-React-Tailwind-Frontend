import { useState } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import useTheme from '@/hooks/useTheme';

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setIsShowPassword] = useState(false);
    const { toggleTheme, isDark } = useTheme();

    const handleShowPassword = () => setIsShowPassword(!showPassword);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Login logic
    };

    return (
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-8">
            <div className='flex justify-between'>
                <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white text-center">Welcome to Sylcot</h2>
                <button
                    onClick={toggleTheme}
                    className="h-min p-2 rounded-lg cursor-pointer bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                >
                    {isDark ? (
                        <FiSun className="w-5 h-5 text-gray-800 dark:text-white" />
                    ) : (
                        <FiMoon className="w-5 h-5 text-gray-800 dark:text-white" />
                    )}
                </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block text-gray-700 dark:text-white mb-2">Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 border rounded-lg dark:text-white text-gray-800 dark:bg-gray-700 dark:border-gray-600 focus:ring-1 focus:ring-gray-700 dark:focus:ring-gray-100 focus:border-transparent"
                        required
                    />
                </div>
                <div>
                    <label className="block text-gray-700 dark:text-white mb-2">Password</label>
                    <input
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-2 border rounded-lg dark:text-white text-gray-800 dark:bg-gray-700 dark:border-gray-600 focus:ring-1 focus:ring-gray-700 dark:focus:ring-gray-100 focus:border-transparent"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="button"
                >
                    Sign In
                </button>
                <div className="text-center space-y-4">
                    <Link to="/auth/reset-password" className="text-md text-blue-600 font-medium hover:underline block">
                        Forgot Password?
                    </Link>
                    <p className="text-gray-600 font-medium dark:text-gray-300">
                        Don't have an account?{' '}
                        <Link to="/auth/register" className="text-blue-600 hover:underline">
                            Register
                        </Link>
                    </p>
                </div>
            </form>
        </div>
    );
};