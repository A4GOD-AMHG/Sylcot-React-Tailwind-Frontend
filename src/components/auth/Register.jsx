import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiSun, FiMoon } from 'react-icons/fi';
import useTheme from '@/hooks/useTheme';

export const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setIsShowPassword] = useState(false);
    const { toggleTheme, isDark } = useTheme();
    const [showConfirmPassword, setIsShowConfirmPassword] = useState(false);

    const handleShowPassword = () => setIsShowPassword(!showPassword);
    const handleShowConfirmPassword = () => setIsShowConfirmPassword(!showConfirmPassword);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Registration logic
    };

    return (
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-8">
            <div className='flex justify-between'>
                <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white text-center">Create Account</h2>
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
                        className="auth-input"
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
                <div>
                    <label className="block text-gray-700 dark:text-white mb-2">Confirm Password</label>
                    <input
                        type={showPassword ? "text" : "password"}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full px-4 py-2 border rounded-lg dark:text-white text-gray-800 dark:bg-gray-700 dark:border-gray-600 focus:ring-1 focus:ring-gray-700 dark:focus:ring-gray-100 focus:border-transparent"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="button"
                >
                    Register
                </button>
                <p className="text-gray-600 dark:text-gray-300 text-center">
                    Already have an account?{' '}
                    <Link to="/auth/login" className="text-blue-600 hover:underline">
                        Sign In
                    </Link>
                </p>
            </form>
        </div>
    );
};