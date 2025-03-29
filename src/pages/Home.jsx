import Footer from "../components/shared/Footer";
import Header from "../components/shared/Header";

export const Home = () => {
    return (
        <div className="min-h-screen flex flex-col bg-white dark:bg-gray-800 transition-colors duration-300">
            <Header />
            <main className="container mx-auto px-6 py-8 flex-1 relative z-10">
                <section className="text-center mb-12 max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-purple-700 dark:from-purple-400 dark:to-purple-600 bg-clip-text text-transparent mb-6 leading-tight">
                        Transform Your Productivity
                        <span className="block text-3xl md:text-4xl font-normal mt-4">Where Tasks Meet Simplicity</span>
                    </h1>

                    <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 mx-auto max-w-2xl">
                        Welcome to Sylcot - Your intuitive task management solution.
                        <span className="block mt-2">Organize, prioritize, and conquer your daily goals with our smart Kanban system.</span>
                    </p>

                    <div className="flex justify-center gap-4 mb-16">
                        <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-purple-500/30">
                            Get Started - It's Free
                        </button>
                        <button className="border-2 border-purple-500 text-purple-600 dark:text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 px-6 py-3 rounded-lg font-semibold transition-all">
                            Login
                        </button>
                    </div>

                    {/* Feature Preview */}
                    <div className="bg-white dark:bg-gray-700 p-6 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-600">
                        <div className="flex flex-col md:flex-row gap-8 items-center">
                            <div className="flex-1 text-left">
                                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                                    Visual Task Management
                                </h2>
                                <p className="text-gray-600 dark:text-gray-300 mb-4">
                                    Drag-and-drop interface • Real-time collaboration • Smart deadlines • Cross-platform sync
                                </p>
                                <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400">
                                    <span className="animate-pulse">✨</span>
                                    <span>Start organizing in minutes!</span>
                                </div>
                            </div>
                            <div className="flex-1 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-600 dark:to-gray-700 p-4 rounded-xl">
                                {/* Espacio para imagen/gráfico */}
                                <div className="h-48 bg-gray-100 dark:bg-gray-500 rounded-lg animate-pulse"></div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-20px); }
                }
                .animate-float {
                    animation: float 8s ease-in-out infinite;
                }
                .animate-float-delayed {
                    animation: float 10s ease-in-out infinite;
                    animation-delay: 2s;
                }
            `}</style>
        </div>
    );
};