"use client"

import akashtudiosLogoImage from '@/src/assets/lokkeestudios.svg';
import uparrow from '@/src/assets/uparrow.svg';
import Image from 'next/image';
import { Container } from '@/src/components/ui/container';
import { useState } from 'react';
import Contacts from '../section/contacts';

const primaryLinks = [
  {
    label: 'About',
    href: '/#about',
  },
  {
    label: 'Work',
    href: '/#work',
  },
  {
    label: 'Reviews',
    href: '/#socials',
  },
] as const;


function Footer() {
  const [currentYear] = useState(() => new Date().getFullYear());

  return (
    <footer
      aria-label="Primary"
      className="relative z-10 w-full border-t-0.5 border-neutrals-600 bg-neutrals-900 py-3"
    >
      <Container>
      <hr className="h-px border-0 bg-gradient-to-r from-transparent via-[#807f8076] to-transparent" />
        <div className="flex justify-center py-12">
          <a
            href="#"
            title="Navigate home"
            data-astro-prefetch
          >
            <Image
              src={akashtudiosLogoImage}
              alt="AKASH STUDIOS"
              className="h-16 w-16"
            />
          </a>
        </div>
        <hr className="h-px border-0 bg-gradient-to-r from-transparent via-[#807f8076] to-transparent" />
        <nav
          aria-label="Primary"
          className="flex flex-wrap justify-center gap-6 py-12"
        >
          {primaryLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-astro-prefetch
              className="text-gray-400 text-sm uppercase text-neutrals-300 transition-colors hover:text-neutrals-50 focus-visible:text-neutrals-50"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <hr className="h-px border-0 bg-gradient-to-r from-transparent via-[#807f8076] to-transparent" />
        <div className="grid grid-cols-1 items-center justify-center gap-6 py-12 lg:grid-cols-3">
        <nav
            aria-label="Secondary"
            className="flex flex-wrap justify-center gap-6 lg:order-last lg:justify-end"
          >
            <a href='#' className='text-gray-400 bg-white rounded-full'>
              <Image src={uparrow} alt='uparrow' className='w-16 h-16'/>
            </a>
            
          </nav>
          <ul
            aria-label="Socials"
            className="flex flex-wrap justify-center items-center gap-2"
          >
            <Contacts/>
          </ul>
          <div className="flex justify-center lg:order-first lg:justify-start">
            <small className="text-xs text-neutrals-300 text-gray-500">&copy; {currentYear} AKASH STUDIOS</small>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export { Footer };
