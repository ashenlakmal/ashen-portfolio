import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-24 bg-gradient-to-b from-[#0a0f1c] via-[#121835] to-[#0a0f1c] relative overflow-hidden border-t border-white/5">

            <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container relative z-10 px-5 mx-auto">

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <h2 className="mb-16 text-4xl font-extrabold tracking-tight text-center text-white md:text-5xl">
                        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Me</span>
                    </h2>

                    <div className="flex flex-col items-center max-w-5xl gap-16 mx-auto lg:flex-row">

                        <div className="space-y-6 text-lg leading-relaxed text-center lg:w-2/3 text-slate-400 lg:text-left">
                            <p>
                                Hello! I'm a motivated <strong className="font-medium text-white">Information & Communication Technology Undergraduate</strong> at Uva Wellassa University of Sri Lanka. I currently hold a GPA of 3.76 and have a strong passion for delivering high-quality technology solutions.
                            </p>
                            <p>
                                My expertise lies in Full-Stack Development using the <span className="px-2 py-1 font-semibold text-blue-300 border rounded-md bg-blue-500/10 border-blue-500/20">MERN Stack</span> and <span className="px-2 py-1 font-semibold text-indigo-300 border rounded-md bg-indigo-500/10 border-indigo-500/20">PHP</span>. I have a proven ability to build secure web applications and design accessible UI/UX solutions using Figma.
                            </p>
                            <p>
                                As a proactive problem-solver and a Team Leader, I always strive to blend creativity with logical thinking to solve complex technical challenges.
                            </p>
                        </div>

                        <div className="w-full lg:w-1/3">
                            <div className="relative group">
                                <div className="absolute transition duration-500 opacity-25 -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur group-hover:opacity-50"></div>

                                <div className="relative bg-white/5 backdrop-blur-2xl p-8 rounded-3xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] transform transition-transform duration-500 hover:scale-[1.02]">

                                    <div className="flex items-center justify-center w-12 h-12 mb-6 shadow-lg bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl shadow-blue-500/30">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" /></svg>
                                    </div>

                                    <h3 className="mb-2 text-2xl font-bold tracking-wide text-white">Education</h3>
                                    <p className="text-lg font-semibold text-blue-300">Bachelor of ICT (Hons)</p>
                                    <p className="mt-1 mb-6 text-sm text-slate-400">Uva Wellassa University of Sri Lanka.</p>

                                    <div className="bg-white/5 border border-white/10 text-center py-4 rounded-xl shadow-[inset_0_0_20px_rgba(255,255,255,0.05)]">
                                        <p className="mb-1 text-xs tracking-widest uppercase text-slate-400">Current GPA</p>
                                        <p className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">
                                            3.76
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>

                </motion.div>
            </div>
        </section>
    );
};

export default About;