import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import data from '../contexts';

const galleryData = {
    "Students Party": data.projects.slice(0, 4),
    "Children's Day": data.projects.slice(4, 8),
    "Teacher's Day": data.projects.slice(8, 12),
    "Annual Day": data.projects.slice(12, 16),
};

const tabs = Object.keys(galleryData);

const Gallery = () => {
    const [activeTab, setActiveTab] = useState(tabs[0]);
    const [selectedImage, setSelectedImage] = useState(null);
    const imageGridRef = useRef(null);
    const modalRef = useRef(null);

    // Animate images when tab changes
    useEffect(() => {
        if (imageGridRef.current) {
            gsap.fromTo(imageGridRef.current.children,
                { autoAlpha: 0, y: 20 },
                {
                    autoAlpha: 1,
                    y: 0,
                    duration: 0.5,
                    stagger: 0.1,
                    ease: 'power2.out',
                }
            );
        }
    }, [activeTab]);

    // Animate modal when it opens/closes
    useEffect(() => {
        if (selectedImage) {
            gsap.to(modalRef.current, { autoAlpha: 1, duration: 0.3 });
        } else {
            gsap.to(modalRef.current, { autoAlpha: 0, duration: 0.3 });
        }
    }, [selectedImage]);

    return (
        <main className="w-full h-auto bg-white py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-center border-b border-gray-200">
                    {tabs.map(tab => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-6 py-3 text-lg font-medium transition-colors
                                ${activeTab === tab
                                    ? 'border-b-2 border-[#009B4D] text-[#009B4D]'
                                    : 'text-gray-500 hover:text-gray-700'
                                }`
                            }
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                <div ref={imageGridRef} className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {galleryData[activeTab].map((image, index) => (
                        <div
                            key={index}
                            className="overflow-hidden rounded-lg shadow-lg cursor-pointer"
                            onClick={() => setSelectedImage(image)}
                        >
                            <img src={image.image} alt={image.title} className="w-full h-64 object-cover" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal for zoomed image */}
            <div
                ref={modalRef}
                className="fixed lg:top-[80%]  left-0 w-full h-screen bg-black bg-opacity-75 flex justify-center items-center z-50 "
                style={{ visibility: selectedImage ? 'visible' : 'hidden', opacity: 0 }}
                onClick={() => setSelectedImage(null)}
            >
                <div className="relative max-w-4xl max-h-full p-4">
                    <img
                        src={selectedImage?.image}
                        alt={selectedImage?.title}
                        className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
                    />
                    <button
                        className="absolute top-4 right-4 text-white text-4xl font-bold"
                        onClick={() => setSelectedImage(null)}
                    >
                        &times;
                    </button>
                </div>
            </div>
        </main>
    );
};

export default Gallery;
