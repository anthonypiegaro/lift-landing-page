"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import Card from "./Common/Card";
import FeatureItem from "./Common/FeatureItem";

export default function Analyze() {
    const containerRef = useRef(null);
    const ref = useRef(null);
    const isInView = useInView(containerRef);

    return (
        <div ref={containerRef} className="flex flex-col md:py-20 md:flex-row">
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                transition={{ duration: 1.5 }}
                className="flex flex-col flex-1 mb-8 md:justify-center md:mb-0"
            >
                <div className="self-center">
                    <h2 className="flex items-center px-4 mb-4 text-3xl font-semibold text-center fmb-4">
                        Analyze
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                        </svg>
                    </h2>
                    <p className="max-w-xl px-4 text-zinc-400">
                        Gain valuable insights with the Analyze feature. Track 
                        trends over time for every exercise, allowing you to see 
                        your progress and make informed, data-driven decisions about 
                        your training. With detailed analysis at your fingertips, you 
                        an fine-tune your workouts to maximize results and reach 
                        your goals faster.
                    </p>
                </div>
            </motion.div>
            <div className="flex justify-center flex-1 px-4 md:px-6 lg:px-14">
                <Card>
                    <FeatureItem feature="Custom Analytics" />
                    <FeatureItem feature="Prebuilt Data Visualization" />
                    <FeatureItem feature="Personal Dashboard" />
                </Card>
            </div>
        </div>
    )
}