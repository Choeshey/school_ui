import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Navbar from "./components/Navbar.jsx";

import Home from "./pages/Home.jsx";
import About from "./Pages/About.jsx";
import Courses from "./Pages/Courses.jsx";
import Contact from "./Pages/Contact.jsx";
import Footer from "./components/Footer.jsx";


const App = () => {
    const location = useLocation();

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
                <AnimatePresence mode="wait">
                    <Routes location={location} key={location.pathname}>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/courses" element={<Courses />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </AnimatePresence>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
