// import React from "react";
// import { Header } from "@/src/components/layout/header";
// import Hero  from "@/src/components/section/hero";
// import About from "@/src/components/section/about";
// import Work from "@/src/components/section/work";
// import { GridBackground } from "../components/grid-background";
// import Testimonials from "../components/section/testimonials";
// import { Footer } from "../components/layout/footer";

// export default function Home() {
//   return (
//     <section className="w-full h-full bg-[#133E87]">
//       <div className="sticky w-full h-full z-10">
//         <GridBackground/>
//       </div>
//       <div className="fixed top-0 z-40 w-full">
//         <Header/>
//       </div>
//       <div className="sticky inset-0 flex max-h-screen w-full flex-col justify-center py-28 z-0">
//         <Hero/>
//       </div>
//       <div className="relative bg-black">
//         <About/>
//         <Work/>
//         <Testimonials/>
//         <Footer/>
//       </div>
//     </section>
//   );
// }


// app/page.tsx or your home page file
"use client";

import React from "react";
// Removed motion import here if not needed elsewhere on this page
import { Header } from "@/src/components/layout/header";
import Hero from "@/src/components/section/hero"; // Hero now contains GridBackground
import About from "@/src/components/section/about";
import Work from "@/src/components/section/work";
// Removed GridBackground import from here
import Testimonials from "@/src/components/section/testimonials";
import { Footer } from "@/src/components/layout/footer";
import ContactSection from "../components/section/contacts";

export default function Home() {
  return (
    // Consider if this top-level background is still needed, or if Hero/Content define their own.
    // If Hero provides the initial bg, maybe this can be removed or changed.
    <section className="w-full"> {/* Removed bg-[#133E87] if Hero/Content handle BG */}

      {/* --- Header --- */}
      <div className="fixed top-0 z-40 w-full"> {/* Keep header fixed on top */}
        <Header />
      </div>

      {/* --- Hero Section (Now includes Grid Background) --- */}
      {/* This container makes the Hero section sticky. */}
      {/* The Hero component itself handles its internal animation (grid + content). */}
      {/* z-10 keeps it above default content but below Header & scrolled content */}
      <div className="sticky top-0 flex max-h-screen w-full flex-col justify-center z-10">
        <Hero />
      </div>

      {/* --- Main Content Below Hero --- */}
      {/* This content needs to scroll OVER the sticky Hero section */}
      {/* Needs a background color (like bg-black) and higher z-index */}
      <div className="relative bg-black z-20"> {/* z-20 ensures it scrolls over sticky Hero (z-10) */}
        <About />
        <Work />
        <Testimonials />
        <ContactSection/>
        <Footer />
      </div>
    </section>
  );
}