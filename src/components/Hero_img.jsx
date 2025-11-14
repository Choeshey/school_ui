import React, { useRef} from 'react'
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import studentsimg2 from "../assets/studentsimg2.png"

gsap.registerPlugin(ScrollTrigger);

const HeroImg = () => {
    const sectionRef = useRef(null);

    return (
        <section ref={sectionRef} className="hero_section w-full">
            <div className=" w-full flex items-center justify-center">
                <img src={studentsimg2} alt="students" className="w-full h-[30rem] max-h-full object-cover"/>
            </div>
        </section>
    )
}
export default HeroImg
