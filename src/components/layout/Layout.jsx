import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import { useLocation, } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    const location = useLocation();

    const isExcludedRoute =
        location.pathname.startsWith('/auth/') ||
        ![
            '/',
            '/dashboard',
            '/about',
        ].includes(location.pathname);


    return (
        <div className="flex flex-col bg-white dark:bg-gray-800 min-h-screen">
            {!isExcludedRoute && <Header />}
            <main className="flex-grow py-6 container mx-auto">
                <Outlet />
            </main>
            {!isExcludedRoute && <Footer />}
        </div>
    );
};

export default Layout;