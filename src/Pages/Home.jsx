import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { motion } from 'framer-motion'; // Import motion

import Hero from "../components/Hero.jsx";
import HeroImg from "../components/Hero_img.jsx";
import Features from "../components/Features.jsx";
import Testimonial from "../components/Testimonial.jsx";
import Gallery from "../components/Gallery.jsx";
import Footer from "../components/Footer.jsx";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// Define page transition variants
const pageVariants = {
    initial: { opacity: 0, x: "-100vw" },
    animate: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeInOut" } },
    exit: { opacity: 0, x: "100vw", transition: { duration: 0.7, ease: "easeInOut" } }
};

const Home = () => {
    useEffect(() => {
        const smoother = ScrollSmoother.create({
            wrapper: "#smooth-wrapper",
            content: "#smooth-content",
            smooth: 1,
            effects: true,
            smoothTouch: 0.1,
        });

        return () => {
            if (smoother) {
                smoother.kill();
            }
        };
    }, []);

    return (
        <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <Hero />
                    <HeroImg />
                    <Features />
                    <Testimonial />
                    <Gallery />
                    <Footer />
                </div>
            </div>
        </motion.div>
    );
};

export default Home;
