"use client";

import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Header } from "@/src/components/layout/header";
import Hero from "@/src/components/section/hero";
import About from "@/src/components/section/about";
import Work from "@/src/components/section/work";
import Testimonials from "@/src/components/section/testimonials";
import { Footer } from "@/src/components/layout/footer";
import ContactSection from "../components/section/contacts";
import Loader from "@/src/components/ui/loader";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <Loader onLoadingComplete={handleLoadingComplete} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <section className="w-full">
          <div className="fixed top-0 z-40 w-full">
            <Header />
          </div>

          <div className="sticky top-0 flex max-h-screen w-full flex-col justify-center z-10">
            <Hero />
          </div>

          <div className="relative bg-black z-20">
            <About />
            <Work />
            <Testimonials />
            <ContactSection/>
            <Footer />
          </div>
        </section>
      )}
    </>
  );
}