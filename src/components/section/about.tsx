"use client";

import React from 'react';
import { motion } from 'framer-motion';
import heroimg from '@/src/assets/about.png';
import { Caption, Paragraph } from '@/src/components/ui/typography';
import Image from 'next/image';

const imageVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};


const textItemVariants = {
   hidden: { opacity: 0, y: 20 },
   visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
}

const About = () => {
  return (
    <motion.div
      id="about"
      aria-labelledby="about-heading"
      className="relative z-30 w-full bg-[#000000] overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="flex flex-row min-h-screen w-full items-center max-lg:flex-col lg:flex lg:flex-row">

        <motion.div
          className="relative h-full max-h-screen w-full lg:w-1/2"
          variants={imageVariants}
        >
          <Image
            src={heroimg}
            alt="Kilian Peters - Founder of Akash Studios"
            className="object-cover w-full h-full grayscale transition-[filter] duration-500 hover:grayscale-0"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </motion.div>

        <motion.div
          className="w-full px-6 py-16 sm:px-10 sm:py-20 lg:w-1/2 lg:py-28 lg:ps-10 xl:ps-20 flex flex-col justify-center"
        >
           <motion.div variants={textItemVariants}>
              <Caption id="about-heading" className="text-[#6919ff] mb-4 inline-block">
                ABOUT
              </Caption>
           </motion.div>

           <motion.h1
             className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
             variants={textItemVariants}
           >
             AKASH STUDIOS
           </motion.h1>

           <motion.div variants={textItemVariants}>
              <Paragraph className="text-gray-400 max-w-xl">
                We at AKASH STUDIOS are problem solvers at heart, fueled by a shared passion for{' '}
                <span className="text-white">
                  exceptional web development and design from the future
                </span>
                . Founder and visionary behind AKASH STUDIOS is Akash Singh Rajput, an expert in transforming
                ideas into future-ready digital realities, with his roots in New Delhi, India. Go big or go!
              </Paragraph>
           </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;