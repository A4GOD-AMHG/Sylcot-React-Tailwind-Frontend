import React from 'react';
import useTheme from '@/hooks/useTheme';

const Footer = () => {
    const { isDark } = useTheme();

    const socialLinks = [
        {
            name: 'GitHub',
            href: 'https://github.com/A4GOD-AMHG',
            icon: isDark ? "/github-white.svg" : "/github.svg"
        },
        {
            name: 'Facebook',
            href: 'https://facebook.com/alexismanuel.hurtadogarcia',
            icon: '/facebook.svg'
        },
        {
            name: 'X (Twitter)',
            href: 'https://x.com/alexis_mhg',
            icon: '/x.svg'
        },
        {
            name: 'Instagram',
            href: 'https://instagram.com/alexismanuel.hurtadogarcia',
            icon: '/instagram.svg'
        },
        {
            name: 'LinkedIn',
            href: 'https://cu.linkedin.com/in/alexis-mhg',
            icon: '/linkedin.svg'
        }
    ];


    return (
        <footer className="bg-gray-100 dark:bg-gray-900 shadow-md w-full">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-black dark:text-white text-sm md:text-md text-center md:text-left">
                        © {new Date().getFullYear()} Sylcot. All rights reserved.
                    </p>
                    <div className="flex items-center space-x-6">{socialLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-light-100 hover:text-white transition-colors duration-300"
                        >
                            <span className="sr-only">{link.name}</span>
                            <img className="h-8 w-8" src={link.icon} />
                        </a>
                    ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;