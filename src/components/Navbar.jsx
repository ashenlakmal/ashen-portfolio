import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[95%] md:w-[85%] max-w-6xl px-6 md:px-8 py-3 bg-[#0a0f1c]/40 backdrop-blur-3xl shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] border border-white/10 border-t-white/20 border-l-white/20 rounded-full z-50 flex justify-between items-center transition-all duration-300">

            {/* Logo */}
            <div className="text-xl font-extrabold tracking-wider text-white cursor-pointer md:text-2xl">
                <Link to="home" smooth={true} duration={500}>Ashen<span className="text-blue-500 drop-shadow-[0_0_10px_rgba(37,99,235,0.8)]">.</span></Link>
            </div>

            {/* Desktop Links */}
            <div className="items-center hidden space-x-2 text-sm font-medium md:flex text-slate-300">


                <Link to="home" smooth={true} duration={500} className="px-5 py-2.5 rounded-full border border-transparent hover:border-white/20 hover:bg-white/10 hover:shadow-[inset_0_0_15px_rgba(255,255,255,0.1),0_4px_10px_rgba(0,0,0,0.3)] hover:text-white cursor-pointer transition-all duration-300">Home</Link>
                <Link to="about" smooth={true} duration={500} className="px-5 py-2.5 rounded-full border border-transparent hover:border-white/20 hover:bg-white/10 hover:shadow-[inset_0_0_15px_rgba(255,255,255,0.1),0_4px_10px_rgba(0,0,0,0.3)] hover:text-white cursor-pointer transition-all duration-300">About</Link>
                <Link to="skills" smooth={true} duration={500} className="px-5 py-2.5 rounded-full border border-transparent hover:border-white/20 hover:bg-white/10 hover:shadow-[inset_0_0_15px_rgba(255,255,255,0.1),0_4px_10px_rgba(0,0,0,0.3)] hover:text-white cursor-pointer transition-all duration-300">Skills</Link>
                <Link to="projects" smooth={true} duration={500} className="px-5 py-2.5 rounded-full border border-transparent hover:border-white/20 hover:bg-white/10 hover:shadow-[inset_0_0_15px_rgba(255,255,255,0.1),0_4px_10px_rgba(0,0,0,0.3)] hover:text-white cursor-pointer transition-all duration-300">Projects</Link>

                <div className="pl-4">
                    <Link to="contact" smooth={true} duration={500}>
                        <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm px-7 py-2.5 rounded-full hover:shadow-[0_0_20px_rgba(37,99,235,0.5)] transition-all font-bold hover:-translate-y-0.5 border border-blue-500/50">
                            Let's Talk
                        </button>
                    </Link>
                </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center md:hidden">
                <button onClick={toggleMenu} className="text-2xl transition-colors text-slate-300 hover:text-white focus:outline-none">
                    {isOpen ? <FaTimes className="text-blue-400" /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <div className="absolute top-20 left-0 w-full bg-[#0a0f1c]/70 backdrop-blur-3xl border border-white/10 border-t-white/20 rounded-3xl flex flex-col items-center py-6 space-y-4 shadow-[0_8px_32px_0_rgba(0,0,0,0.6)] md:hidden">

                    <Link to="home" onClick={() => setIsOpen(false)} smooth={true} duration={500} className="w-[80%] text-center py-3 rounded-xl border border-transparent hover:border-white/20 hover:bg-white/10 hover:shadow-[inset_0_0_15px_rgba(255,255,255,0.1)] text-slate-300 hover:text-white font-semibold text-lg cursor-pointer transition-all">Home</Link>
                    <Link to="about" onClick={() => setIsOpen(false)} smooth={true} duration={500} className="w-[80%] text-center py-3 rounded-xl border border-transparent hover:border-white/20 hover:bg-white/10 hover:shadow-[inset_0_0_15px_rgba(255,255,255,0.1)] text-slate-300 hover:text-white font-semibold text-lg cursor-pointer transition-all">About</Link>
                    <Link to="skills" onClick={() => setIsOpen(false)} smooth={true} duration={500} className="w-[80%] text-center py-3 rounded-xl border border-transparent hover:border-white/20 hover:bg-white/10 hover:shadow-[inset_0_0_15px_rgba(255,255,255,0.1)] text-slate-300 hover:text-white font-semibold text-lg cursor-pointer transition-all">Skills</Link>
                    <Link to="projects" onClick={() => setIsOpen(false)} smooth={true} duration={500} className="w-[80%] text-center py-3 rounded-xl border border-transparent hover:border-white/20 hover:bg-white/10 hover:shadow-[inset_0_0_15px_rgba(255,255,255,0.1)] text-slate-300 hover:text-white font-semibold text-lg cursor-pointer transition-all">Projects</Link>

                    <Link to="contact" onClick={() => setIsOpen(false)} smooth={true} duration={500} className="w-[80%] pt-2">
                        <button className="w-full px-8 py-3 font-bold text-white border rounded-full shadow-lg bg-gradient-to-r from-blue-600 to-indigo-600 shadow-blue-500/30 border-blue-500/50">
                            Let's Talk
                        </button>
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;