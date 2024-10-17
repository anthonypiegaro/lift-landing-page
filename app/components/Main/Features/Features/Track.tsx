"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import Card from "./Common/Card";
import FeatureItem from "./Common/FeatureItem";

export default function Track() {
    const containerRef = useRef(null);
    const ref = useRef(null);
    const isInView = useInView(containerRef);

    return (
        <div ref={containerRef} className="flex flex-col py-20 md:flex-row">
            <div className="flex justify-center flex-1 px-4 md:px-6 lg:px-14">
                <Card>
                    <FeatureItem feature="Track Every Set" />
                    <FeatureItem feature="Workout Duration Logs" />
                    <FeatureItem feature="All Data On Device" />
                </Card>
            </div>
            <motion.div 
                ref={ref}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                transition={{ duration: 1.5 }}
                className="flex flex-col flex-1 mb-8 md:justify-center md:mb-0"
            >
                <div className="self-center">
                    <h2 className="flex items-center px-4 mb-4 text-3xl font-semibold text-center fmb-4">
                        Track
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                        </svg>
                    </h2>
                    <p className="max-w-xl px-4 text-zinc-400">
                        Stay on top of your progress with the Track feature. 
                        Record every set, exercise, and workout, down to the time 
                        it takes to complete each exercise. With limitless tracking 
                        options, you have complete freedom to capture the details that 
                        matter most to you, giving you a comprehensive view of your 
                        fitness journey. Track your way to success with unmatched 
                        precision and control.
                    </p>
                </div>
            </motion.div>
        </div>
    )
}