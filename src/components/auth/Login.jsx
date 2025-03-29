import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../shared/Header';

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica de login
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="container mx-auto px-6 py-8 flex-1 flex items-center justify-center">
                <div className="w-full max-w-md bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Iniciar Sesión</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-gray-700 dark:text-gray-300 mb-2">Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 dark:text-gray-300 mb-2">Contraseña</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
                        >
                            Ingresar
                        </button>
                        <p className="text-center text-gray-600 dark:text-gray-300">
                            ¿No tienes cuenta?{' '}
                            <Link to="/register" className="text-blue-500 hover:underline">
                                Regístrate
                            </Link>
                        </p>
                    </form>
                </div>
            </main>
        </div>
    );
};