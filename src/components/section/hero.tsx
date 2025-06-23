"use client";

import React, { useState } from 'react';
import { motion, easeInOut } from 'framer-motion';
import { Button } from '@/src/components/ui/button';
import { Container } from '@/src/components/ui/container';
import { GridBackground } from '@/src/components/grid-background';

const slideUpVariants = {
  hidden: { opacity: 0, y: 500 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeInOut },
  },
};

const primaryButtonBaseClasses = "bg-[#F3F3E0] text-blue-900 border-[#F3F3E0]";
const secondaryButtonBaseClasses = "text-[#F3F3E0] border-[#F3F3E0] bg-transparent";

const transitionClasses = "transform transition-all duration-300 ease-in-out";

const hoverScaleClass = "hover:scale-105";

const Hero = () => {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  let button1Classes = primaryButtonBaseClasses;
  let button2Classes = secondaryButtonBaseClasses;

  if (hoveredButton === 'primary') {
    button2Classes = primaryButtonBaseClasses;
  } else if (hoveredButton === 'secondary') {
    button1Classes = secondaryButtonBaseClasses;
    button2Classes = primaryButtonBaseClasses;
  }

  const gradientClasses = "bg-gradient-to-br from-blue-900 via-blue-950 to-teal-900";
  const headingColor = "text-[#F3F3E0]";

  return (
    <motion.section
      aria-labelledby="hero-heading"
      className={`${gradientClasses} relative flex w-full flex-col justify-center overflow-hidden py-28 md:py-36 lg:py-48 z-0 min-h-screen`}
      variants={slideUpVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="absolute inset-0 w-full h-full -z-10"><GridBackground /></div>

      <Container className="relative z-10">
        <div className="flex flex-col items-center justify-center">
          <h1 className={`${headingColor} text-balance text-center text-4xl font-bold sm:text-5xl/tight md:text-7xl lg:text-8xl/tight mb-12`}>
            Akash Singh <br /> Full Stack Developer
          </h1>

          <div
            className="mt-12 flex items-stretch gap-x-6 gap-y-3 max-sm:flex-col sm:items-center"
            onMouseLeave={() => setHoveredButton(null)}
          >
            <Button
              as="a"
              href="/#work"
              size="large"
              className={`
                 ${button1Classes}
                 border-1
                 ${hoverScaleClass}
                 ${transitionClasses}
                 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white focus-visible:ring-offset-blue-950
              `}
              onMouseEnter={() => setHoveredButton('primary')}
            >
              Dig into my universe
            </Button>

            <Button
              as="a"
              href="/AkashSingh_SDE.pdf"
              size="large"
              download
              className={`
                ${button2Classes}
                border-1
                ${hoverScaleClass}
                ${transitionClasses}
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#F3F3E0] focus-visible:ring-offset-blue-950
              `}
              onMouseEnter={() => setHoveredButton('secondary')}
            >
              Download My Resume
            </Button>
          </div>
        </div>
      </Container>
    </motion.section>
  );
};

export default Hero;