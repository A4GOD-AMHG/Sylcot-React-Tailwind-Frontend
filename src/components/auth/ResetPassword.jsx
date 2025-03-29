import { useState } from 'react';
import { Link } from 'react-router-dom';

export const ResetPassword = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Password reset logic
    };

    return (
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white text-center">Reset Password</h2>
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
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white cursor-pointer py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                    Send Reset Instructions
                </button>
                <p className="text-gray-600 dark:text-gray-300 text-center">
                    Remember your password?{' '}
                    <Link to="/auth/login" className="text-blue-600 hover:underline">
                        Sign In
                    </Link>
                </p>
            </form>
        </div>
    );
};