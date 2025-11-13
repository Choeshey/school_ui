import React, { createContext, useState, useRef } from 'react';
import { gsap } from 'gsap';

export const TransitionContext = createContext();

export const TransitionProvider = ({ children }) => {
    const [timeline, setTimeline] = useState(null);
    const overlayRef = useRef(null);

    const setupTimeline = () => {
        const tl = gsap.timeline({ paused: true });
        tl.to(overlayRef.current, {
            duration: 0.5,
            scaleY: 1,
            transformOrigin: 'bottom',
            ease: 'power2.inOut',
        });
        setTimeline(tl);
    };

    const playIn = (onComplete) => {
        if (timeline) {
            timeline.eventCallback('onComplete', onComplete);
            timeline.play();
        }
    };

    const playOut = () => {
        if (timeline) {
            timeline.reverse();
        }
    };

    return (
        <TransitionContext.Provider value={{ playIn, playOut, setupTimeline }}>
            {children}
            <div
                ref={overlayRef}
                className="fixed top-0 left-0 w-full h-screen bg-[#009B4D] z-[1000]"
                style={{ scaleY: 0 }}
            />
        </TransitionContext.Provider>
    );
};
