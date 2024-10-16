"use client"
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import { BiMessageRounded } from "react-icons/bi";
import { BiMessageRoundedCheck } from "react-icons/bi";

export default function Contact() {
    const containerRef = useRef(null);
    const ref = useRef(null);
    const isInView = useInView(containerRef);

    return (
        <section id="contact" ref={containerRef} className="flex flex-col justify-center py-20 md:flex-row">
            <motion.div 
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 40 }}
                transition={{ duration: 1 }}
                className="flex flex-col flex-1 mb-8 md:justify-center md:mb-0"
            >
                <h2 className="mb-4 text-2xl font-semibold text-center">
                    Get in touch
                </h2>
                <p className="self-center max-w-xl px-4 text-center text-zinc-400">
                    We’d love to hear from you! Whether you have questions, feedback, or just want to say hello, feel free to reach out. Our team is here to assist you and ensure your experience is exceptional. Fill out the contact form, and we’ll get back to you as soon as possible. Your thoughts and inquiries are important to us!
                </p>
            </motion.div>
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 40 }}
                transition={{ duration: 1 }}
                className="flex justify-center flex-1 px-1 gap-y-4"
            >
                <form className="flex flex-col space-y-4">
                    <div className="flex flex-col md:flex-row md:space-x-4">
                        <div className="flex flex-col flex-1">
                            <label className="font-medium">First Name</label>
                            <input 
                                className="transition-all mt-2.5 w-full rounded-md px-1 py-1 bg-neutral-800/50 border-stone-500/50 border-2 focus:border-stone-500 outline-0"
                            />
                        </div>
                        <div className="flex flex-col flex-1 mt-4 md:mt-0">
                            <label className="font-medium">Last Name</label>
                            <input 
                                className="transition-all mt-2.5 w-full rounded-md px-1 py-1 bg-neutral-800/50 border-stone-500/50 border-2 focus:border-stone-500 outline-0"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <label className="font-medium">Email</label>
                        <input 
                            className="transition-all mt-2.5 w-full rounded-md px-1 py-1 bg-neutral-800/50 border-stone-500/50 border-2 focus:border-stone-500 outline-0"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="font-medium">Message</label>
                        <textarea 
                            className="transition-all mt-2.5 w-full rounded-md px-1 py-1 bg-neutral-800/50 border-stone-500/50 border-2 focus:border-stone-500 outline-0"
                        />
                    </div>
                    <button 
                        type="submit"
                        className="flex flex-row items-center justify-center px-4 py-2 mt-4 font-semibold text-white transition-all border-2 rounded-md group bg-stone-700 border-stone-500/50 hover:bg-stone-600 focus:outline-none focus:ring-2 focus:ring-stone-500 focus:ring-opacity-50"
                    >
                        Send Message
                        <div className="relative w-4 h-4 ml-1">
                            <span className="absolute inset-0 flex items-center justify-center transition-opacity duration-200 opacity-100 group-hover:opacity-0">
                                <BiMessageRounded className="text-xl" />
                            </span>
                            <span className="absolute inset-0 flex items-center justify-center transition-opacity duration-200 opacity-0 group-hover:opacity-100">
                                <BiMessageRoundedCheck className="text-xl" />
                            </span>
                        </div>
                    </button>
                </form>
            </motion.div>
        </section>
    )
}