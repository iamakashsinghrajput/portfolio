"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface LoaderProps {
  onLoadingComplete?: () => void;
}

const Loader: React.FC<LoaderProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [displayProgress, setDisplayProgress] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  // Mount effect to ensure client-side rendering
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    let currentProgress = 0;
    let intervalId: NodeJS.Timeout;

    const updateProgress = () => {
      if (currentProgress < 95) {
        // Normal speed until 95%
        currentProgress += Math.random() * 2 + 0.5;
        setProgress(Math.min(currentProgress, 95));
        intervalId = setTimeout(updateProgress, 80);
      } else if (currentProgress < 100) {
        // Slower from 95% to 100%
        currentProgress += Math.random() * 0.5 + 0.1;
        setProgress(Math.min(currentProgress, 100));
        intervalId = setTimeout(updateProgress, 200);
      }

      if (currentProgress >= 100) {
        setProgress(100);
        setIsComplete(true);
        setTimeout(() => {
          onLoadingComplete?.();
        }, 800);
        return;
      }
    };

    // Start the progress immediately
    updateProgress();

    return () => {
      if (intervalId) {
        clearTimeout(intervalId);
      }
    };
  }, [onLoadingComplete, isMounted]);

  // Smooth counter animation for displayed percentage
  useEffect(() => {
    // Only run on client to avoid hydration issues
    if (typeof window === 'undefined') return;

    const duration = 150; // Animation duration in ms
    const startTime = Date.now();
    const startValue = displayProgress;
    const targetValue = progress;

    const updateDisplay = () => {
      const elapsed = Date.now() - startTime;
      const progressRatio = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);
      const easedProgress = easeOut(progressRatio);

      const currentValue = startValue + (targetValue - startValue) * easedProgress;
      setDisplayProgress(currentValue);

      if (progressRatio < 1) {
        requestAnimationFrame(updateDisplay);
      }
    };

    if (Math.abs(targetValue - startValue) > 0.1) {
      requestAnimationFrame(updateDisplay);
    } else {
      setDisplayProgress(targetValue);
    }
  }, [progress, displayProgress]);

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: { duration: 0.8, ease: "easeInOut" }
      }}
    >
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/10 rounded-full"
            style={{
              left: `${(i * 17) % 100}%`,
              top: `${(i * 23) % 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 3 + (i % 3),
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Central ambient glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      {/* Loading Text - Top Left */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{
          opacity: 1,
          x: 0,
          transition: {
            duration: 1,
            ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
            delay: 0.2
          }
        }}
        className="absolute top-8 left-8 sm:top-12 sm:left-12 z-10"
      >
        <motion.h2
          className="text-3xl sm:text-4xl md:text-6xl font-bold text-white leading-tight"
          animate={{
            opacity: [1, 0.7, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <motion.span
            className="block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Akash Studios
          </motion.span>
          <motion.span
            className="block text-xl sm:text-2xl md:text-4xl font-light text-white/70 mt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            is loading...
          </motion.span>
        </motion.h2>

        {/* Loading dots animation */}
        <motion.div
          className="flex gap-1 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-2 h-2 bg-white rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 1, 0.3]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: index * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>
      </motion.div>

      {/* Progress Percentage - Bottom Right */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{
          opacity: 1,
          x: 0,
          transition: {
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
            delay: 0.7
          }
        }}
        className="absolute bottom-8 right-8 sm:bottom-12 sm:right-12 lg:bottom-16 lg:right-16"
      >
        <motion.div
          className="relative"
          animate={{
            opacity: isComplete ? 0 : 1,
            scale: isComplete ? 0.8 : 1,
            transition: { duration: 0.3 }
          }}
        >
          {/* Background glow effect */}
          <motion.div
            className="absolute inset-0 text-7xl sm:text-8xl md:text-9xl lg:text-[12rem] font-black text-white/20 blur-xl"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {isMounted ? Math.round(displayProgress).toString().padStart(2, '0') : '00'}%
          </motion.div>

          {/* Main percentage text */}
          <motion.span
            className="relative text-7xl sm:text-8xl md:text-9xl lg:text-[12rem] font-black text-white font-mono tracking-tighter"
            style={{
              textShadow: "0 0 30px rgba(255,255,255,0.5), 0 0 60px rgba(255,255,255,0.3)",
              fontWeight: 900
            }}
            animate={{
              textShadow: [
                "0 0 30px rgba(255,255,255,0.5), 0 0 60px rgba(255,255,255,0.3)",
                "0 0 40px rgba(59,130,246,0.6), 0 0 80px rgba(59,130,246,0.4)",
                "0 0 30px rgba(255,255,255,0.5), 0 0 60px rgba(255,255,255,0.3)"
              ]
            }}
            transition={{
              textShadow: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          >
            {isMounted ? Math.round(displayProgress).toString().padStart(2, '0') : '00'}%
          </motion.span>
        </motion.div>
      </motion.div>

      {/* Enhanced Progress Bar - Bottom of screen */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { delay: 1, duration: 0.8 }
        }}
        className="absolute bottom-0 left-0 w-full h-1 bg-white/5"
      >
        {/* Background glow */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-white/20 blur-sm"
          animate={{
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Main progress bar */}
        <motion.div
          className="relative h-full bg-gradient-to-r from-blue-400 via-white to-blue-200 shadow-lg"
          initial={{ width: "0%" }}
          animate={{
            width: `${progress}%`,
            transition: {
              duration: 0.3,
              ease: "easeOut"
            }
          }}
        >
          {/* Progress bar glow effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-400 to-white blur-sm opacity-50"
            animate={{
              opacity: [0.3, 0.7, 0.3]
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>

        {/* Progress indicator dot */}
        <motion.div
          className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg"
          style={{
            boxShadow: "0 0 20px rgba(255,255,255,0.8), 0 0 40px rgba(59,130,246,0.6)"
          }}
          animate={{
            left: `${progress}%`,
            scale: [1, 1.2, 1],
            transition: {
              left: { duration: 0.3, ease: "easeOut" },
              scale: { duration: 1, repeat: Infinity, ease: "easeInOut" }
            }
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default Loader;