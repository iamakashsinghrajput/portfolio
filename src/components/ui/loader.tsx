"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface LoaderProps {
  onLoadingComplete?: () => void;
}

const Loader: React.FC<LoaderProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let currentProgress = 0;
    let intervalId: NodeJS.Timeout;

    const updateProgress = () => {
      if (currentProgress < 97) {
        // Normal speed until 97%
        currentProgress += Math.random() * 3 + 1;
        intervalId = setTimeout(updateProgress, 100);
      } else if (currentProgress < 100) {
        // Much slower from 97% to 100%
        currentProgress += Math.random() * 0.3 + 0.1;
        intervalId = setTimeout(updateProgress, 300); // Slower updates
      }

      if (currentProgress >= 100) {
        currentProgress = 100;
        setProgress(100);
        setIsComplete(true);

        setTimeout(() => {
          onLoadingComplete?.();
        }, 500);
        return;
      }

      setProgress(currentProgress);
    };

    // Start the progress
    intervalId = setTimeout(updateProgress, 100);

    return () => clearTimeout(intervalId);
  }, [onLoadingComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black"
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: { duration: 0.8, ease: "easeInOut" }
      }}
    >
      {/* Loading Text - Top Left */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{
          opacity: 1,
          x: 0,
          transition: {
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
            delay: 0.3
          }
        }}
        className="absolute top-8 left-8 sm:top-12 sm:left-12"
      >
        <h2 className="text-4lg sm:text-4xl md:text-6xl font-medium text-white">
          Akash Studios is loading...
        </h2>
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
        className="absolute bottom-8 right-8 sm:bottom-12 sm:right-12"
      >
        <motion.span
          className="text-8xl sm:text-9xl md:text-9xl font-light text-white font-mono"
          animate={{
            opacity: isComplete ? 0 : 1,
            transition: { duration: 0.3 }
          }}
        >
          {Math.round(progress)}%
        </motion.span>
      </motion.div>

      {/* Subtle Progress Bar - Bottom of screen */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1, duration: 0.6 }
        }}
        className="absolute bottom-0 left-0 w-full h-0.5 bg-white/10"
      >
        <motion.div
          className="h-full bg-white"
          initial={{ width: "0%" }}
          animate={{
            width: `${progress}%`,
            transition: {
              duration: 0.5,
              ease: "easeOut"
            }
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default Loader;