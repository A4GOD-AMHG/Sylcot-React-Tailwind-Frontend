import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col bg-white dark:bg-gray-800 min-h-screen">
            <Header />
            <main className="flex-grow py-6 container mx-auto">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;