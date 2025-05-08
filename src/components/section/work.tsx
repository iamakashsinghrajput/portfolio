"use client";

import { motion } from 'framer-motion';
import { Container } from '@/src/components/ui/container';
import { Caption, Heading } from '@/src/components/ui/typography';
import { AppleCardsCarouselDemo } from '../applecardcarouseldemo';

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};


const Work = () => {
  return (
    <motion.section
      id="work"
      aria-labelledby="work-heading"
      className="h-full py-20 relative z-20 w-full lg:border-t-0.5 lg:border-neutrals-600 lg:before:hidden lg:after:hidden overflow-hidden" // Added overflow-hidden
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible" 
      viewport={{ once: true, amount: 0.1 }}
    >
      <Container className=''>
        <motion.div
          className="bg-black flex flex-col items-center text-center mb-2 md:mb-8"
        >
          <motion.div variants={itemVariants}>
            <Caption id="work-heading" className='text-[#6919ff]'>
              Work
            </Caption>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Heading className='text-white text-center mt-2'>
              Dig into my universe
            </Heading>
          </motion.div>
        </motion.div>
      </Container>

      <motion.div variants={itemVariants}>
        <AppleCardsCarouselDemo />
      </motion.div>

      <div className="h-16" />

      <motion.hr
        className="h-px border-0 bg-gradient-to-r from-transparent via-[#807f8076] to-transparent"
        variants={itemVariants}
      />
    </motion.section>
  )
};

export default Work;