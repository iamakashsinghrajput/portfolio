"use client"

import akashtudiosLogoImage from '@/src/assets/lokkeestudios.svg';
import uparrow from '@/src/assets/uparrow.svg';
import Image from 'next/image';
import { Container } from '@/src/components/ui/container';
import { useState, useEffect } from 'react';
import { cn } from '@/src/lib/utils';
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
        if (!showBackToTop && window.scrollY > 400) {
            setShowBackToTop(true);
        } else if (showBackToTop && window.scrollY <= 400) {
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
        <footer
            aria-label="Primary Footer"
            className="relative z-10 w-full border-t-0.5 border-neutral-600 bg-neutral-900 py-3"
        >
            <Container>
                <hr className="h-px border-0 bg-gradient-to-r from-transparent via-[#807f8076] to-transparent" />
                <div className="flex justify-center py-12">
                    <a
                        href="#home"
                        title="Navigate home"
                        data-astro-prefetch 
                    >
                        <Image
                            src={akashtudiosLogoImage}
                            alt="AKASH STUDIOS Logo" 
                            className="h-16 w-auto"
                        />
                    </a>
                </div>
                <hr className="h-px border-0 bg-gradient-to-r from-transparent via-[#807f8076] to-transparent" />
                <nav
                    aria-label="Primary Navigation"
                    className="flex flex-wrap justify-center gap-6 py-12"
                >
                    {primaryLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-sm uppercase text-neutral-400 transition-colors hover:text-neutral-50 focus-visible:text-neutral-50 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-offset-neutral-900 focus:ring-white rounded"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>
                <hr className="h-px border-0 bg-gradient-to-r from-transparent via-[#807f8076] to-transparent" />
                <div className="grid grid-cols-1 items-center justify-center gap-y-8 gap-x-6 py-12 lg:grid-cols-3">
                    <div className="flex justify-center lg:order-last lg:justify-end">
                        <button
                            type="button"
                            onClick={scrollToTop}
                            aria-label="Scroll back to top"
                            className={cn(
                                'p-3 rounded-full bg-neutral-700 text-neutral-100 shadow-md transition-all duration-300 ease-in-out hover:bg-neutral-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-900 focus:ring-white',
                                showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none' 
                            )}
                        >
                            <Image
                                src={uparrow}
                                alt="" 
                                className="w-5 h-5" 
                                aria-hidden="true"
                            />
                        </button>
                    </div>

                    <ul
                        aria-label="Social media links"
                        className="flex flex-wrap justify-center items-center gap-4 lg:order-2" 
                    >
                        <Links />
                    </ul>

                    <div className="flex justify-center lg:order-first lg:justify-start">
                        <small className="text-xs text-neutral-500">© {currentYear} AKASH STUDIOS</small>
                    </div>
                </div>
            </Container>
        </footer>
    );
}

export { Footer };