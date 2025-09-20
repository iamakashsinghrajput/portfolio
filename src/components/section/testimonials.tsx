"use client";

import React from "react";
import { motion } from 'framer-motion';
import { Container } from '@/src/components/ui/container';
import { Caption, Heading, Paragraph } from '@/src/components/ui/typography';
import { InfiniteMovingCardsDemo } from "../infinitemovingcardsdemo";

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
  hidden: { opacity: 0, y: 40, scale: 0.95 },
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

const lineVariants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: {
      duration: 1,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  },
};

const cardsVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
      delay: 0.3,
    },
  },
};

const Testimonials = () => {
    return (
        <motion.section
            id="stories"
            aria-labelledby="stories-heading"
            className="h-full py-12 relative z-20 w-full lg:border-t-0.5 lg:border-neutrals-600 lg:before:hidden lg:after:hidden"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            <motion.hr
                className="h-px border-0 bg-gradient-to-r from-transparent via-[#807f8076] to-transparent origin-center"
                variants={lineVariants}
            />
            <Container className='py-28'>
                <motion.div
                    className="bg-black flex flex-col items-center text-center"
                    variants={itemVariants}
                >
                    <motion.div variants={itemVariants}>
                        <Caption id="stories-heading" className='text-[#6919ff]'>
                            Customer Stories
                        </Caption>
                    </motion.div>
                    <motion.div variants={itemVariants}>
                        <Heading className='text-white text-center'>Trusted by the kindest clients</Heading>
                    </motion.div>
                    <motion.div variants={itemVariants}>
                        <Paragraph className="text-gray-500">
                            Here&apos;s a glimpse into the heartfelt experiences of our incredible clients.
                            Your trust fuels our passion.
                        </Paragraph>
                    </motion.div>
                </motion.div>
                <motion.div variants={cardsVariants}>
                    <InfiniteMovingCardsDemo />
                </motion.div>
            </Container>
        </motion.section>
    )
}

export default Testimonials;