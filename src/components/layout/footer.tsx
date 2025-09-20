"use client"

import akashtudiosLogoImage from '@/public/akashstudios.svg';
import Image from 'next/image';
import { Container } from '@/src/components/ui/container';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconArrowUp, IconMail } from '@tabler/icons-react';
import Links from '../section/links';

const primaryLinks = [
    {
        label: 'About',
        href: '#about',
    },
    {
        label: 'Work',
        href: '#work',
    },
    {
        label: 'Reviews',
        href: '#stories',
    },
] as const;

function Footer() {
    const [currentYear] = useState(() => new Date().getFullYear());
    const [showBackToTop, setShowBackToTop] = useState(false);

    const checkScrollTop = () => {
        // Show button when user scrolls past hero section (approximately 100vh)
        const heroHeight = window.innerHeight;
        if (!showBackToTop && window.scrollY > heroHeight) {
            setShowBackToTop(true);
        } else if (showBackToTop && window.scrollY <= heroHeight) {
            setShowBackToTop(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', checkScrollTop);
        checkScrollTop();
        return () => window.removeEventListener('scroll', checkScrollTop);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [showBackToTop]);

    return (
        <>
            <footer
                aria-label="Primary Footer"
                className="relative z-10 w-full bg-gradient-to-br from-[#0a0118] via-[#1a0b2e] to-[#0a0118] border-t border-neutral-800/50"
            >
                <Container>
                    {/* Main Footer Content */}
                    <div className="py-16 md:py-20">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 items-start">
                            {/* Logo and Description */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="lg:col-span-1"
                            >
                                <a
                                    href="#"
                                    title="Navigate home"
                                    className="inline-block mb-6 group"
                                >
                                    <Image
                                        src={akashtudiosLogoImage}
                                        alt="AKASH STUDIOS Logo"
                                        className="h-12 w-auto transition-all duration-300 group-hover:scale-105"
                                    />
                                </a>
                                <p className="text-neutral-400 text-sm leading-relaxed max-w-sm">
                                    Crafting exceptional digital experiences with cutting-edge technology and innovative design solutions.
                                </p>
                            </motion.div>

                            {/* Navigation Links */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="lg:col-span-1"
                            >
                                <h3 className="text-white font-semibold mb-6 text-lg">Quick Links</h3>
                                <nav
                                    aria-label="Footer Navigation"
                                    className="space-y-4"
                                >
                                    {primaryLinks.map((link, index) => (
                                        <motion.div
                                            key={link.href}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                                        >
                                            <a
                                                href={link.href}
                                                className="block text-neutral-400 hover:text-white transition-all duration-300 text-sm group relative overflow-hidden"
                                            >
                                                <span className="relative z-10">{link.label}</span>
                                            </a>
                                        </motion.div>
                                    ))}
                                </nav>
                            </motion.div>

                            {/* Contact Info */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="lg:col-span-1"
                            >
                                <h3 className="text-white font-semibold mb-6 text-lg">Get In Touch</h3>
                                <div className="space-y-4">
                                    <a
                                        href="mailto:hello@akashstudios.com"
                                        className="flex items-center gap-3 text-neutral-400 hover:text-white transition-all duration-300 text-sm group"
                                    >
                                        <div className="p-2 rounded-full bg-neutral-800/50 group-hover:bg-red-600 transition-colors duration-300">
                                            <IconMail size={20} className="group-hover:text-white transition-colors duration-300" />
                                        </div>
                                        <span>hello@akashstudios.com</span>
                                    </a>
                                </div>

                                {/* Social Links */}
                                <div className="mt-8">
                                    <h4 className="text-white font-medium mb-4 text-sm">Follow Us</h4>
                                    <div className="flex gap-3">
                                        <Links />
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Footer Bottom */}
                    <div className="border-t border-neutral-800/50 py-8">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="text-neutral-500 text-sm"
                            >
                                © {currentYear} AKASH STUDIOS. All rights reserved.
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="flex gap-6 text-sm"
                            >
                                <a href="#" className="text-neutral-500 hover:text-[#6919ff] transition-colors duration-300">
                                    Privacy Policy
                                </a>
                                <a href="#" className="text-neutral-500 hover:text-[#6919ff] transition-colors duration-300">
                                    Terms of Service
                                </a>
                            </motion.div>
                        </div>
                    </div>
                </Container>
            </footer>

            {/* Scroll to Top Button */}
            <AnimatePresence>
                {showBackToTop && (
                    <motion.button
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={scrollToTop}
                        aria-label="Scroll back to top"
                        className="fixed bottom-8 right-8 z-50 p-4 rounded-full bg-[#6919ff] text-white shadow-lg hover:shadow-xl transition-all duration-300 group"
                        style={{
                            boxShadow: '0 8px 32px rgba(105, 25, 255, 0.3)'
                        }}
                    >
                        <IconArrowUp
                            size={20}
                            className="transition-transform duration-300 group-hover:-translate-y-1"
                        />
                    </motion.button>
                )}
            </AnimatePresence>
        </>
    );
}

export { Footer };