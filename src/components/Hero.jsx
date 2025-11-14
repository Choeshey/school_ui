import React, { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';
import AnimatedBackground from './bg_animated/AnimatedBackground'; // Import the new component

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const heroRef = useRef(null);
    const textRef = useRef(null);
    const headingRef = useRef(null);
    const subheadingRef = useRef(null);
    const buttonRef = useRef(null);

    // Animation for the main content
    useEffect(() => {
        // Pin the Hero section
        ScrollTrigger.create({
            trigger: heroRef.current,
            start: "top top",
            pin: true,
            pinSpacing: false,
            end: "+=100%",
        });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: heroRef.current,
                start: 'top 80%',
                toggleActions: 'play none none none',
            },
            defaults: { ease: 'power3.out' },
        });

        tl.fromTo([textRef.current, headingRef.current, subheadingRef.current, buttonRef.current],
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8, stagger: 0.2 }
        );

        return () => {
            tl.kill();
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <section
            ref={heroRef}
            className="relative h-screen w-full flex flex-col justify-center items-center px-4 py-20 bg-white z-10 overflow-hidden"
        >
            <AnimatedBackground /> {/* Use the new component here */}

            <div className="relative z-10 text-center">
                <div
                    ref={textRef}
                    className="max-w-4xl mx-auto text-4xl text-gray-900 font-light mb-16 mt-16 leading-tight"
                >
                    Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.
                </div>

                <div className="flex flex-col justify-center items-center">
                    <h1
                        ref={headingRef}
                        className="uppercase text-5xl md:text-7xl font-medium mb-4"
                    >
                        Turning ideas Into
                    </h1>

                    <span
                        ref={subheadingRef}
                        className="uppercase text-5xl md:text-7xl font-medium text-[#009B4D] mb-10"
                    >
                        Digital Reality
                    </span>

                    <div ref={buttonRef} className="flex flex-row gap-6 justify-center items-center mt-10">
                        <button
                            className="py-4 px-8 md:py-5 md:px-10 bg-[#009B4D] text-white rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#009B4D]/30"
                            onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
                        >
                            Courses
                        </button>
                        <button
                            className="py-4 px-8 md:py-5 md:px-10 bg-[#009B4D] text-white rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#009B4D]/30"
                            onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
                        >
                            Get In Touch
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
