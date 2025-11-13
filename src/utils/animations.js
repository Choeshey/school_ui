import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const animateHero = (heroRef, textRef, imageRef) => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: heroRef,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
        },
    });

    tl.to(textRef, { y: -100, opacity: 0 }, 0);
    tl.to(imageRef, { y: -50, scale: 1.1 }, 0);

    gsap.from(textRef, { 
        duration: 1, 
        y: 50, 
        opacity: 0, 
        ease: 'power3.out', 
        delay: 0.5 
    });
};