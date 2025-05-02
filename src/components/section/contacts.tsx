"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '@/src/components/ui/container';
import { Caption, Heading, Paragraph } from '@/src/components/ui/typography';
import { Input } from '@/src/components/ui/input';
import { Textarea } from '@/src/components/ui/textarea';
import { Button } from '@/src/components/ui/button';
import { IconMail, IconLoader, IconSend } from '@tabler/icons-react';

const PaperPlaneIcon = () => (
    <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 md:w-28 md:h-28 text-white transform rotate-[20deg]">
        <motion.path
            d="M98.9999 1.00008L1.00008 43.8637L46.1364 53.8637L56.1364 98.9999L98.9999 1.00008Z"
            stroke="currentColor"
            strokeWidth="2"
            initial={{ pathLength: 0, pathOffset: 1 }}
            animate={{ pathLength: 1, pathOffset: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
        />
    </svg>
);

const DottedLine = () => (
  <svg width="150" height="80" viewBox="0 0 150 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 left-0 transform -translate-x-1/4 translate-y-1/4 -rotate-[15deg] text-[#6919ff] opacity-70">
    <motion.path
      d="M1 79C1 79 26.8467 -8.5 74.5281 20.5C122.209 49.5 149 79 149 79"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeDasharray="4 8"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
    />
  </svg>
);

const ContactSection = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrorMessage('');

        if (!name.trim() || !email.trim() || !message.trim()) {
             setStatus('error');
             setErrorMessage('Please fill in all fields.');
             return;
        }

        if (!/\S+@\S+\.\S+/.test(email)) {
             setStatus('error');
             setErrorMessage('Please enter a valid email address.');
             return;
        }

        setStatus('loading');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, message }),
            });

            const result = await response.json();

            if (response.ok) {
                setStatus('success');
                setName('');
                setEmail('');
                setMessage('');
            } else {
                setStatus('error');
                setErrorMessage(result.error || 'An unexpected error occurred. Please try again.');
            }
        } catch (error) {
            console.error("Contact form submission error:", error);
            setStatus('error');
            setErrorMessage('Network error. Please check your connection and try again.');
        }
    };

    return (
        <section id="contact" aria-labelledby="contact-heading" className="bg-[#0a0118] text-white py-20 md:py-32 overflow-hidden">
             <Container className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                    <Caption id="contact-heading" className="text-[#6919ff] mb-3 inline-block px-3 py-1 rounded-full bg-[#6919ff]/10">
                        CONTACT
                    </Caption>
                    <Heading className="text-4xl md:text-5xl font-bold mb-4">
                        Got a problem to solve?
                    </Heading>
                    <Paragraph className="text-neutral-400 max-w-md">
                        Get your space suit ready and tell us your ideas to develop your dream web solution.
                    </Paragraph>
                </motion.div>

                <motion.div
                    className="relative min-h-[450px]"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
                >
                    <AnimatePresence mode="wait">
                        {status === 'success' ? (
                            <motion.div
                                key="success-message"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.4, ease: 'easeOut' }}
                                className="flex flex-col items-start justify-center h-full relative text-left pt-10"
                            >
                                 <Caption className="text-[#6919ff] mb-14 inline-block px-3 py-1 rounded-full bg-[#6919ff]/10">
                                    SUCCESSFUL
                                </Caption>
                                <Heading className="text-4xl md:text-5xl font-bold mb-4">
                                   We will be in touch with you
                                </Heading>
                                <div className="absolute bottom-[-20px] right-[-20px] md:bottom-0 md:right-0 pointer-events-none">
                                     <DottedLine />
                                     <PaperPlaneIcon />
                                </div>
                            </motion.div>
                        ) : (
                            <motion.form
                                key="contact-form"
                                onSubmit={handleSubmit}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="space-y-5"
                            >
                                 <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-1.5">Name</label>
                                    <Input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="Your Name"
                                        required
                                        aria-required="true"
                                        aria-describedby={status === 'error' && errorMessage.includes('fields') ? 'error-message' : undefined}
                                        className="w-full bg-[#1a0f2a] border border-[#3a2f4a] text-white rounded-md px-4 py-2.5 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-[#6919ff] focus:border-transparent transition-colors"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-1.5">Email</label>
                                    <Input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="your.email@example.com"
                                        required
                                        aria-required="true"
                                        aria-describedby={status === 'error' && (errorMessage.includes('fields') || errorMessage.includes('valid email')) ? 'error-message' : undefined}
                                        className="w-full bg-[#1a0f2a] border border-[#3a2f4a] text-white rounded-md px-4 py-2.5 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-[#6919ff] focus:border-transparent transition-colors"
                                     />
                                </div>
                                <div>
                                     <label htmlFor="message" className="block text-sm font-medium text-neutral-300 mb-1.5">Message</label>
                                     <Textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        placeholder="Tell us about your project or problem..."
                                        required
                                        aria-required="true"
                                        aria-describedby={status === 'error' && errorMessage.includes('fields') ? 'error-message' : undefined}
                                        className="w-full bg-[#1a0f2a] border border-[#3a2f4a] text-white rounded-md px-4 py-2.5 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-[#6919ff] focus:border-transparent transition-colors resize-none"
                                     />
                                </div>
                                {status === 'error' && errorMessage && (
                                    <motion.p
                                         id="error-message"
                                         role="alert"
                                         initial={{ opacity: 0, y: -10 }}
                                         animate={{ opacity: 1, y: 0 }}
                                         className="text-red-400 text-sm"
                                    >
                                        {errorMessage}
                                    </motion.p>
                                )}
                                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-3">
                                    <a
                                        href="mailto:hello@lokkeestudios.com"
                                        className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors text-sm group"
                                     >
                                         <IconMail size={18} className="group-hover:text-[#6919ff] transition-colors" />
                                         <span>hello@akashstudios.com</span>
                                     </a>
                                    <Button
                                        type="submit"
                                        disabled={status === 'loading'}
                                        className="w-full sm:w-auto bg-white text-[#0a0118] hover:bg-neutral-200 cursor-pointer px-6 py-2.5 rounded-sm flex items-center justify-center gap-2 font-semibold transition-all duration-300 ease-in-out disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0a0118] focus:ring-white"
                                    >
                                         {status === 'loading' ? (
                                             <>
                                                <IconLoader size={18} className="animate-spin" /> Sending...
                                             </>
                                        ) : (
                                             <>
                                                Hit us up <IconSend size={24} className="mt-1 transform -rotate-45 ml-1" />
                                             </>
                                         )}
                                     </Button>
                                </div>
                            </motion.form>
                         )}
                     </AnimatePresence>
                 </motion.div>
             </Container>
        </section>
    );
};

export default ContactSection;
