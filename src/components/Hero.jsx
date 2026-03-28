import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center bg-[#0a0f1c] pt-20 relative overflow-hidden">


            <div className="absolute top-20 left-10 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-10 right-10 w-[30rem] h-[30rem] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container relative z-10 flex flex-col items-center justify-between px-5 mx-auto md:flex-row">


                <div className="mt-10 text-center md:w-1/2 md:text-left md:mt-0">

                    {/* Glass Internship Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-block mb-8"
                    >
                        <span className="px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-blue-300 font-semibold text-sm tracking-widest shadow-[0_8px_32px_rgba(0,0,0,0.2)] flex items-center space-x-2">
                            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                            <span>AVAILABLE FOR INTERNSHIPS</span>
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="mb-3 text-2xl font-medium text-slate-400"
                    >
                        Hello, I'm <span className="font-bold text-white">Ashen Lakmal</span>
                    </motion.h2>

                    <motion.h1
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="pb-2 mb-6 text-5xl font-extrabold leading-tight text-transparent md:text-7xl bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400"
                    >
                        Full Stack Developer
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="max-w-lg mx-auto mb-10 text-lg leading-relaxed text-slate-400 md:mx-0"
                    >
                        A motivated Information & Communication Technology Undergraduate with hands-on experience in MERN Stack and PHP. Let's build secure and innovative web applications together.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="flex flex-col justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6 md:justify-start"
                    >
                        <Link to="contact" smooth={true} duration={500} className="w-full sm:w-auto">
                            <button className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full font-bold hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] transition-all hover:-translate-y-1">
                                Hire Me
                            </button>
                        </Link>

                        {/*Glass Download Button */}
                        <a
                            href="/Ashen-Lakmal-Full-Stack-Developer.pdf"
                            download="Ashen_Lakmal_CV.pdf"
                            className="w-full px-8 py-4 font-bold text-center text-blue-300 transition-all border rounded-full sm:w-auto bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 hover:text-white"
                        >
                            Download CV
                        </a>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="relative flex justify-center mt-16 md:w-1/2 md:mt-0"
                >
                    <div className="relative w-72 h-72 md:w-96 md:h-96 group">

                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 via-purple-500 to-cyan-400 rounded-full blur-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-700 animate-[spin_10s_linear_infinite]"></div>

                        {/*Glass Container */}
                        <div className="absolute inset-2 bg-white/5 backdrop-blur-2xl border border-white/20 rounded-full shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] overflow-hidden flex items-center justify-center p-2 z-10 transition-transform duration-500 group-hover:scale-105">


                            <div className="relative w-full h-full overflow-hidden rounded-full bg-slate-900">
                                <img
                                    src="/profile.jpg"
                                    alt="Ashen Lakmal"
                                    className="object-cover w-full h-full"
                                />

                                <div className="absolute inset-0 opacity-50 pointer-events-none bg-gradient-to-br from-white/20 via-transparent to-transparent"></div>
                            </div>

                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;