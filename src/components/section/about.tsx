"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import heroimg from '@/src/assets/about.png';
import { Caption, Paragraph } from '@/src/components/ui/typography';
import Image from 'next/image';

const imageVariants = {
  hidden: { opacity: 0, x: -60, scale: 1.1 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 1,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  },
};

const textSectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const textItemVariants = {
   hidden: { opacity: 0, y: 30, scale: 0.95 },
   visible: {
     opacity: 1,
     y: 0,
     scale: 1,
     transition: {
       duration: 0.8,
       ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
     },
   }
}


const letterVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.8,
    rotateX: -90,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  },
  exit: {
    opacity: 0,
    y: -30,
    scale: 0.8,
    rotateX: 90,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  },
}

const containerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1, // Reverse direction for exit
    },
  },
}

const words = [
  "Problem Solver",
  "Visionaries",
  "Developer",
  "Designer",
  "MyAnatomy Partner",
  "Perfectionists",
  "Creative Minds"
]

const AnimatedWords = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsExiting(true);

      // After exit animation completes, change word and start enter animation
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
        setIsExiting(false);
      }, 600); // Duration for exit animation
    }, 3000); // Total cycle time

    return () => clearInterval(interval);
  }, []);

  const currentWord = words[currentIndex] || '';
  const letters = currentWord.split('');

  return (
    <div className="relative h-20 flex items-center perspective-1000">
      <motion.div
        className="flex text-3xl sm:text-4xl lg:text-5xl font-bold text-white"
        variants={containerVariants}
        initial="hidden"
        animate={isExiting ? "exit" : "visible"}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {letters.map((letter, index) => (
          <motion.span
            key={`${currentIndex}-${index}`}
            variants={letterVariants}
            className="inline-block"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {letter === ' ' ? '\u00A0' : letter}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};

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
            alt="Akash Singh - Founder of Akash Studios"
            className="object-cover w-full h-full grayscale transition-[filter] duration-500 hover:grayscale-0"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </motion.div>

        <motion.div
          className="w-full px-6 py-16 sm:px-10 sm:py-20 lg:w-1/2 lg:py-28 lg:pl-10 xl:pl-20 flex flex-col justify-center"
          variants={textSectionVariants}
        >
           <motion.div variants={textItemVariants}>
              <Caption id="about-heading" className="text-[#6919ff] mb-4 inline-block">
                ABOUT
              </Caption>
           </motion.div>

           <motion.div
             className="mb-6"
             variants={textItemVariants}
           >
             <AnimatedWords />
           </motion.div>

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
