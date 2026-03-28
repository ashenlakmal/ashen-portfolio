import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaFigma, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
    const projectsList = [
        {
            title: "Waste2Worth",
            role: "Lead Full Stack Developer",
            tech: ["MongoDB", "Express", "React", "Node.js"],
            desc: "A full-stack solution to optimize waste collection and community donation workflows with secure RESTful APIs. Implemented with modern UI standards for best user experience.",
            github: "https://github.com/ashenlakmal/Waste2Worth",
            live: "https://waste2-worth-ten.vercel.app/",
            icon: <FaExternalLinkAlt className="text-3xl" />,
            image: "/project images/W2W.png"
        },
        {
            title: "Smart Library Management System",
            role: "Lead Web Developer",
            tech: ["PHP", "MySQL", "Tailwind CSS"],
            desc: "An automated platform to manage library operations, real-time availability, and fine calculations. Optimized backend queries to process data lightning fast.",
            github: "https://github.com/ashenlakmal/Library-Book-Borrowing-and-Management-System-LBBMS-",
            live: "https://library-book-borrowing-and-management-system-lbbms.atwebpages.com/",
            icon: <FaExternalLinkAlt className="text-3xl" />,
            image: "/project images/LBBMS.png"
        },
        {
            title: "Touroopi - Travel System",
            role: "Lead Web Developer",
            tech: ["PHP", "HTML", "CSS", "JavaScript"],
            desc: "A dynamic travel platform featuring iFrame map integration and session-based authentication. Built to handle multiple users simultaneously with robust security.",
            github: "https://github.com/ashenlakmal/Touroopi",
            live: "",
            icon: <FaGithub className="text-3xl" />,
            image: "/project images/Touroopi.png"
        },
        {
            title: "Lost & Found System (LFMS)",
            role: "Backend Developer",
            tech: ["PHP (OOP)", "MySQL"],
            desc: "A secure system strictly following OOP principles and implemented with PDO for database security. Ensured zero SQL injection vulnerabilities across the platform.",
            github: "https://github.com/buddiniweerakkodi/Lost-and-Found-Management-System",
            live: "https://lfms.atwebpages.com/public",
            icon: <FaExternalLinkAlt className="text-3xl" />,
            image: "/project images/LFMS.png"
        },
        {
            title: "UI for Visually Impaired",
            role: "Lead UI/UX Designer",
            tech: ["Figma", "WCAG Standards"],
            desc: "An accessible and inclusive interface featuring high-contrast themes and intuitive navigation patterns. Designed specifically following global accessibility standards.",
            github: "",
            live: "https://www.figma.com/proto/UkHp7jmTmTcOSpBBPk3isa/EchoViz?node-id=92-7&p=f&t=LDLek18PmXRCAphx-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=92%3A7",
            icon: <FaFigma className="text-3xl" />,
            image: "/project images/Echoviz.png"
        }
    ];

    return (
        <section id="projects" className="py-24 bg-gradient-to-b from-[#0a0f1c] via-[#04060e] to-[#0a0f1c] relative overflow-hidden border-t border-white/5">

            <div className="absolute top-1/3 left-0 w-[40rem] h-[40rem] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-1/4 right-0 w-[30rem] h-[30rem] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container relative z-10 px-5 mx-auto">

                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="mb-24 text-4xl font-extrabold tracking-tight text-center text-white md:text-5xl"
                >
                    My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Projects</span>
                </motion.h2>

                <div className="max-w-6xl mx-auto space-y-24 md:space-y-32">
                    {projectsList.map((project, index) => {
                        const isEven = index % 2 === 0;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7 }}
                                viewport={{ once: true, margin: "-100px" }}
                                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 lg:gap-16 items-center`}
                            >


                                <div className="relative w-full lg:w-1/2 group">
                                    <div className="absolute transition duration-500 -inset-1 bg-gradient-to-r from-blue-600/30 to-indigo-600/30 rounded-3xl blur opacity-30 group-hover:opacity-60"></div>

                                    <div className="relative overflow-hidden rounded-3xl aspect-video border border-white/10 bg-[#0a0f1c] shadow-2xl">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="object-cover w-full h-full transition-transform duration-700 transform group-hover:scale-110 opacity-80 group-hover:opacity-100"
                                        />

                                        <a
                                            href={project.live || project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="absolute inset-0 bg-[#04060e] bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100 backdrop-blur-[2px] cursor-pointer"
                                        >
                                            <div className="bg-blue-600 text-white p-5 rounded-full shadow-[0_0_30px_rgba(37,99,235,0.6)] group-hover:shadow-[0_0_50px_rgba(37,99,235,0.8)] transition-all transform translate-y-8 group-hover:translate-y-0 duration-500">
                                                {project.icon}
                                            </div>
                                        </a>
                                    </div>
                                </div>


                                <div className="w-full space-y-6 lg:w-1/2">
                                    <p className="flex items-center gap-2 text-sm font-bold tracking-widest text-blue-400 uppercase">
                                        <span className="w-8 h-[2px] bg-blue-500 inline-block"></span>
                                        {project.role}
                                    </p>

                                    <h3 className="text-3xl font-extrabold leading-tight text-white md:text-4xl">
                                        {project.title}
                                    </h3>

                                    <div className="bg-white/5 backdrop-blur-xl p-6 md:p-8 rounded-2xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] relative z-20 hover:bg-white/10 transition-colors duration-300">
                                        <p className="text-slate-400 leading-relaxed text-[15px] md:text-base">
                                            {project.desc}
                                        </p>
                                    </div>

                                    <div className="flex flex-wrap gap-2 pt-2">
                                        {project.tech.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="text-xs font-bold text-indigo-300 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1.5 rounded-lg"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex flex-wrap gap-4 pt-4 mt-2 border-t border-white/5">

                                        {project.live && (
                                            <a
                                                href={project.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-xl font-bold shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] transition-all transform hover:-translate-y-1"
                                            >
                                                <FaExternalLinkAlt className="text-sm" />

                                                {project.github === "" ? "View Prototype" : "Live Demo"}
                                            </a>
                                        )}


                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 px-5 py-2.5 rounded-xl font-bold hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all transform hover:-translate-y-1"
                                            >
                                                <FaGithub className="text-lg" />
                                                GitHub
                                            </a>
                                        )}
                                    </div>

                                </div>

                            </motion.div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default Projects;