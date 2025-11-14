import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

const withCurtainRaiser = (WrappedComponent) => {
    // The new component returned by the HOC
    return (props) => {
        const curtain1Ref = useRef(null);
        const curtain2Ref = useRef(null);
        const contentRef = useRef(null);

        useEffect(() => {
            const tl = gsap.timeline();

            // Set initial states
            gsap.set(contentRef.current, { autoAlpha: 0 });
            gsap.set(curtain1Ref.current, { scaleY: 1 });
            gsap.set(curtain2Ref.current, { scaleY: 1 });

            // The animation timeline
            tl
                .to(curtain1Ref.current, {
                    scaleY: 0,
                    duration: 0.6,
                    ease: 'power2.inOut',
                    transformOrigin: 'top'
                })
                .to(curtain2Ref.current, {
                    scaleY: 0,
                    duration: 0.6,
                    ease: 'power2.inOut',
                    transformOrigin: 'bottom'
                }, "-=0.4")
                .to(contentRef.current, {
                    autoAlpha: 1,
                    duration: 0.5,
                    y: 0
                }, "-=0.3");

        }, []);

        return (
            <motion.div
                exit={{ opacity: 0, transition: { duration: 0.5 } }}
                className="relative bg-white overflow-hidden"
            >
                {/* Curtains */}
                <div ref={curtain1Ref} className="absolute top-0 left-0 w-1/2 h-full bg-black z-20" />
                <div ref={curtain2Ref} className="absolute top-0 right-0 w-1/2 h-full bg-black z-20" />

                {/* Wrapped Page Content */}
                <div ref={contentRef} style={{ visibility: 'hidden' }}>
                    <WrappedComponent {...props} />
                </div>
            </motion.div>
        );
    };
};

export default withCurtainRaiser;
