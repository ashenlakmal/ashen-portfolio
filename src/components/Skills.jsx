import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    const skillCategories = [
        {
            title: "Frontend Development",
            skills: ["React.js", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap 5"]
        },
        {
            title: "Backend & Database",
            skills: ["Node.js", "Express.js", "PHP", "MongoDB", "MySQL", "MS SQL Server"]
        },
        {
            title: "Programming Languages",
            skills: ["JavaScript", "Java", "C", "C#", "Python", "SQL"]
        },
        {
            title: "Tools & Design",
            skills: ["Git", "GitHub", "Postman", "Figma (UI/UX)"]
        }
    ];

    return (

        <section id="skills" className="py-24 bg-[#0a0f1c] relative overflow-hidden">


            <div className="absolute top-1/4 left-0 w-[40rem] h-[40rem] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-1/4 right-0 w-[30rem] h-[30rem] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container relative z-10 px-5 mx-auto">

                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="mb-20 text-4xl font-extrabold tracking-tight text-center text-white md:text-5xl"
                >
                    Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Skills</span>
                </motion.h2>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            // Liquid Glass Card Effect
                            className="relative bg-white/5 backdrop-blur-2xl p-8 rounded-3xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] hover:bg-white/10 hover:border-white/20 transition-all duration-500 group overflow-hidden"
                        >

                            <div className="absolute transition-opacity duration-500 opacity-0 -inset-1 bg-gradient-to-br from-blue-500/20 to-indigo-600/20 group-hover:opacity-100 blur-2xl"></div>


                            <div className="absolute top-0 left-0 w-full h-1 transition-opacity duration-500 opacity-50 bg-gradient-to-r from-blue-500 to-indigo-500 group-hover:opacity-100"></div>

                            <h3 className="relative z-10 mb-6 text-xl font-bold tracking-wide text-white">
                                {category.title}
                            </h3>

                            <div className="relative z-10 flex flex-wrap gap-3">
                                {category.skills.map((skill, i) => (
                                    <span
                                        key={i}

                                        className="bg-white/5 text-slate-300 px-4 py-2 rounded-xl text-sm font-semibold border border-white/10 hover:bg-blue-500/20 hover:border-blue-400/50 hover:text-blue-300 hover:shadow-[0_0_15px_rgba(37,99,235,0.4)] transition-all duration-300 cursor-default transform hover:-translate-y-1"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Skills;