'use client'
import { motion } from "framer-motion";

import AnalyticsLogo from "./Logos/AnalyticsLogo";
import CustomizeLogo from "./Logos/CustomizeLogo";
import FastLogo from "./Logos/FastLogo";
import HistoryLogo from "./Logos/HistoryLogo";
import OfflineLogo from "./Logos/OfflineLogo";
import SchedulingLogo from "./Logos/SchedulingLogo";
import SecureLogo from "./Logos/SecureLogo";

export default function LogoTicker() {
    return (
        <section className="py-8 md:py-12">
            <div className="container">
                <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
                    <motion.div 
                        className="flex flex-none gap-16 pr-16"
                        animate={{
                            translateX: "-50%",
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear",
                            repeatType: "loop"
                        }}
                    >
                        <AnalyticsLogo />
                        <CustomizeLogo />
                        <SchedulingLogo />
                        <HistoryLogo />
                        <FastLogo />
                        <SecureLogo />
                        <OfflineLogo />

                        {/* Second set of logos for animation */}
                        <AnalyticsLogo />
                        <CustomizeLogo />
                        <SchedulingLogo />
                        <HistoryLogo />
                        <FastLogo />
                        <SecureLogo />
                        <OfflineLogo />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}