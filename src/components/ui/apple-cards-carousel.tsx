/* eslint-disable react-hooks/exhaustive-deps */
import React, {
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
} from "react";
import {
  IconArrowNarrowLeft,
  IconArrowNarrowRight,
  IconX,
} from "@tabler/icons-react";
import { cn } from "@/src/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image, { ImageProps, StaticImageData } from "next/image";
import { useOutsideClick } from "@/src/hooks/use-outside-click";
import { JSX } from "react/jsx-runtime";

interface CarouselProps {
    items: JSX.Element[];
    initialScroll?: number;
}

type Card = {
    src: string | StaticImageData;
    title: string;
    category: string;
    content: React.ReactNode;
};

export const CarouselContext = createContext<{
    onCardClose: (index: number) => void;
}>({
    onCardClose: () => {},
});

export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
    const carouselRef = React.useRef<HTMLDivElement | null>(null);
    const [canScrollLeft, setCanScrollLeft] = React.useState(false);
    const [canScrollRight, setCanScrollRight] = React.useState(true);

    useEffect(() => {
        if (carouselRef.current) {
        carouselRef.current.scrollLeft = initialScroll;
        checkScrollability();
        }
    }, [initialScroll]);

    const checkScrollability = () => {
        if (carouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        setCanScrollLeft(scrollLeft > 0);
        setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
        }
    };

    const scrollLeft = () => {
        if (carouselRef.current) {
        carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
        carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
        }
    };

    const handleCardClose = (index: number) => {
        if (carouselRef.current) {
        const cardWidth = isMobile() ? 230 : 384;
        const gap = isMobile() ? 16 : 32;
        const scrollPosition = (cardWidth + gap) * index;
        const targetScroll = Math.max(0, scrollPosition - (isMobile() ? 16 : 32));

        carouselRef.current.scrollTo({
            left: targetScroll,
            behavior: "smooth",
        });
        }
    };

    const isMobile = () => {
        return typeof window !== 'undefined' && window.innerWidth < 768;
    };

    return (
        <CarouselContext.Provider value={{ onCardClose: handleCardClose }}>
        <div className="relative w-full">
            <div
            className="flex w-full overflow-x-scroll overscroll-x-auto py-10 md:py-20 scroll-smooth [scrollbar-width:none]"
            ref={carouselRef}
            onScroll={checkScrollability}
            >

            <div
                className={cn(
                "flex flex-row justify-start gap-4 md:gap-8 pl-4",
                "max-w-7xl mx-auto"
                )}
            >
                {items.map((item, index) => (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: 0.5,
                        delay: 0.2 * index,
                        ease: "easeOut",
                    },
                    }}
                    key={`carousel-item-${index}`}
                    className="flex-shrink-0 rounded-3xl"
                >
                    {item}
                </motion.div>
                ))}
                 <div className="flex-shrink-0 w-4 md:w-[calc(33%-1rem)]" />
            </div>
            </div>
            <div className="flex justify-end gap-2 mr-4 md:mr-10 mt-[-2rem] md:mt-[-3rem] relative z-40">
            <button
                aria-label="Scroll left"
                className="h-10 w-10 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center disabled:opacity-50 text-gray-500 dark:text-neutral-400 hover:bg-gray-200 dark:hover:bg-neutral-700 transition-colors"
                onClick={scrollLeft}
                disabled={!canScrollLeft}
            >
                <IconArrowNarrowLeft className="h-6 w-6" />
            </button>
            <button
                aria-label="Scroll right"
                className="h-10 w-10 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center disabled:opacity-50 text-gray-500 dark:text-neutral-400 hover:bg-gray-200 dark:hover:bg-neutral-700 transition-colors"
                onClick={scrollRight}
                disabled={!canScrollRight}
            >
                <IconArrowNarrowRight className="h-6 w-6" />
            </button>
            </div>
        </div>
        </CarouselContext.Provider>
    );
    };


export const Card = ({
  card,
  index,
  layout = false,
}: {
  card: Card;
  index: number;
  layout?: boolean;
}) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { onCardClose } = useContext(CarouselContext);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        handleClose();
      }
    }

    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useOutsideClick(containerRef, () => {
    if(open) handleClose();
  });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    onCardClose(index);
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 h-screen z-50 overflow-auto mt-16">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-black/80 backdrop-blur-lg h-full w-full fixed inset-0"
              aria-hidden="true"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              ref={containerRef}
              layoutId={layout ? `card-${card.title}` : undefined}
              className="max-w-5xl mx-auto bg-white dark:bg-neutral-900 h-fit z-[60] my-10 p-4 md:p-10 rounded-3xl font-sans relative"
              role="dialog"
              aria-modal="true"
              aria-labelledby={layout ? `title-${card.title}` : undefined}
            >
              <button
                aria-label="Close card details"
                className="sticky top-4 h-8 w-8 right-4 ml-auto bg-black dark:bg-white rounded-full flex items-center justify-center z-10"
                onClick={handleClose}
              >
                <IconX className="h-6 w-6 text-neutral-100 dark:text-neutral-900" />
              </button>
              <div className="relative mt-[-2rem]">
                <motion.p
                  layoutId={layout ? `category-${card.title}` : undefined}
                  className="text-base font-medium text-black dark:text-white"
                >
                  {card.category}
                </motion.p>
                <motion.p
                  id={layout ? `title-${card.title}` : undefined}
                  layoutId={layout ? `title-${card.title}` : undefined}
                  className="text-2xl md:text-5xl font-semibold text-neutral-700 mt-4 dark:text-white"
                >
                  {card.title}
                </motion.p>
                <div className="py-10">{card.content}</div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <motion.button
        layoutId={layout ? `card-${card.title}` : undefined}
        onClick={handleOpen}
        className="group rounded-3xl bg-gray-100 dark:bg-neutral-900 h-80 w-56 md:h-[40rem] md:w-96 overflow-hidden flex flex-col items-start justify-start relative z-10 cursor-pointer"
        aria-label={`View details for ${card.title}`}
      >
        <div
          className={cn(
            "absolute inset-0 z-20 p-8",
            "bg-black/60 backdrop-blur-md",
            "flex flex-col items-start justify-end",
            "opacity-0 group-hover:opacity-100",
            "transition-opacity duration-300 ease-in-out pointer-events-none" 
          )}
          aria-hidden="true"
        >
          <motion.p
            layoutId={layout ? `category-${card.category}-${index}` : undefined}
            className="text-white text-sm md:text-base font-medium font-sans text-left"
          >
            {card.category}
          </motion.p>
          <motion.p
            layoutId={layout ? `title-${card.title}-${index}` : undefined} 
            className="text-white text-xl md:text-3xl font-semibold max-w-xs text-left [text-wrap:balance] font-sans mt-2"
          >
            {card.title}
          </motion.p>
        </div>

        <BlurImage
          src={card.src}
          alt={card.title}
          fill
          className="object-cover absolute z-10 inset-0"
        />
      </motion.button>
    </>
  );
};

export const BlurImage = ({
  height,
  width,
  src,
  className,
  alt,
  ...rest
}: ImageProps) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <Image
      className={cn(
        "transition duration-300",
        isLoading ? "blur-sm scale-105" : "blur-0 scale-100",
        className
      )}
      onLoad={() => setLoading(false)}
      src={src}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      alt={alt || "Carousel image"}
      {...rest}
    />
  );
};
