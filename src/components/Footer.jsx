import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        // bg-gradient-to-b  
        <footer className="relative py-12 overflow-hidden text-center bg-gradient-to-b from-slate-900 to-black text-slate-300">


            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-600 to-transparent opacity-70"></div>


            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/2 h-24 bg-blue-600/10 blur-[50px] pointer-events-none"></div>

            <div className="container relative z-10 px-5 mx-auto">
                <h2 className="mb-3 text-3xl font-extrabold tracking-wider text-white drop-shadow-lg">
                    Ashen<span className="text-blue-500">.</span>
                </h2>
                <p className="max-w-md mx-auto mb-6 text-sm text-slate-400 md:text-base">
                    Building secure, innovative, and visually stunning web experiences from Sri Lanka.
                </p>

                <div className="flex justify-center mb-8 space-x-6">
                    <a href="https://linkedin.com/in/ashen-lakmal" target="_blank" rel="noopener noreferrer" className="transition-colors text-slate-500 hover:text-blue-500">
                        LinkedIn
                    </a>
                    <a href="https://github.com/ashenlakmal" target="_blank" rel="noopener noreferrer" className="transition-colors text-slate-500 hover:text-white">
                        GitHub
                    </a>
                </div>

                <div className="w-24 h-[1px] bg-slate-800 mx-auto mb-6"></div>

                <p className="text-sm font-medium text-slate-600">
                    &copy; {currentYear} Ashen Lakmal. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;