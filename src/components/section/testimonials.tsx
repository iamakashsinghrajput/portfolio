import React from "react";
import { Container } from '@/src/components/ui/container';
import { Caption, Heading, Paragraph } from '@/src/components/ui/typography';
import { InfiniteMovingCardsDemo } from "../infinitemovingcardsdemo";

const Testimonials = () => {
    return (
        <section id="stories" aria-labelledby="stories-heading" className="h-full py-12 relative z-20 w-full lg:border-t-0.5 lg:border-neutrals-600 lg:before:hidden lg:after:hidden">
            <hr className="h-px border-0 bg-gradient-to-r from-transparent via-[#807f8076] to-transparent" />
            <Container className='py-28'>
            <div className="bg-black flex flex-col items-center text-center">
                <Caption id="stories-heading" className='text-[#6919ff]'>
                    Customer Stories
                </Caption>
                <Heading className='text-white text-center'>Trusted by the kindest clients</Heading>
                <Paragraph className="text-gray-500">
                    Here&apos;s a glimpse into the heartfelt experiences of our incredible clients.
                    Your trust fuels our passion.
                </Paragraph>
            </div>
            <InfiniteMovingCardsDemo/>
        </Container>
        
        </section>
    )
}

export default Testimonials;