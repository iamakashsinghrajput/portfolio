"use client"

import React from 'react';
import { Button } from '@/src/components/ui/button';
import { Container } from '@/src/components/ui/container';

const Hero = () => {

    return (
        <section aria-labelledby="hero-heading"
        className="bg-[#133E87] sticky inset-0 flex h-screen w-full flex-col justify-center py-28 z-0">
            <Container>
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-[#F3F3E0] text-balance text-center text-4xl font-bold text-neutrals-50 sm:text-5xl/tight md:text-7xl lg:text-8xl/tight">
                        Akash Singh <br/> Full Stack Developer
                    </h1>
                    <div className="mt-12 flex items-stretch gap-x-6 gap-y-3 max-sm:flex-col sm:items-center">
                        <Button
                        as="a"
                        href="/#work"
                        background="primary"
                        size="large"
                        className='bg-[#F3F3E0] text-[#133E87] hover:bg-[#133E87] hover:text-[#F3F3E0]'
                        >
                            Dig into my universe
                        </Button>
                        <Button
                        as="a"
                        href="/AKASH_SDE.pdf"
                        background="primary"
                        size="large"
                        download
                        isGhost
                        className='text-[#F3F3E0] bg-[#133E87] hover:bg-[#F3F3E0] hover:text-[#133E87]'
                        >
                            Download My Resume
                        </Button>
                    </div>
                </div>
            </Container>
        </section>
    )
};

export default Hero;
