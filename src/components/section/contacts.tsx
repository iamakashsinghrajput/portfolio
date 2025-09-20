"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '@/src/components/ui/container';
import { Caption, Heading, Paragraph } from '@/src/components/ui/typography';
import { Input } from '@/src/components/ui/input';
import { Textarea } from '@/src/components/ui/textarea';
import { Button } from '@/src/components/ui/button';
import { IconMail, IconLoader, IconSend, IconAlertCircle } from '@tabler/icons-react';

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
    const [company, setCompany] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [fieldErrors, setFieldErrors] = useState<{[key: string]: string}>({});
    const [focusedField, setFocusedField] = useState<string | null>(null);

    const getBorderColor = (fieldName: string, value: string) => {
        if (fieldErrors[fieldName]) {
            return 'border-red-500 focus:border-red-500';
        }
        if (focusedField === fieldName) {
            return 'border-[#6919ff] focus:border-[#6919ff]';
        }
        if (value.trim()) {
            return 'border-[#6919ff] focus:border-[#6919ff]';
        }
        return 'border-neutral-600/50 focus:border-[#6919ff]';
    };

    const handleFieldBlur = (fieldName: string, value: string) => {
        const newErrors = { ...fieldErrors };

        if (!value.trim()) {
            const fieldDisplayName = fieldName === 'message' ? 'How can we help you' : fieldName.charAt(0).toUpperCase() + fieldName.slice(1);
            newErrors[fieldName] = `${fieldDisplayName} cannot be empty`;
        } else {
            delete newErrors[fieldName];
        }

        if (fieldName === 'email' && value.trim() && !/\S+@\S+\.\S+/.test(value)) {
            newErrors.email = 'Please enter a valid email address';
        }

        setFieldErrors(newErrors);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFieldErrors({});

        const errors: {[key: string]: string} = {};

        if (!company.trim()) errors.company = 'Company cannot be empty';
        if (!name.trim()) errors.name = 'Name cannot be empty';
        if (!email.trim()) {
            errors.email = 'Email cannot be empty';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = 'Please enter a valid email address';
        }
        if (!message.trim()) errors.message = 'How can we help you cannot be empty';
        if (message.length > 1800) errors.message = 'Message cannot exceed 1800 characters';

        if (Object.keys(errors).length > 0) {
            setFieldErrors(errors);
            setStatus('error');
            return;
        }

        setStatus('loading');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ company, name, email, message }),
            });

            const result = await response.json();

            if (response.ok) {
                setStatus('success');
                setCompany('');
                setName('');
                setEmail('');
                setMessage('');
            } else {
                setStatus('error');
                setFieldErrors({ general: result.error || 'An unexpected error occurred. Please try again.' });
            }
        } catch (error) {
            console.error("Contact form submission error:", error);
            setStatus('error');
            setFieldErrors({ general: 'Network error. Please check your connection and try again.' });
        }
    };

    return (
        <section id="contact" aria-labelledby="contact-heading" className="bg-[#0a0118] text-white py-20 md:py-32 overflow-hidden">
             <Container className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start justify-between relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                    <Caption id="contact-heading" className="text-[#6919ff] mb-3 inline-block px-3 py-1 rounded-full bg-[#6919ff]/30">
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
                            <motion.div
                                key="contact-form"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="relative"
                            >
                                <form onSubmit={handleSubmit} className="space-y-8">
                                    {/* Company Field */}
                                    <div className="relative">
                                        <label
                                            htmlFor="company"
                                            className="block text-lg font-medium text-white mb-3"
                                        >
                                            Company
                                        </label>
                                        <motion.div
                                            className="relative"
                                            animate={{
                                                boxShadow: focusedField === 'company'
                                                    ? '0 0 20px rgba(105, 25, 255, 0.4), 0 0 40px rgba(105, 25, 255, 0.2)'
                                                    : '0 0 0px rgba(105, 25, 255, 0)'
                                            }}
                                            transition={{ duration: 0.3 }}
                                            style={{ borderRadius: '2px' }}
                                        >
                                            <Input
                                                type="text"
                                                id="company"
                                                name="company"
                                                value={company}
                                                onChange={(e) => setCompany(e.target.value)}
                                                onFocus={() => setFocusedField('company')}
                                                onBlur={() => {
                                                    setFocusedField(null);
                                                    handleFieldBlur('company', company);
                                                }}
                                                className={`w-full bg-neutral-800/70 border text-white px-8 py-6 text-xl rounded-sm focus:outline-none focus:ring-2 focus:ring-[#6919ff]/40 transition-all duration-300 ${getBorderColor('company', company)}`}
                                            />
                                        </motion.div>
                                        {fieldErrors.company && (
                                            <motion.p
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className="text-red-400 text-sm mt-2 flex items-center gap-2"
                                            >
                                                <IconAlertCircle size={16} />
                                                {fieldErrors.company}
                                            </motion.p>
                                        )}
                                    </div>

                                    {/* Name Field */}
                                    <div className="relative">
                                        <label
                                            htmlFor="name"
                                            className="block text-lg font-medium text-white mb-3"
                                        >
                                            Name
                                        </label>
                                        <motion.div
                                            className="relative"
                                            animate={{
                                                boxShadow: focusedField === 'name'
                                                    ? '0 0 20px rgba(105, 25, 255, 0.4), 0 0 40px rgba(105, 25, 255, 0.2)'
                                                    : '0 0 0px rgba(105, 25, 255, 0)'
                                            }}
                                            transition={{ duration: 0.3 }}
                                            style={{ borderRadius: '2px' }}
                                        >
                                            <Input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                onFocus={() => setFocusedField('name')}
                                                onBlur={() => {
                                                    setFocusedField(null);
                                                    handleFieldBlur('name', name);
                                                }}
                                                className={`w-full bg-neutral-800/70 border text-white px-8 py-6 text-xl rounded-sm focus:outline-none focus:ring-2 focus:ring-[#6919ff]/40 transition-all duration-300 ${getBorderColor('name', name)}`}
                                            />
                                        </motion.div>
                                        {fieldErrors.name && (
                                            <motion.p
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className="text-red-400 text-sm mt-2 flex items-center gap-2"
                                            >
                                                <IconAlertCircle size={16} />
                                                {fieldErrors.name}
                                            </motion.p>
                                        )}
                                    </div>

                                    {/* Email Field */}
                                    <div className="relative">
                                        <label
                                            htmlFor="email"
                                            className="block text-lg font-medium text-white mb-3"
                                        >
                                            Email
                                        </label>
                                        <motion.div
                                            className="relative"
                                            animate={{
                                                boxShadow: focusedField === 'email'
                                                    ? '0 0 20px rgba(105, 25, 255, 0.4), 0 0 40px rgba(105, 25, 255, 0.2)'
                                                    : '0 0 0px rgba(105, 25, 255, 0)'
                                            }}
                                            transition={{ duration: 0.3 }}
                                            style={{ borderRadius: '2px' }}
                                        >
                                            <Input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                onFocus={() => setFocusedField('email')}
                                                onBlur={() => {
                                                    setFocusedField(null);
                                                    handleFieldBlur('email', email);
                                                }}
                                                className={`w-full bg-neutral-800/70 border text-white px-8 py-6 text-xl rounded-sm focus:outline-none focus:ring-2 focus:ring-[#6919ff]/40 transition-all duration-300 ${getBorderColor('email', email)}`}
                                            />
                                        </motion.div>
                                        {fieldErrors.email && (
                                            <motion.p
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className="text-red-400 text-sm mt-2 flex items-center gap-2"
                                            >
                                                <IconAlertCircle size={16} />
                                                {fieldErrors.email}
                                            </motion.p>
                                        )}
                                    </div>

                                    {/* Message Field */}
                                    <div className="relative">
                                        <label
                                            htmlFor="message"
                                            className="block text-lg font-medium text-white mb-3"
                                        >
                                            How can we help you?
                                            <span className="text-neutral-400 text-sm ml-2 font-normal">
                                                {message.length}/1800 characters
                                            </span>
                                        </label>
                                        <motion.div
                                            className="relative"
                                            animate={{
                                                boxShadow: focusedField === 'message'
                                                    ? '0 0 20px rgba(105, 25, 255, 0.4), 0 0 40px rgba(105, 25, 255, 0.2)'
                                                    : '0 0 0px rgba(105, 25, 255, 0)'
                                            }}
                                            transition={{ duration: 0.3 }}
                                            style={{ borderRadius: '2px' }}
                                        >
                                            <Textarea
                                                id="message"
                                                name="message"
                                                rows={8}
                                                value={message}
                                                onChange={(e) => setMessage(e.target.value)}
                                                onFocus={() => setFocusedField('message')}
                                                onBlur={() => {
                                                    setFocusedField(null);
                                                    handleFieldBlur('message', message);
                                                }}
                                                maxLength={1800}
                                                className={`w-full bg-neutral-800/70 border text-white px-8 py-6 text-xl rounded-sm focus:outline-none focus:ring-2 focus:ring-[#6919ff]/40 transition-all duration-300 resize-none ${getBorderColor('message', message)}`}
                                            />
                                        </motion.div>
                                        {fieldErrors.message && (
                                            <motion.p
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className="text-red-400 text-sm mt-2 flex items-center gap-2"
                                            >
                                                <IconAlertCircle size={16} />
                                                {fieldErrors.message}
                                            </motion.p>
                                        )}
                                    </div>

                                    {/* General Error Message */}
                                    {fieldErrors.general && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10, scale: 0.95 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            className="bg-red-500/10 border border-red-500/20 rounded-sm p-4"
                                        >
                                            <p className="text-red-400 text-sm flex items-center gap-2">
                                                <IconAlertCircle size={16} />
                                                {fieldErrors.general}
                                            </p>
                                        </motion.div>
                                    )}

                                    {/* Submit Section */}
                                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-6">
                                        <motion.a
                                            href="mailto:akash21052000singh@gmail.com"
                                            className="flex items-center gap-3 text-neutral-400 hover:text-white transition-all duration-300 text-sm group"
                                            whileHover={{ x: 5 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <div className="p-2 rounded-full bg-neutral-800 group-hover:bg-[#6919ff]/20 transition-colors duration-300">
                                                <IconMail size={16} className="group-hover:text-[#fff] transition-colors duration-300" />
                                            </div>
                                            <span className="group-hover:text-[#fff] transition-colors duration-300">hello@akashstudios.com</span>
                                        </motion.a>

                                        <Button
                                            type="submit"
                                            disabled={status === 'loading'}
                                            className="group relative overflow-hidden bg-white text-[#0a0118] px-8 py-3 rounded-sm font-semibold transition-all duration-700 ease-out disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0a0118] focus:ring-white hover:scale-105"
                                        >
                                            <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-700">
                                                {status === 'loading' ? (
                                                    <>
                                                        <IconLoader size={18} className="animate-spin" />
                                                        <span>Sending...</span>
                                                    </>
                                                ) : (
                                                    <>
                                                        <span>Hit us up</span>
                                                        <IconSend size={18} className="transform -rotate-45 group-hover:rotate-0 transition-transform duration-700" />
                                                    </>
                                                )}
                                            </span>
                                            <div className="absolute inset-0 bg-gradient-to-r from-[#6919ff] to-[#8b5cf6] transform -translate-x-full rotate-12 group-hover:translate-x-0 group-hover:rotate-0 transition-all duration-700 ease-out"></div>
                                        </Button>
                                    </div>
                                </form>
                            </motion.div>
                         )}
                     </AnimatePresence>
                 </motion.div>
             </Container>
        </section>
    );
};

export default ContactSection;
