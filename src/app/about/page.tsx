"use client";

import React, { useState } from "react"; // 🌟 新增 useState
import { motion, AnimatePresence } from "framer-motion"; // 🌟 新增 AnimatePresence
import { ArrowLeft, Instagram, Mail, Camera, X } from "lucide-react"; // 🌟 新增 X (关闭图标)
import Link from "next/link";

export default function AboutPage() {
  // 🌟 状态：控制灯箱开关
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  // 设定肖像图片的路径，方便复用
  const profileImageSrc = "/photography/profile.jpg";

  return (
    <main className="bg-[#fcfcfc] text-zinc-900 font-sans selection:bg-zinc-900 selection:text-white min-h-screen flex flex-col relative">
      
      {/* --- 悬浮导航栏 --- */}
      <nav className="fixed top-6 left-0 right-0 z-40 flex justify-center">
        <div className="w-[90%] max-w-5xl px-6 py-4 rounded-full border border-zinc-200/50 bg-white/80 backdrop-blur-md shadow-sm flex justify-between items-center">
          <Link href="/" className="group flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-medium text-zinc-500 hover:text-zinc-900 transition-colors">
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </Link>
          <h1 className="font-playfair font-bold text-lg tracking-tighter">Mrcphotography.</h1>
          <div className="w-[100px]"></div>
        </div>
      </nav>

      {/* --- 核心内容区 --- */}
      <div className="flex-grow flex items-center justify-center pt-32 pb-20 px-6 md:px-20">
        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* 左侧：个人肖像 (🌟 增加灯箱触发逻辑) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative group cursor-zoom-in"
            onClick={() => setIsLightboxOpen(true)} // 🌟 点击开启灯箱
          >
            <div className="absolute -inset-4 border border-zinc-200 -z-10 translate-x-4 translate-y-4 transition-transform duration-700 group-hover:translate-x-2 group-hover:translate-y-2" />
            <div className="aspect-[3/4] overflow-hidden bg-zinc-100 rounded-sm">
              <img 
                src={profileImageSrc} 
                alt="Boyu - Visual Storyteller" 
                className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              />
            </div>
            {/* 🌟 悬停时的提示小字 */}
            <div className="mt-4 flex justify-between items-center text-[9px] uppercase tracking-[0.2em] text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <span>View Portrait</span>
            </div>
          </motion.div>

          {/* 右侧：文字与联络 (保持不变) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-8 h-[1px] bg-amber-600" />
              <span className="text-[10px] uppercase tracking-[0.4em] text-amber-700 font-bold">Photography is a form of sharing</span>
            </div>

            <h1 className="font-playfair text-5xl md:text-7xl leading-none tracking-tighter mb-8 text-zinc-900">
              Mrc <br />
              <span className="italic font-normal text-zinc-400">Visual Storyteller</span>
            </h1>

            <div className="space-y-6 text-zinc-500 text-lg font-light leading-relaxed max-w-2xl mb-12">
              <p>My major is nothing near photography or journalism, but during my college life, I explored photography as my passion, to share scenary, moments, and emtions with people around me, or further through the internet.</p>
              <p>Years ago, I found going into wilds is such a special and inspirational experience to find the landscapes, natural miracles and wildlifes. Throughout the recent years, I went to around 20 US national parks to figure out the uniquness of each one of them, and to share them on my social media.</p>
              <p className="font-playfair italic text-xl text-zinc-600 border-l-2 border-amber-600/30 pl-6 my-8">
                "Once we witnesed the greatness of the wild, it permanently became part of us."
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-zinc-100">
              <div>
                <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-900 mb-6">Gear & Arsenal</h3>
                <ul className="text-sm text-zinc-500 space-y-3 font-light">
                  <li className="flex items-center gap-2"><Camera size={14}/> Sony Alpha C7 II</li>
                  <li className="flex items-center gap-2"><Camera size={14}/> Prime Lenses: Sony FE 20-70mm F4 G </li>
                  <li className="flex items-center gap-2"><Camera size={14}/> Secondary Lenses:Tamron 50-400mm </li>
                  <li className="flex items-center gap-2"><Camera size={14}/> DJI Mini 4 Pro</li>
                </ul>
              </div>
              <div>
                <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-900 mb-6">Connect</h3>
                <div className="flex flex-col gap-4">
                  <a href="https://instagram.com/victor_boyu" target="_blank" className="group flex items-center gap-3 w-fit">
                    <Instagram size={14} className="text-zinc-400 group-hover:text-amber-700 transition-colors" />
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-400 group-hover:text-zinc-900 transition-colors">Instagram</span>
                  </a>
                  <a href="https://xhslink.com/m/9RF28l5ILkz" target="_blank" className="group flex items-center gap-3 w-fit">
                    <span className="text-[8px] font-bold bg-zinc-100 text-zinc-400 group-hover:bg-red-50 group-hover:text-red-600 px-1 py-0.5 rounded transition-colors uppercase leading-none">Red</span>
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-400 group-hover:text-zinc-900 transition-colors">小红书</span>
                  </a>
                  <a href="https://www.youtube.com/@Mrc_Photography" target="_blank" className="group flex items-center gap-3 w-fit">
                    <motion.div whileHover={{ scale: 1.1 }} className="text-zinc-400 group-hover:text-red-600 transition-colors">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 2-2h15a2 2 0 0 1 2 2 24.12 24.12 0 0 1 0 10 2 2 0 0 1-2 2h-15a2 2 0 0 1-2-2Z"/><path d="m10 15 5-3-5-3z"/></svg>
                    </motion.div>
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-400 group-hover:text-zinc-900 transition-colors">YouTube</span>
                  </a>
                  <a href="https://space.bilibili.com/40994421" target="_blank" className="group flex items-center gap-3 w-fit">
                    <span className="text-[9px] font-bold bg-zinc-100 text-zinc-400 group-hover:bg-blue-50 group-hover:text-blue-500 px-1 rounded transition-colors uppercase">Bili</span>
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-400 group-hover:text-zinc-900 transition-colors">Bilibili</span>
                  </a>
                  <a href="mailto:caoboyu1027@gmail.com" className="group flex items-center gap-3 w-fit">
                    <Mail size={14} className="text-zinc-400 group-hover:text-amber-700 transition-colors" />
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-400 group-hover:text-zinc-900 transition-colors">Contact</span>
                  </a>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>

      {/* 🌟 核心新增：Lightbox 灯箱组件 */}
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
              className="relative max-w-7xl w-full h-full flex items-center justify-center pointer-events-none"
            >
              <div className="relative group">
                <img 
                  src={profileImageSrc} 
                  className="max-w-full max-h-[90vh] object-contain shadow-2xl rounded-sm" 
                  alt="Full size Portrait"
                />
                <div className="absolute bottom-6 left-6 pointer-events-none select-none">
                  <p className="font-playfair text-zinc-900/30 text-sm tracking-[0.3em] uppercase italic drop-shadow-sm">
                    Mrcphotography
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- Footer --- */}
      <footer className="py-12 border-t border-zinc-100 flex flex-col items-center bg-white mt-auto">
        <h2 className="font-playfair text-xl font-bold mb-2">Mrcphotography.</h2>
        <p className="text-[9px] tracking-[0.4em] text-zinc-400 uppercase font-medium">© 2026 Boyu. All Rights Reserved.</p>
      </footer>
    </main>
  );
}