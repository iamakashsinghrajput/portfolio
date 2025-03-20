// import kilianPetersImage from '@/src/assets/kilian-peters.jpg';
import React from 'react';
import heroimg from '@/src/assets/about.png';
import { Caption, Paragraph } from '@/src/components/ui/typography';
import Image from 'next/image';

const About = () => {
    return(
        <div id="about" aria-labelledby="about-heading" className="relative z-30 w-full bg-[#000000]">
            <div className="flex flex-row min-h-screen w-full items-center max-lg:flex-col lg:flex lg:flex-row">
                <Image src={heroimg} alt="heroimg" className="h-full max-h-screen bg-neutrals-800 object-cover grayscale transition-[filter] duration-500 hover:grayscale-0 w-1/2"/>
                <div className="w-1/2 py-28 max-lg:mx-auto max-lg:w-11/12 max-lg:max-w-7xl lg:ps-10 xl:ps-20">
                    <Caption id="about-heading" className='text-[#6919ff]'>
                        About
                    </Caption>
                    <Paragraph className='text-gray-400 w-[487px]'>
                        We at AKASH STUDIOS are problem solvers at heart, fueled by a shared passion for <span
                        className="text-white">exceptional web development and design from the future</span>. Founder and visionary behind AKASH STUDIOS is Akash Singh Rajput, an expert in transforming
                        ideas into future-ready digital realities, with his roots in New Delhi, India. Go big or go
                        home!
                    </Paragraph>
                </div>
            </div>
        </div>
    )
};

export default About;
