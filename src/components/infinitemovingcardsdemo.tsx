"use client";

import React from 'react';
import { InfiniteMovingCards } from '@/src/components/ui/infinite-moving-cards';

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-transparent dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="normal"
      />
      <InfiniteMovingCards
        items={testimonials}
        direction="left"
        speed="normal"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Akash delivered a high-performance landing page for Thyleads, significantly improving user engagement. His ability to optimize UI, ensure smooth navigation, and maintain cross-device responsiveness showcased his exceptional frontend development skills. A great asset to any team!",
    name: "Rahul Dev",
    title: "Co-Founder Thyleads",
  },
  {
    quote:
      "Akash played a crucial role in enhancing our student enrollment process. His frontend development skills streamlined navigation, improved responsiveness, and created a seamless user experience. His dedication and technical expertise were truly commendable.",
    name: "Vishnuvardhan Y",
    title: "Founder Exposys Data Labs",
  },
  {
    quote:
      "Akash showcased excellent React and Next.js skills, delivering a seamless, high-performance web experience with efficient API integration and responsive design.",
    name: "Ranchit Dixit",
    title: "Senior Developer Techscholars",
  },
];
