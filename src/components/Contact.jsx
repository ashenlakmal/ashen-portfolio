import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
    const [result, setResult] = useState("");


    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [userAnswer, setUserAnswer] = useState("");


    useEffect(() => {
        generateCaptcha();
    }, []);

    const generateCaptcha = () => {
        setNum1(Math.floor(Math.random() * 10) + 1);
        setNum2(Math.floor(Math.random() * 10) + 1);
        setUserAnswer("");
    };

    const onSubmit = async (event) => {
        event.preventDefault();


        if (parseInt(userAnswer) !== num1 + num2) {
            setResult("CAPTCHA Failed! Please check the math.");
            generateCaptcha();
            return;
        }

        setResult("Sending....");
        const formData = new FormData(event.target);


        formData.append("access_key", "ba2dde60-4670-4d4b-9afc-72f385979bd8");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Message Sent Successfully!");
            event.target.reset();
            generateCaptcha();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (

        <section id="contact" className="py-24 bg-[#0a0f1c] relative overflow-hidden border-t border-white/5">


            <div className="absolute top-1/2 left-0 w-[40rem] h-[40rem] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none transform -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container relative z-10 px-5 mx-auto">

                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="mb-20 text-4xl font-extrabold tracking-tight text-center text-white md:text-5xl"
                >
                    Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Touch</span>
                </motion.h2>

                <div className="flex flex-col max-w-6xl gap-16 mx-auto lg:flex-row">


                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="space-y-8 lg:w-1/3"
                    >
                        <h3 className="mb-4 text-3xl font-bold tracking-wide text-white">Let's talk about everything!</h3>
                        <p className="mb-8 text-lg leading-relaxed text-slate-400">
                            Feel free to reach out for collaborations, full-time opportunities, or just a friendly chat.
                        </p>

                        <div className="space-y-6">
                            {/* Phone */}
                            <div className="flex items-center space-x-5 group">
                                <div className="bg-white/5 p-4 rounded-2xl border border-white/10 text-blue-400 group-hover:bg-blue-500/20 group-hover:border-blue-500/50 transition-all duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.2)]">
                                    <FaPhoneAlt className="text-xl" />
                                </div>
                                <div>
                                    <p className="mb-1 text-sm font-semibold tracking-wider uppercase text-slate-500">Phone</p>
                                    <p className="text-lg font-bold text-slate-200">+94 77 835 6196</p>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-center space-x-5 group">
                                <div className="bg-white/5 p-4 rounded-2xl border border-white/10 text-indigo-400 group-hover:bg-indigo-500/20 group-hover:border-indigo-500/50 transition-all duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.2)]">
                                    <FaEnvelope className="text-xl" />
                                </div>
                                <div>
                                    <p className="mb-1 text-sm font-semibold tracking-wider uppercase text-slate-500">Email</p>
                                    <p className="font-bold text-slate-200 text-md">kahadawaarachchiashen@gmail.com</p>
                                </div>
                            </div>

                            {/* Location */}
                            <div className="flex items-center space-x-5 group">
                                <div className="bg-white/5 p-4 rounded-2xl border border-white/10 text-cyan-400 group-hover:bg-cyan-500/20 group-hover:border-cyan-500/50 transition-all duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.2)]">
                                    <FaMapMarkerAlt className="text-xl" />
                                </div>
                                <div>
                                    <p className="mb-1 text-sm font-semibold tracking-wider uppercase text-slate-500">Location</p>
                                    <p className="font-bold text-slate-200 text-md">Wathurugama, Western Province</p>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex pt-6 space-x-4 border-t border-white/10">
                            <a href="https://www.linkedin.com/in/ashen-lakmal-293649244/" target="_blank" rel="noopener noreferrer" className="bg-white/5 p-4 rounded-full text-slate-300 hover:text-white hover:bg-[#0077b5] border border-white/10 hover:border-[#0077b5] hover:shadow-[0_0_20px_rgba(0,119,181,0.5)] transition-all duration-300 transform hover:-translate-y-1">
                                <FaLinkedin className="text-xl" />
                            </a>
                            <a href="https://github.com/ashenlakmal" target="_blank" rel="noopener noreferrer" className="bg-white/5 p-4 rounded-full text-slate-300 hover:text-white hover:bg-slate-700 border border-white/10 hover:border-slate-500 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-300 transform hover:-translate-y-1">
                                <FaGithub className="text-xl" />
                            </a>
                        </div>
                    </motion.div>


                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="lg:w-2/3"
                    >
                        <div className="bg-white/5 backdrop-blur-2xl p-8 md:p-10 rounded-3xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] relative">
                            <form className="space-y-6" onSubmit={onSubmit}>

                                <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                    <div className="space-y-2">
                                        <label className="ml-1 text-sm font-medium text-slate-400">Your Name</label>
                                        <input type="text" name="name" required placeholder="John Doe" className="w-full px-5 py-4 rounded-xl bg-[#04060e]/50 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:bg-[#04060e]/80 transition-all shadow-inner" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="ml-1 text-sm font-medium text-slate-400">Your Email</label>
                                        <input type="email" name="email" required placeholder="john@example.com" className="w-full px-5 py-4 rounded-xl bg-[#04060e]/50 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 focus:bg-[#04060e]/80 transition-all shadow-inner" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="ml-1 text-sm font-medium text-slate-400">Subject</label>
                                    <input type="text" name="subject" required placeholder="Job Inquiry" className="w-full px-5 py-4 rounded-xl bg-[#04060e]/50 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:bg-[#04060e]/80 transition-all shadow-inner" />
                                </div>

                                <div className="space-y-2">
                                    <label className="ml-1 text-sm font-medium text-slate-400">Message</label>
                                    <textarea rows="4" name="message" required placeholder="Hello Ashen..." className="w-full px-5 py-4 rounded-xl bg-[#04060e]/50 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 focus:bg-[#04060e]/80 transition-all resize-none shadow-inner"></textarea>
                                </div>

                                {/* Math CAPTCHA */}
                                <div className="bg-[#04060e]/80 p-5 rounded-xl border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-inner">
                                    <label className="flex items-center text-sm font-medium text-slate-300">
                                        Security Check: <span className="ml-3 text-2xl font-extrabold text-blue-400 drop-shadow-md">{num1} + {num2} = ?</span>
                                    </label>
                                    <input
                                        type="number"
                                        required
                                        value={userAnswer}
                                        onChange={(e) => setUserAnswer(e.target.value)}
                                        placeholder="Answer"
                                        className="w-full px-5 py-3 text-lg font-bold text-center text-white transition-all border sm:w-32 rounded-xl bg-white/5 border-white/20 focus:outline-none focus:border-blue-500 focus:bg-white/10"
                                    />
                                </div>

                                <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold py-4 rounded-xl hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] transition-all duration-300 transform hover:-translate-y-1 border border-blue-500/50 uppercase tracking-widest text-sm">
                                    Send Message
                                </button>
                            </form>

                            {/* Result Messages */}
                            {result && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`mt-6 p-4 text-center rounded-xl font-bold ${result.includes("Failed") || result.includes("Error") ? "bg-red-500/10 text-red-400 border border-red-500/30" : result === "Sending...." ? "bg-white/5 text-blue-400 border border-white/10" : "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30"}`}
                                >
                                    {result}
                                </motion.div>
                            )}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Contact;