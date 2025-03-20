import { Container } from '@/src/components/ui/container';
import { Caption, Heading } from '@/src/components/ui/typography';
import { AppleCardsCarouselDemo } from '../applecardcarouseldemo';

const Work = () =>{
    return(
        <section id="work" aria-labelledby="work-heading"
        className="h-full py-20 relative z-20 w-full lg:border-t-0.5 lg:border-neutrals-600 lg:before:hidden lg:after:hidden"
        >
        <Container className=''>
            <div className="bg-black flex flex-col items-center text-center">
                <Caption id="work-heading" className='text-[#6919ff]'>
                    Work
                </Caption>
                <Heading className='text-white text-center'>Dig into my universe</Heading>
            </div>
        </Container>
        <AppleCardsCarouselDemo />
        <br/>
        <br/>
        <hr className="h-px border-0 bg-gradient-to-r from-transparent via-[#807f8076] to-transparent" />
        </section>
    )
};

export default Work;  // Export the component as the default export
