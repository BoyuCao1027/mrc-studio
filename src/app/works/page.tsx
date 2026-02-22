"use client";

import React, { useState } from "react"; // 引入 useState 用于控制灯箱
import { motion, AnimatePresence } from "framer-motion"; // 引入 AnimatePresence 处理退出动画
import { ArrowRight, Instagram, Mail } from "lucide-react";
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
      id: "alaska", // 这个 id 会自动生成链接：/projects/alaska
      title: "Alaska: The Last Frontier", // 延续你的诗意标题风格
      cover: "/photography/alaska-hero.jpg", // 
      date: "Jun 2025",
    },
  ];

// 主页介绍图路径
const FEATURED_IMAGE = "/photography/MainpagePic.jpg";

export default function Home() {
  // 状态：控制主页灯箱开关
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  return (
    <main className="bg-[#fcfcfc] text-zinc-900 font-sans selection:bg-zinc-900 selection:text-white">
      
      {/* --- 导航栏 --- */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl px-8 py-4 rounded-full border border-zinc-200/50 bg-white/60 backdrop-blur-xl shadow-sm flex justify-between items-center">
        <h1 className="font-playfair font-bold text-lg tracking-tighter">Mrcphotography.</h1>
        <div className="flex gap-10 text-[10px] uppercase tracking-[0.3em] font-medium opacity-60">
          <a href="#work" className="hover:opacity-100 transition">Works</a>
          <a href="#" className="hover:opacity-100 transition">About</a>
        </div>
      </nav>

      {/* --- 1. Hero & Intro (紧凑优化版) --- */}
      <section className="min-h-[85vh] pt-32 pb-16 flex flex-col justify-center px-6 md:px-20 relative overflow-hidden bg-[#fcfcfc]">
        
        {/* 背景装饰大字 */}
        <div className="absolute top-[10%] right-[-2%] font-playfair text-[12vw] text-zinc-100/80 font-black select-none -z-10 leading-none tracking-tighter uppercase">
          MRCPHOTOGRAPHY
        </div>

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* 左侧：文字叙 narrative */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 z-10"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-[1px] bg-amber-600" />
              <span className="text-[10px] uppercase tracking-[0.5em] text-amber-700 font-bold">
                Visual Storyteller
              </span>
            </div>

            <h1 className="font-playfair text-6xl md:text-8xl lg:text-[8rem] leading-[0.85] tracking-tighter mb-10 text-zinc-900">
              Mrc <br />
              <span className="italic font-normal text-zinc-400">Studio</span>
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-zinc-100">
              <p className="text-zinc-500 text-lg font-light leading-relaxed">
                I am Boyu, an observer wandering between the untamed wilderness and the edges of urbanity. Through Mrcphotography, I seek to capture the silent geometric dialogues hidden within nature’s fleeting moments.
              </p>
              <p className="text-zinc-400 text-sm italic leading-loose">
                "Photography is more than a record of light and shadow; it is a silent projection of the soul onto the canvas of the world."
              </p>
            </div>
          </motion.div>

          {/* 右侧：主视觉照片 (新增点击放大事件 cursor-zoom-in) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative group cursor-zoom-in"
            onClick={() => setIsLightboxOpen(true)}
          >
            <div className="absolute -inset-4 border border-zinc-100 -z-10 translate-x-4 translate-y-4 transition-transform group-hover:translate-x-2 group-hover:translate-y-2 duration-700" />
            <div className="aspect-[3/4] overflow-hidden bg-zinc-200 shadow-2xl rounded-sm">
              <img 
                src={FEATURED_IMAGE}
                alt="Featured Work" 
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000"
              />
            </div>
            <div className="mt-4 flex justify-between items-center text-[9px] uppercase tracking-[0.2em] text-zinc-400">
              <span>Featured Photograph</span>
              <span>© 2026 Mrcphotography</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- 社交媒体链接区 --- */}
      <section className="px-6 md:px-20 py-8 border-y border-zinc-100 bg-white/30">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center md:justify-center items-center gap-x-12 gap-y-6">
          
          {/* Instagram */}
          <a href="https://instagram.com/victor_boyu" target="_blank" className="group flex items-center gap-3">
            <Instagram size={18} className="text-zinc-400 group-hover:text-amber-700 transition-colors" />
            <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-zinc-400 group-hover:text-zinc-900 transition-colors">Instagram</span>
          </a>

        {/* 小红书 */}
        <a href="https://xhslink.com/m/9RF28l5ILkz" target="_blank" className="group flex flex-col md:flex-row items-center gap-2 md:gap-3">
            <span className="text-[9px] font-bold bg-zinc-100 text-zinc-400 group-hover:bg-red-50 group-hover:text-red-600 px-1.5 py-0.5 rounded transition-colors uppercase leading-none">Red</span>
            <span className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-bold text-zinc-400 group-hover:text-zinc-900 transition-colors">小红书</span>
          </a>
          
          {/* YouTube */}
          <a href="https://www.youtube.com/@Mrc_Photography" target="_blank" className="group flex items-center gap-3">
            <motion.div whileHover={{ scale: 1.1 }} className="text-zinc-400 group-hover:text-red-600 transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 2-2h15a2 2 0 0 1 2 2 24.12 24.12 0 0 1 0 10 2 2 0 0 1-2 2h-15a2 2 0 0 1-2-2Z"/><path d="m10 15 5-3-5-3z"/></svg>
            </motion.div>
            <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-zinc-400 group-hover:text-zinc-900 transition-colors">YouTube</span>
          </a>

          {/* Bilibili */}
          <a href="https://space.bilibili.com/40994421" target="_blank" className="group flex items-center gap-3">
            <span className="text-[10px] font-bold bg-zinc-100 text-zinc-400 group-hover:bg-blue-50 group-hover:text-blue-500 px-1 rounded transition-colors uppercase">Bili</span>
            <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-zinc-400 group-hover:text-zinc-900 transition-colors">Bilibili</span>
          </a>

          {/* Email */}
          <a href="mailto:caoboyu1027@gmail.com" className="group flex items-center gap-3">
            <Mail size={18} className="text-zinc-400 group-hover:text-amber-700 transition-colors" />
            <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-zinc-400 group-hover:text-zinc-900 transition-colors">Contact</span>
          </a>

        </div>
      </section>

      
      {/* --- 2. Projects Section (紧凑版) --- */}
      <section id="work" className="py-20 px-6 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-baseline gap-4 mb-12">
            <h3 className="font-playfair text-4xl italic">Collections.</h3>
            <span className="text-[10px] text-zinc-300 tracking-[0.3em] uppercase">Selected Series</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
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
                  <div className="relative aspect-[16/10] overflow-hidden rounded-sm mb-6 bg-zinc-100 shadow-[0_0_0_1px_rgba(0,0,0,0.05)]">
                    <motion.img
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                      src={project.cover}
                      alt={project.title}
                      className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 transition-all duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  </div>

                  <div className="flex justify-between items-end px-1">
                    <div className="space-y-2">
                      <div className="overflow-hidden">
                        <motion.span 
                          initial={{ y: "100%" }}
                          whileInView={{ y: 0 }}
                          transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                          className="text-[9px] text-amber-700 tracking-[0.4em] uppercase font-bold block"
                        >
                          {project.date}
                        </motion.span>
                      </div>
                      <h4 className="font-playfair text-3xl tracking-tight group-hover:italic transition-all duration-300">
                        {project.title}
                      </h4>
                    </div>
                    <div className="w-12 h-12 rounded-full border border-zinc-100 flex items-center justify-center group-hover:bg-zinc-900 group-hover:text-white group-hover:border-zinc-900 transition-all duration-500 transform group-hover:-translate-y-2">
                      <ArrowRight size={18} strokeWidth={1.5} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Lightbox 灯箱组件 --- */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-white/95 backdrop-blur-md flex items-center justify-center cursor-zoom-out p-4"
            onClick={() => setIsLightboxOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative max-w-7xl w-full h-full flex items-center justify-center"
            
            >
              {/* 水印容器 */}
              <div className="relative group">
                <img 
                  src={FEATURED_IMAGE} 
                  className="max-w-full max-h-[90vh] object-contain shadow-2xl rounded-sm" 
                  alt="Full size"
                />
                
                {/* 水印文字 */}
                <div className="absolute bottom-6 left-6 pointer-events-none select-none">
                  <p className="font-playfair text-zinc-900/30 text-sm tracking-[0.3em] uppercase italic">
                    Mrcphotography
                  </p>
                </div>
              </div>

              <div className="absolute top-4 right-0 text-zinc-400 text-[10px] tracking-[0.4em] uppercase font-bold hidden md:block">
                Close [esc]
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- 3. Footer --- */}
      <footer className="py-16 border-t border-zinc-100 flex flex-col items-center">
        <h2 className="font-playfair text-2xl font-bold mb-8">Mrcphotography.</h2>
        <div className="flex gap-10 mb-10">
        </div>
        <p className="text-[9px] tracking-[0.5em] text-zinc-300 uppercase font-medium">
          © 2026 Mrcphotography Studio. All Rights Reserved.
        </p>
      </footer>
    </main>
  );
}