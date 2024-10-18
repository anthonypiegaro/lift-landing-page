"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import Card from "./Common/Card";
import FeatureItem from "./Common/FeatureItem";

export default function Build() {
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
                        Build
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
                        </svg>
                    </h2>
                    <p className="max-w-xl px-4 text-zinc-400">
                        Take full control of your training with the Build feature. Create custom 
                        exercises, design your own workout templates, and develop comprehensive 
                        training programs tailored to your unique goals. Whether you&#39;re a beginner 
                        or an advanced athlete, you have the freedom to build it all—exactly the 
                        way you want, with no limits. Your training, your way.
                    </p>
                </div>
            </motion.div>
            <div className="flex justify-center flex-1 px-4 md:px-6 lg:px-14">
                <Card>
                    <FeatureItem feature="Custom Exercise Creation" />
                    <FeatureItem feature="Workout Template Design" />
                    <FeatureItem feature="Program Development" />
                </Card>
            </div>
        </div>
    )
}