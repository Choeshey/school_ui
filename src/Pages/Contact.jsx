import React from 'react';
import withCurtainRaiser from '../utils/withCurtainRaiser';

const Contact = () => {
    return (
        <div className="container mx-auto py-20 px-4">
            <div className="max-w-2xl mx-auto">
                <h1 className="text-4xl font-bold text-center mb-12 mt-12 text-gray-900">Contact Us</h1>
                <form className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Full Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#009B4D] focus:border-[#009B4D] sm:text-sm"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email Address
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#009B4D] focus:border-[#009B4D] sm:text-sm"
                        />
                    </div>
                    <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                            Subject
                        </label>
                        <input
                            type="text"
                            name="subject"
                            id="subject"
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#009B4D] focus:border-[#009B4D] sm:text-sm"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                            Message
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            rows="4"
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#009B4D] focus:border-[#009B4D] sm:text-sm"
                        ></textarea>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#009B4D] hover:bg-[#008744] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#009B4D]"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default withCurtainRaiser(Contact);
