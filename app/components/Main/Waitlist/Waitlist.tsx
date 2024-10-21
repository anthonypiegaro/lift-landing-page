"use client"
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useForm } from "react-hook-form";

import { addToWaitlist, checkConfig } from "@/app/api/mailchimp";

type WaitlistForm = {
    email: string;
}

export default function Waitlist() {
    const [emailSubmitted, setEmailSubmitted] = useState("");
    const ref = useRef(null);
    const containerRef = useRef(null)
    const isInView = useInView(containerRef);
    const { 
        register, 
        reset,
        handleSubmit, 
        formState: { isValid } 
    } = useForm<WaitlistForm>({
        mode: "onChange"
    })

    const onSubmit = async (data: WaitlistForm) => {
        reset();
        setEmailSubmitted(data.email);
        await checkConfig();
        await addToWaitlist(data.email);
        console.log("Server function called with data: ", data);
    }

    return (
        <section ref={containerRef} id="waitlist" className="flex flex-col py-20">
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 40 }}
                transition={{ duration: 1 }}
                className="flex flex-col self-center justify-center px-6 rounded-xl py-14 bg-zinc-800 lg:py-16 lg:px-10"
            >
                <h2 className="mb-4 text-3xl font-semibold text-center">
                    Join the waitlist
                </h2>
                <p className="self-center max-w-xl px-4 mb-4 text-center text-zinc-400">
                    Obtain early access and achieve your goals faster by joining the waitlist. 
                    As a valued early member, you’ll have the unique opportunity to provide feedback, 
                    shape new features, and be a part of building the world’s leading training app. 
                    Join us on this journey to create something exceptional—together, we’ll make 
                    reaching your fitness goals simpler, more efficient, and more engaging.
                </p>
                <div className="flex justify-center">
                    <form 
                        onSubmit={handleSubmit(onSubmit)}
                        className="flex flex-row items-center justify-center gap-2"
                    >
                        <input
                            placeholder="Email"
                            className="transition-all mt-2.5 max-w-xs w-full rounded-md px-2 py-1 bg-neutral-800/50 border-stone-500/50 border-2 focus:border-stone-500 outline-0"
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^\S+@\S+$/i,
                                    message: "Enter a valid email",
                                },
                            })}
                        />
                        <button
                            className={`flex items-center justify-center px-4 py-1 mt-2 font-semibold text-white transition-all border-2 rounded-md ${isValid ? "bg-stone-700" : "bg-stone-500 text-stone-600"} border-stone-500/50 ${isValid && "hover:bg-stone-600 focus:outline-none focus:ring-2 focus:ring-stone-500 focus:ring-opacity-50"}`}
                            disabled={!isValid}
                        >
                            Join
                        </button>
                    </form>
                </div>
                {emailSubmitted && <p className="py-2 text-center">{emailSubmitted} has been added to the waitlist</p>}
            </motion.div>
        </section>
    );
}