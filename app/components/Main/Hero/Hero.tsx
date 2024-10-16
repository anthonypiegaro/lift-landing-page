"use client"
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import Button from "./Button"

export default function Hero() {
    const containerRef = useRef(null);
    const ref = useRef(null);
    const isInView = useInView(containerRef);

    return (
        <section ref={containerRef} className="flex flex-col justify-center w-full py-20 bg-gradient-to-t from-yellow-600 to-75% md:py-30 lg:py-40">
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                transition={{ duration: 0.5 }}
                className="self-center inline px-3 mx-auto mb-4 text-center text-yellow-600 border-2 border-yellow-600 rounded-3xl md:mb-4 lg:mb-6"
            >
                lift labs
            </motion.div>
            <motion.h1
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                transition={{ duration: 0.5 }}
                className="px-3 mb-4 text-3xl font-bold text-center md:mb-4 md:text-5xl md:px-6 lg:mb-6 lg:text-6xl lg:px-16"
            >
                Your advanced training made simple
            </motion.h1>
            <motion.p 
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                transition={{ duration: 0.5 }}
                className="self-center max-w-xl px-4 mb-4 font-medium text-center text-zinc-400 md:max-w-2xl md:text-lg lg:text-xl"
            >
                Get started building, tracking, and analyzing your fitness goals
                with a streamlined, all-in-one platform. Our app simplifies program
                creation and performance tracking, so you can focus on reaching 
                your peak potential.
            </motion.p>
            <motion.div 
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center md:flex-row md:justify-center"
            >
                <Button name="Waitlist" href="#waitlist" />
                <Button name="Contact" href="#contact" secondary={true} />
            </motion.div>
        </section>
    )
}