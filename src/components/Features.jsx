import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import projects from '../contexts';


gsap.registerPlugin(ScrollTrigger);



const Features = () => {
    const sectionRef = useRef(null);
    const projectRefs = useRef([]);

    useEffect(() => {
        projectRefs.current.forEach((el) => {
            gsap.fromTo(el,
                { autoAlpha: 0, y: 50 },
                {
                    autoAlpha: 1,
                    y: 0,
                    duration: 0.5,
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 80%',
                        toggleActions: 'play none none none',
                    }
                }
            );
        });
    }, []);

    return (
        <section ref={sectionRef} className="relative bg-white w-full h-auto py-20 px-10 sm:py-24 md:px-10 md:py-32 z-30">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-center pb-24 text-gray-900">Our Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10">
                    {projects.projects.slice(0, 3).map((project, index) => (
                        <div
                            key={index}
                            ref={el => projectRefs.current[index] = el}
                            className="bg-gray-50 rounded-lg shadow-lg overflow-hidden"
                        >
                            <img src={project.image} alt={project.title} className="w-full h-56 object-cover" />
                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                                <p className="text-gray-700">{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Features;
