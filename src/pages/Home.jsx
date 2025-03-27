import Footer from "../components/shared/Footer";
import { Header } from "../components/shared/Header";

export const Home = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="container mx-auto px-6 py-8 flex-1">
                <section className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
                        Gestiona tus tareas de forma eficiente
                    </h1>
                    <p className="text-gray-600 dark:text-gray-300 text-lg">
                        Organiza tus proyectos con nuestro sistema Kanban intuitivo y moderno.
                    </p>
                </section>
            </main>
            <Footer />
        </div>
    );
};