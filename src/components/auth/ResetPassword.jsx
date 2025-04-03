import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { FiCheckCircle } from 'react-icons/fi';
import { useAuth } from '@/context/AuthContext';


export const ResetPassword = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [searchParams] = useSearchParams();
    const token = searchParams.get('token');
    const [message, setMessage] = useState('');
    const { resetPassword } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await resetPassword({ token, password });
            setMessage('Password updated successfully');
        } catch (error) {
            console.log(error)
            setMessage('Error updating password');
        }
    };
    return (
        <div className="bg-gray-100 dark:bg-gray-900 rounded-lg shadow-md p-8 w-full max-w-md">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white text-center">
                {isSubmitted ? 'Check Your Email' : 'Reset Password'}
            </h2>

            {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-gray-700 dark:text-white mb-2">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="custom-input"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                    >
                        Send Reset Instructions
                    </button>
                    {message && <p>{message}</p>}
                </form>
            ) : (
                <div className="text-center space-y-6">
                    <div className="flex justify-center text-green-500">
                        <FiCheckCircle className="w-12 h-12" />
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">
                        We've sent password reset instructions to your email.
                    </p>
                    <Link
                        to="/auth/login"
                        className="inline-block w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                    >
                        Go to Login
                    </Link>
                </div>
            )}

            {!isSubmitted && (
                <p className="text-gray-600 dark:text-gray-300 text-center mt-6">
                    Remember your password?{' '}
                    <Link to="/auth/login" className="text-blue-600 hover:underline">
                        Sign In
                    </Link>
                </p>
            )}
        </div>
    );
};