import React, { useState } from 'react';
import { motion } from 'framer-motion';

// --- Main Hero Component ---
const App = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  // --- Animation Variants for a simple, elegant fade-in ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.4, delayChildren: 0.2 }
    },
  };

  const itemVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" as const }
    },
  };

  const boxVariants = {
    hidden: {
      scale: 0.8,
      opacity: 0,
      rotateX: 45,
      y: 100
    },
    visible: {
      scale: 1,
      opacity: 1,
      rotateX: 0,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
        type: "spring" as const,
        stiffness: 100,
        damping: 15
      }
    },
  };



  return (
    // Main section with the dark theme and layout structure
    <motion.section 
      className="relative flex items-center justify-center w-screen h-screen overflow-hidden bg-[#0a0a0a] font-sans select-none"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* 1. Giant Background Text "Hello" with glow effect */}
      <motion.div
        className="absolute text-[45vw] font-black text-[#1a1a1a] z-0"
        aria-hidden="true"
        style={{
          textShadow: '0 5px 15px rgba(0,0,0,0.2), 0 -20px 40px rgba(59, 130, 246, 0.3), 0 -40px 80px rgba(147, 197, 253, 0.2), 0 -60px 120px rgba(219, 234, 254, 0.1)',
          background: 'linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 0%, transparent 30%)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text'
        }}
        variants={itemVariants}
      >
        Hello
      </motion.div>

      {/* 2. Vertical Dividing Line */}
      <div className="absolute left-1/2 top-0 h-full w-px bg-[#333] -translate-x-1/2 z-10"></div>
      
      {/* 3. Central Content Boxes */}
      <div
        className="relative z-20 flex flex-col text-center gap-y-4"
        style={{ perspective: '1000px' }}
      >
        {/* Box for Name */}
        <motion.div
          className="bg-white text-black py-4 px-10 shadow-lg cursor-pointer"
          variants={boxVariants}
          whileHover={{
            scale: 1.05,
            rotateY: 5,
            z: 20,
            boxShadow: "0 20px 40px rgba(255,255,255,0.2)",
            transition: { duration: 0.3, ease: "easeOut" }
          }}
          whileTap={{
            scale: 0.98,
            transition: { duration: 0.1 }
          }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          <motion.h1
            className="text-xl font-bold tracking-widest uppercase text-[#333]"
            whileHover={{
              textShadow: "0 0 20px rgba(59, 130, 246, 0.5)",
              color: "#1a1a1a"
            }}
          >
            Akash Singh
          </motion.h1>
        </motion.div>

        {/* Box for Title */}
        <motion.div
          className="bg-white text-black py-4 px-10 shadow-lg cursor-pointer"
          variants={boxVariants}
          whileHover={{
            scale: 1.05,
            rotateY: -5,
            z: 20,
            boxShadow: "0 20px 40px rgba(255,255,255,0.2)",
            transition: { duration: 0.3, ease: "easeOut" }
          }}
          whileTap={{
            scale: 0.98,
            transition: { duration: 0.1 }
          }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          <motion.p
            className="text-sm font-medium tracking-[0.15em] uppercase text-[#333]"
            whileHover={{
              textShadow: "0 0 20px rgba(16, 185, 129, 0.5)",
              color: "#1a1a1a"
            }}
          >
            Full Stack Developer
          </motion.p>
        </motion.div>

        {/* Download Resume Button */}
        <motion.div
          className="mt-8"
          variants={boxVariants}
        >
          <motion.button
            className="bg-black text-white py-4 px-10 shadow-lg cursor-pointer border-2 border-white/20 hover:border-white/40 transition-colors duration-300"
            whileHover={{
              scale: 1.05,
              rotateY: -3,
              z: 15,
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
              backgroundColor: "#1a1a1a",
              borderColor: "rgba(255, 255, 255, 0.6)",
              transition: { duration: 0.3, ease: "easeOut" }
            }}
            whileTap={{
              scale: 0.98,
              transition: { duration: 0.1 }
            }}
            onClick={async () => {
              if (isDownloading) return;

              setIsDownloading(true);

              try {
                // Create a temporary link element to trigger download
                const link = document.createElement('a');
                link.href = '/Akash_Resume_SDE.pdf'; // Path to resume in public folder
                link.download = 'Akash_Singh_Resume.pdf';
                link.target = '_blank'; // Open in new tab as fallback
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);

                // Optional: Add analytics or feedback here
                console.log('Resume download initiated');

                // Brief delay to show feedback
                setTimeout(() => setIsDownloading(false), 1500);
              } catch (error) {
                console.error('Download failed:', error);
                // Fallback: open in new tab
                window.open('/resume/Akash_Singh_Resume.pdf', '_blank');
                setIsDownloading(false);
              }
            }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <motion.span
              className="flex items-center justify-center gap-3 text-sm font-bold tracking-[0.15em] uppercase"
              whileHover={{
                textShadow: "0 0 20px rgba(255, 255, 255, 0.4)",
                color: "#ffffff"
              }}
            >
              {isDownloading ? (
                <>
                  <motion.svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </motion.svg>
                  Downloading...
                </>
              ) : (
                <>
                  <motion.svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    whileHover={{
                      y: [0, -2, 0],
                      transition: { duration: 0.6, repeat: Infinity }
                    }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </motion.svg>
                  Download Resume
                </>
              )}
            </motion.span>
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default App;

