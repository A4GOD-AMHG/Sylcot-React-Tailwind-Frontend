import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
    return (
        <main className="bg-white dark:bg-gray-800 flex min-h-screen items-center justify-center p-4">
            <div className="w-full max-w-md">
                <Outlet />
            </div>
        </main>
    );
};

export default AuthLayout