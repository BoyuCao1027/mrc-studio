"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center overflow-hidden relative selection:bg-white/30">
      
      {/* 极简的背景光晕 */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl" />

      {/* 核心内容区 (去掉了 mt-20，让内容完美居中) */}
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 mb-6"
        >
          MRC Studio
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-zinc-400 text-lg md:text-xl max-w-lg mb-10 font-light tracking-wide"
        >
          Design meets Engineering. <br/> 
          Crafting digital experiences with modern web technologies.
        </motion.p>

        {/* 唯一的出口：Explore Works 按钮 */}
        <Link href="/works">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-full bg-white text-black font-medium tracking-wide hover:bg-zinc-200 transition-colors cursor-pointer"
          >
            Explore Works
          </motion.button>
        </Link>

      </div>
    </main>
  );
}