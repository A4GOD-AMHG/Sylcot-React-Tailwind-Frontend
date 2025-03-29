import Footer from "../components/shared/Footer";
import Header from "../components/shared/Header";

export const Home = () => {
    return (
        <main className="container flex mx-auto relative py-8 z-10">
            <section className="text-center w-[50%] my-auto mb-12 max-w-4xl mx-auto">
                <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-600 to-gray-800 dark:from-gray-400 dark:to-gray-300 bg-clip-text text-transparent mb-6 leading-tight">
                    Welcome to Sylcot
                    <span className="block text-3xl md:text-4xl font-medium mt-4">Where Tasks Meet Simplicity</span>
                </h1>

                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 mx-auto max-w-2xl">
                    Sylcot - Comes from Simplify Your Life by Crossing Out Tasks
                    <span className="block mt-2">You can create and complete tasks, making your life easier and organize.</span>
                </p>

                <div className="flex justify-center gap-4 mb-16">
                    <button className="bg-blue-600 hover:bg-blue-700 cursor-pointer text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-blue-500/30">
                        Get Started - It's Free
                    </button>
                    <button className="border-2 border-blue-500 cursor-pointer text-blue-600 dark:text-blue-300 hover:bg-blue-50 transition-all transform hover:scale-105 dark:hover:bg-blue-900/20 px-6 py-3 rounded-lg font-semibold">
                        Login
                    </button>
                </div>

                <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-600">
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                        <div className="flex-1 text-left">
                            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                                Example of the Dashboard View
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                Many Filters • Animations • Beautiful Colors • Multi-platform
                            </p>
                            <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
                                <span className="animate-pulse">✨</span>
                                <span>Start organizing in minutes!</span>
                            </div>
                        </div>
                        <div className="flex-1 bg-gradient-to-br from-blue-50 to-blue-50 dark:from-gray-600 dark:to-gray-700 p-4 rounded-xl">
                            <div className="h-48 bg-gray-100 dark:bg-gray-500 rounded-lg animate-pulse"></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="h-full my-auto w-[50%] pl-10">
                <img src="/scrum.svg" />
            </section>
        </main>
    );
};