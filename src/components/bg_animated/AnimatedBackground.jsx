import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const AnimatedBackground = () => {
    const shapesRef = useRef(null);

    useEffect(() => {
        const shapesContainer = shapesRef.current;
        const numShapes = 20;
        const shapes = []; // Keep track of shapes to clean up later

        for (let i = 0; i < numShapes; i++) {
            const shape = document.createElement('div');
            shape.className = 'absolute rounded-full';
            shape.style.width = `${gsap.utils.random(20, 80)}px`;
            shape.style.height = shape.style.width;
            shape.style.left = `${gsap.utils.random(0, 100)}%`;
            shape.style.backgroundColor = `rgba(0, 155, 77, ${gsap.utils.random(0.1, 0.5)})`;
            shapesContainer.appendChild(shape);
            shapes.push(shape);

            gsap.fromTo(shape,
                { y: '100vh', opacity: 0 },
                {
                    y: '-100%',
                    opacity: gsap.utils.random(0.2, 0.8),
                    duration: gsap.utils.random(10, 20),
                    delay: gsap.utils.random(0, 5),
                    repeat: -1,
                    ease: 'none',
                }
            );
        }

        // Cleanup function to remove shapes and kill animations when the component unmounts
        return () => {
            shapes.forEach(shape => {
                gsap.killTweensOf(shape);
                if (shape.parentNode) {
                    shape.parentNode.removeChild(shape);
                }
            });
        };
    }, []);

    return <div ref={shapesRef} className="absolute top-0 left-0 w-full h-full z-0" />;
};

export default AnimatedBackground;
