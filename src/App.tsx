/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";

export default function App() {
  return (
    <div
      id="app-root-container"
      className="relative min-h-screen w-full flex flex-col items-center justify-center bg-[#faf8f5] text-[#1a1a1a] font-sans overflow-hidden px-6"
    >
      {/* Decorative Warm Ambient Background Glows */}
      <div
        id="bg-ambient-shadow-top"
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-100/30 rounded-full blur-3xl pointer-events-none"
      />
      <div
        id="bg-ambient-shadow-bottom"
        className="absolute bottom-1/4 left-1/3 -translate-x-1/2 w-[400px] h-[400px] bg-stone-200/40 rounded-full blur-3xl pointer-events-none"
      />

      {/* Main Elegant Greeting Card */}
      <motion.div
        id="main-greeting-card"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-xl text-center p-8 md:p-12"
      >
        {/* Subtle Decorative Archival Accent Line */}
        <motion.div
          id="accent-top-line"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto w-12 h-[1px] bg-neutral-300 mb-8"
        />

        {/* Display Typography Header */}
        <motion.h1
          id="text-hello-world"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1.5 }}
          className="font-display font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#111111]"
        >
          Hello, World!
        </motion.h1>

        {/* Refined Secondary Text */}
        <motion.p
          id="text-sub-greeting"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1.2, ease: "easeOut" }}
          className="mt-6 font-sans text-sm md:text-base text-neutral-500 font-medium max-w-sm mx-auto leading-relaxed"
        >
          A classic beginning, crafted in harmony with minimalist aesthetics and spacious design.
        </motion.p>

        {/* Subtle Decorative Status Identifier */}
        <motion.div
          id="status-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 1.5 }}
          className="mt-12 flex items-center justify-center gap-2"
        >
          <span id="status-indicator-dot" className="inline-block w-1.5 h-1.5 bg-neutral-400 rounded-full animate-pulse" />
          <span id="status-text" className="font-mono text-xs tracking-widest uppercase text-neutral-400 font-medium">
            First Turn Complete
          </span>
        </motion.div>

        {/* Bottom Small Archival Line */}
        <motion.div
          id="accent-bottom-line"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto w-12 h-[1px] bg-neutral-300 mt-8"
        />
      </motion.div>
    </div>
  );
}
