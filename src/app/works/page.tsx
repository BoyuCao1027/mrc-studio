"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import Link from "next/link";

const PROJECTS = [
  {
    id: "lake-tahoe",
    title: "Lake Tahoe: Full Moon on Nevada Mountain Range",
    cover: "/photography/tahoe-hero.jpg", 
    date: "Jan 2026",
  },
  {
    id: "glacier",
    title: "Glacier: The Crown of Continent",
    cover: "/photography/glacier-hero.jpg", 
    date: "SEP 2025",
  },
  {
    id: "alaska",
    title: "Alaska: The Last Frontier",
    cover: "/photography/alaska-hero.jpg", 
    date: "Jun 2025",
  },
];

const FEATURED_IMAGE = "/photography/MainpagePic.jpg";

export default function Home() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  return (
    <main className="bg-[#fcfcfc] text-zinc-900 font-sans selection:bg-zinc-900 selection:text-white">
      
      {/* --- 导航栏 --- */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl px-8 py-4 rounded-full border border-zinc-200/50 bg-white/60 backdrop-blur-xl shadow-sm flex justify-between items-center">
        <h1 className="font-playfair font-bold text-lg tracking-tighter">Mrcphotography.</h1>
        <div className="flex gap-10 text-[10px] uppercase tracking-[0.3em] font-medium opacity-60">
          <Link href="/#work" className="hover:opacity-100 transition">Works</Link>
          <Link href="/about" className="hover:opacity-100 transition">About</Link>
        </div>
      </nav>

      {/* --- 1. 破格杂志排版 Hero Section (视觉冲击力拉满) --- */}
      <section className="min-h-[90vh] lg:min-h-screen pt-32 pb-20 relative bg-[#fcfcfc] flex flex-col lg:flex-row items-center overflow-hidden">
        
        {/* 背景超大装饰字 (极低透明度，增加层次) */}
        <div className="absolute top-[20%] left-[-5%] font-playfair text-[18vw] text-zinc-100/60 font-black select-none z-0 leading-none tracking-tighter uppercase whitespace-nowrap pointer-events-none">
          STUDIO
        </div>

        {/* 左侧：收敛且优雅的文字排版 */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-7xl mx-auto px-6 md:px-20 z-20 mt-8 lg:mt-0"
        >
          <div className="max-w-xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-[1px] bg-amber-600" />
              <span className="text-[10px] uppercase tracking-[0.4em] text-amber-700 font-bold">
                Visual Storyteller
              </span>
            </div>

            {/* 🌟 调整后的优雅字号 */}
            <h1 className="font-playfair text-6xl md:text-7xl lg:text-[6.5rem] leading-[0.9] tracking-tighter mb-8 text-zinc-900 drop-shadow-sm relative">
              Mrc <br />
              <span className="italic font-light text-zinc-400">Photography</span>
            </h1>

            <p className="text-zinc-500 text-lg font-light leading-relaxed max-w-md italic font-playfair">
              "Capturing the silent geometric dialogues hidden within nature’s fleeting moments."
            </p>
          </div>
        </motion.div>

        {/* 右侧：打破网格的巨幅图片 (视觉冲击核心) */}
        <motion.div 
           initial={{ opacity: 0, scale: 1.05 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
           // 🌟 核心魔法：在电脑端，这张图绝对定位，紧贴屏幕右侧边缘，占据 55% 的宽度
           className="w-full lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 lg:w-[55%] h-[50vh] md:h-[60vh] lg:h-[85vh] z-10 mt-16 lg:mt-0 px-6 lg:px-0 group cursor-zoom-in"
           onClick={() => setIsLightboxOpen(true)}
        >
          <div className="w-full h-full relative overflow-hidden shadow-2xl lg:rounded-l-sm">
             <img 
               src={FEATURED_IMAGE} 
               alt="Featured Work" 
               className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </div>

          {/* 边缘的高级感小字 */}
          <div className="absolute bottom-4 left-6 lg:-left-8 lg:bottom-12 lg:origin-bottom-left lg:-rotate-90 text-[9px] uppercase tracking-[0.3em] text-zinc-500 font-bold bg-[#fcfcfc]/90 backdrop-blur-sm px-3 py-1 lg:shadow-sm">
            © Featured Archive
          </div>
        </motion.div>

      </section>

      {/* --- 2. Projects Section --- */}
      <section id="work" className="py-32 px-6 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-baseline gap-4 mb-20 border-b border-zinc-100 pb-8">
            <h3 className="font-playfair text-5xl md:text-6xl italic text-zinc-900">Collections.</h3>
            <span className="text-[10px] text-zinc-400 tracking-[0.4em] uppercase font-medium">Selected Series / 2025-2026</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-24">
            {PROJECTS.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 1.2, 
                  delay: index * 0.1, 
                  ease: [0.215, 0.61, 0.355, 1] 
                }}
              >
                <Link href={`/projects/${project.id}`} className="group cursor-pointer block">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-sm mb-8 bg-zinc-100 shadow-[0_0_0_1px_rgba(0,0,0,0.05)]">
                    <motion.img
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                      src={project.cover}
                      alt={project.title}
                      className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 transition-all duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  </div>

                  <div className="flex justify-between items-end px-1">
                    <div className="space-y-3">
                      <div className="overflow-hidden">
                        <motion.span 
                          initial={{ y: "100%" }}
                          whileInView={{ y: 0 }}
                          transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                          className="text-[10px] text-amber-700 tracking-[0.4em] uppercase font-bold block"
                        >
                          {project.date}
                        </motion.span>
                      </div>
                      <h4 className="font-playfair text-3xl md:text-4xl tracking-tight group-hover:italic transition-all duration-500 text-zinc-900">
                        {project.title}
                      </h4>
                    </div>
                    <div className="w-14 h-14 rounded-full border border-zinc-200 flex items-center justify-center group-hover:bg-zinc-900 group-hover:text-white group-hover:border-zinc-900 transition-all duration-500 transform group-hover:-translate-y-2 shrink-0 ml-4">
                      <ArrowRight size={20} strokeWidth={1.5} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Lightbox 灯箱组件 (点图放大看细节) --- */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-white/95 backdrop-blur-md flex items-center justify-center cursor-zoom-out p-4"
            onClick={() => setIsLightboxOpen(false)}
          >
            <button className="absolute top-8 right-8 text-zinc-400 hover:text-zinc-900 transition-colors z-[110]">
               <X size={32} />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative max-w-7xl w-full h-full flex items-center justify-center"
            >
              <div className="relative group">
                <img 
                  src={FEATURED_IMAGE} 
                  className="max-w-full max-h-[90vh] object-contain shadow-2xl rounded-sm" 
                  alt="Full size"
                />
                <div className="absolute bottom-6 left-6 pointer-events-none select-none">
                  <p className="font-playfair text-zinc-900/30 text-sm tracking-[0.3em] uppercase italic">
                    Mrcphotography
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- Footer --- */}
      <footer className="py-20 border-t border-zinc-100 flex flex-col items-center bg-[#fcfcfc]">
        <h2 className="font-playfair text-3xl font-bold mb-8 text-zinc-900">Mrcphotography.</h2>
        <p className="text-[9px] tracking-[0.5em] text-zinc-400 uppercase font-bold">
          © 2026 Mrcphotography Studio. All Rights Reserved.
        </p>
      </footer>
    </main>
  );
}