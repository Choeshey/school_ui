import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import testimonials from '../contexts'

gsap.registerPlugin(ScrollTrigger);

const StarRating = ({ rating }) => {
    return (
        <div className="flex items-center">
            {[...Array(5)].map((_, index) => (
                <svg
                    key={index}
                    className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
            ))}
        </div>
    );
};

const Testimonial = () => {
    const sectionRef = useRef(null);
    const testimonialRefs = useRef([]);

    useEffect(() => {
        testimonialRefs.current.forEach((el) => {
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
        <section ref={sectionRef} className="h-auto bg-white py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-extrabold text-gray-900 text-center">What Our Students Say</h2>
                <div className="mt-12 grid gap-8 lg:grid-cols-3 md:grid-cols-2">
                    {testimonials.testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            ref={el => testimonialRefs.current[index] = el}
                            className="bg-gray-50 p-8 rounded-lg shadow-md"
                        >
                            <StarRating rating={testimonial.rating} />
                            <p className="mt-4 text-lg text-gray-600">"{testimonial.quote}"</p>
                            <div className="mt-6">
                                <p className="font-semibold text-gray-900">{testimonial.author}</p>
                                <p className="text-sm text-gray-500">{testimonial.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
