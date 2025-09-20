"use client";

import { cn } from "@/src/lib/utils";
import React, { useEffect, useState } from "react";
import { IconUser } from "@tabler/icons-react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards",
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse",
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "30s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {items.map((item) => (
          <li
            className="relative w-[350px] max-w-full shrink-0 rounded-2xl border-2 border-[#6919ff]/30 bg-gradient-to-br from-[#0a0118] via-[#1a0b2e] to-[#0a0118] px-8 py-6 md:w-[450px] flex flex-col justify-between backdrop-blur-sm shadow-lg hover:border-[#6919ff]/60 transition-all duration-300"
            style={{
              boxShadow: '0 8px 32px rgba(105, 25, 255, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
            }}
            key={item.name}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none pointer-events-none absolute -top-0.5 -left-0.5 -z-1 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              <span className="relative z-20 text-base leading-[1.6] font-normal text-white">
                &ldquo;{item.quote}&rdquo;
              </span>
            </blockquote>
            <div className="relative z-20 mt-6 flex flex-row items-center gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#6919ff] to-[#8b5cf6] flex items-center justify-center shadow-lg border border-[#6919ff]/40">
                <IconUser size={20} className="text-white" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-sm leading-[1.6] font-semibold text-white">
                  {item.name}
                </span>
                <span className="text-sm leading-[1.6] font-normal text-neutral-300">
                  {item.title}
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
