"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/src/components/ui/button';
import { Container } from '@/src/components/ui/container';
import { GridBackground } from '@/src/components/grid-background';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const slideUpVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: 50, rotateX: 15 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 1,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  },
};

const primaryButtonBaseClasses = "bg-[#F3F3E0] text-blue-900 border-[#F3F3E0]";
const secondaryButtonBaseClasses = "text-[#F3F3E0] border-[#F3F3E0] bg-transparent";

const transitionClasses = "transform transition-all duration-700 ease-in-out";


const Hero = () => {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  // Button states based on hover
  let button1Classes, button2Classes;

  if (hoveredButton === 'dig-universe') {
    // When hovering "Dig into universe":
    // - Dig button gets white bg + blue text
    // - Download button gets white bg + blue text
    button1Classes = "bg-white text-blue-950 border-white";
    button2Classes = "bg-white text-blue-950 border-white";
  } else if (hoveredButton === 'download-resume') {
    // When hovering "Download resume":
    // - Dig button stays hero bg + white border + white text
    // - Download button gets hero bg + white border + white text
    button1Classes = "bg-transparent text-[#F3F3E0] border-[#F3F3E0]";
    button2Classes = "bg-transparent text-[#F3F3E0] border-[#F3F3E0]";
  } else {
    // Default state:
    // - Dig button: hero bg + white border + white text (secondary)
    // - Download button: white bg + blue text (primary)
    button1Classes = secondaryButtonBaseClasses;
    button2Classes = primaryButtonBaseClasses;
  }

  const gradientClasses = "bg-gradient-to-br from-blue-900 via-blue-950 to-teal-900";
  const headingColor = "text-[#F3F3E0]";

  return (
    <motion.section
      aria-labelledby="hero-heading"
      className={`${gradientClasses} relative flex w-full flex-col justify-center overflow-hidden py-28 md:py-36 lg:py-48 z-0 min-h-screen`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div
        className="absolute inset-0 w-full h-full -z-10"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{
          opacity: 1,
          scale: 1,
          transition: { duration: 2, ease: "easeOut" }
        }}
      >
        <GridBackground />
      </motion.div>

      <Container className="relative z-10">
        <motion.div
          className="flex flex-col items-center justify-center"
          variants={slideUpVariants}
        >
          <motion.h1
            className={`${headingColor} text-balance text-center text-4xl font-bold sm:text-5xl/tight md:text-7xl lg:text-8xl/tight mb-12 perspective-1000`}
            variants={titleVariants}
          >
            <motion.span
              className="inline-block"
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.5, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }
              }}
            >
              Akash Singh
            </motion.span>
            <br />
            <motion.span
              className="inline-block"
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.7, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }
              }}
            >
              Full Stack Developer
            </motion.span>
          </motion.h1>

          <motion.div
            className="mt-12 flex items-stretch gap-x-6 gap-y-3 max-sm:flex-col sm:items-center"
            onMouseLeave={() => setHoveredButton(null)}
            variants={buttonVariants}
          >
            <motion.div
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2, ease: "easeOut" }
              }}
              whileTap={{ scale: 0.98 }}
              className="relative overflow-hidden"
            >
              <Button
                as="a"
                href="/#work"
                size="large"
                className={`
                   ${button1Classes}
                   border-1
                   ${transitionClasses}
                   relative overflow-hidden group
                   focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white focus-visible:ring-offset-blue-950
                `}
                onMouseEnter={() => setHoveredButton('dig-universe')}
              >
                <span className="relative z-10 transition-colors duration-700">Dig into my universe</span>
                <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 group-hover:rotate-0 transition-all duration-700 ease-out"></div>
              </Button>
            </motion.div>

            <motion.div
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2, ease: "easeOut" }
              }}
              whileTap={{ scale: 0.98 }}
              className="relative overflow-hidden"
            >
              <Button
                as="a"
                href="/AkashResume_figma.pdf"
                size="large"
                download
                className={`
                  ${button2Classes}
                  border-1
                  ${transitionClasses}
                  relative overflow-hidden group
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#F3F3E0] focus-visible:ring-offset-blue-950
                `}
                onMouseEnter={() => setHoveredButton('download-resume')}
              >
                <span className="relative z-10 transition-colors duration-700">Download My Resume</span>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-950 to-teal-900 transform -translate-x-full group-hover:translate-x-0 group-hover:rotate-0 transition-all duration-700 ease-out"></div>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </motion.section>
  );
};

export default Hero;