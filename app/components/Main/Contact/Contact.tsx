"use client"
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useForm } from "react-hook-form";

import { BiMessageRounded } from "react-icons/bi";
import { BiMessageRoundedCheck } from "react-icons/bi";

import { sendContactMessage } from "@/app/api/pushover";

import { ContactData } from "@/app/types/types";

export default function Contact() {
    const [messageSent, setMessageSent] = useState(false);
    const containerRef = useRef(null);
    const ref = useRef(null);
    const isInView = useInView(containerRef);
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors }
    } = useForm<ContactData>();

    const onSubmit = async (data: ContactData) => {
        reset();
        setMessageSent(true);
        await sendContactMessage(data);
        console.log(data);
        console.log("here");
    }

    return (
        <section id="contact" ref={containerRef} className="flex flex-col justify-center py-20 md:flex-row">
            <motion.div 
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 40 }}
                transition={{ duration: 1 }}
                className="flex flex-col flex-1 mb-8 md:justify-center md:mb-0"
            >
                <h2 className="mb-4 text-3xl font-semibold text-center">
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
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col space-y-4"
                >
                    <div className="flex flex-col md:flex-row md:space-x-4">
                        <div className="flex flex-col flex-1">
                            <label className="font-medium">First Name</label>
                            <input 
                                {...register("firstName", {
                                    required: "Required",
                                })}
                                className={`transition-all mt-2.5 w-full rounded-md px-1 py-1 bg-neutral-800/50 ${errors.firstName ? "border-red-500 focus:border-red-500" : "border-stone-500/50 focus:border-stone-500"} border-2 outline-0`}
                            />
                        </div>
                        <div className="flex flex-col flex-1 mt-4 md:mt-0">
                            <label className="font-medium">Last Name</label>
                            <input 
                                {...register("lastName", {
                                    required: "Required",
                                })}
                                className={`transition-all mt-2.5 w-full rounded-md px-1 py-1 bg-neutral-800/50 ${errors.lastName ? "border-red-500 focus:border-red-500" : "border-stone-500/50 focus:border-stone-500"} border-2 outline-0`}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <label className="font-medium">Email</label>
                        <input
                            {...register("email", {
                                required: "Required",
                                pattern: {
                                    value: /^\S+@\S+$/i,
                                    message: "Enter a valid email",
                                },
                            })}
                            className={`transition-all mt-2.5 w-full rounded-md px-1 py-1 bg-neutral-800/50 ${errors.email ? "border-red-500 focus:border-red-500" : "border-stone-500/50 focus:border-stone-500"} border-2 outline-0`}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="font-medium">Message</label>
                        <textarea
                            {...register("message", {
                                required: "Required",
                                maxLength: {
                                    value: 250,
                                    message: "Max length 250 characters"
                                }
                            })}
                            className={`transition-all mt-2.5 w-full rounded-md px-1 py-1 bg-neutral-800/50 ${errors.message ? "border-red-500 focus:border-red-500" : "border-stone-500/50 focus:border-stone-500"} border-2 focus:border-stone-500 outline-0`}
                        />
                    </div>
                    <button
                        
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
                    {messageSent && <p className="text-white">Message successfully sent</p>}
                </form>
            </motion.div>
        </section>
    )
}