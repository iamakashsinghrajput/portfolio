import React from "react";
import { Header } from "@/src/components/layout/header";
import Hero  from "@/src/components/section/hero";
import About from "@/src/components/section/about";
import Work from "@/src/components/section/work";
import { GridBackground } from "../components/grid-background";
import Testimonials from "../components/section/testimonials";
import { Footer } from "../components/layout/footer";

export default function Home() {
  return (
    <section className="w-full h-full bg-[#133E87]">
      <div className="sticky w-full h-full z-10">
        <GridBackground/>
      </div>
      <div className="fixed top-0 z-40 w-full">
        <Header/>
      </div>
      <div className="sticky inset-0 flex max-h-screen w-full flex-col justify-center py-28 z-0">
        <Hero/>
      </div>
      <div className="relative bg-black">
        <About/>
        <Work/>
        <Testimonials/>
        <Footer/>
      </div>
    </section>
  );
}
