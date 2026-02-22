"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, MapPin, Camera, X } from "lucide-react";
import Link from "next/link";

// --- 模拟数据结构：分章节的图文叙事 ---
const ALASKA_SECTIONS = [
  {
    id: "intro",
    layout: "hero", // 布局类型：全屏 Hero
    title: "The Last Frontier",
    subtitle: "Alaska Expedition / Nov 2025",
    description: "A journey into the raw, frozen heart of North America. Where the silence is deafening and the scale of nature humbles the human spirit.",
    cover: "/photography/alaska-cover.jpg", // 替换为你的本地横幅大图
    location: "Kenai Fjords National Park",
  },
  {
    id: "wildlife",
    layout: "split-sticky", // 布局类型：左图右文 (文字固定)
    title: "Glacier",
    description: "We fly thousands of miles here, to witness the glacier that has been here since the very beginnning",
    photos: [
      { src: "/photography/alaska-1.jpg", caption: "Bear Glacier, from the view on a kayak." },
      { src: "/photography/alaska-2.jpg", caption: "Portage Lake, by the very entrance of Whitter." },
      { src: "/photography/alaska-3.jpg", caption: "Matanuska Glacier." },
    ],
  },
  {
    id: "glacier",
    layout: "full-width-break", // 布局类型：全宽视觉沉浸
    photo: "/photography/alaska-4.jpg", // 替换为极其壮观的冰川全景
    caption: "Getting nboard, cruise is one of the best way to explore Kenai Fjords .",
  },
  {
    id: "details",
    layout: "editorial-grid", // 布局类型：杂志感拼贴配文
    title: "Seward, gateway to Kenai Fjords",
    description: "Beyond the grand vistas, the true essence of Alaska lies in the details. The quality of light hitting a mountain peak, the jagged lines of a receding glacier, the abstract patterns of frozen water.",
    photos: [
      { 
        src: "/photography/alaska-5.jpg", 
        caption: "Bald Eagle captured in a rainy day.", 
        span: "col-span-1 md:col-span-2 md:row-span-2" 
      },
      { 
        src: "/photography/alaska-6.jpg", 
        caption: "Alaska Samlon Run near bear creek.", 
        span: "col-span-1" 
      },
      { 
        src: "/photography/alaska-7.jpg", 
        caption: "Puffin in the open water near Kenai Fjords National Park.", 
        span: "col-span-1" 
      },
      { 
        src: "/photography/alaska-8.jpg", 
        caption: "Exit Glacier View Point.",
        span: "col-span-1" 
      },
      { 
        src: "/photography/alaska-9.jpg", 
        caption: "Sea Otter in Resurrection Bay.", 
        span: "col-span-1" 
      },
      { 
        src: "/photography/alaska-10.jpg", 
        caption: "Moose near Anchorage.", 
        span: "col-span-1" 
      }
    ], // 🌟 这里关闭 details 的 photos 数组
  },
  // 🌟 这里是全新独立出来的 gallery 版块，它和 details 是平级的！
  {
    id: "gallery",
    layout: "thumbnail-grid", // 全新的无字小图布局
    photos: [
      "/photography/alaska-11.jpg",
      "/photography/alaska-12.jpg",
      "/photography/alaska-13.jpg",
      "/photography/alaska-14.jpg",
      "/photography/alaska-15.jpg",
      "/photography/alaska-16.jpg",
    ]
  }
]; 


export default function AlaskaProjectPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const containerRef = useRef(null);

  return (
    <main ref={containerRef} className="bg-[#fcfcfc] text-zinc-900 font-sans selection:bg-zinc-900 selection:text-white min-h-screen">
      
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

      {/* --- 页面内容循环 --- */}
      <div className="pb-32">
        {ALASKA_SECTIONS.map((section, index) => {
          
          // --- Layout 1: Hero Section ---
          if (section.layout === "hero") {
            return (
              <section key={section.id} className="relative h-[90vh] flex items-end justify-start pb-20 px-6 md:px-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                  <motion.img
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    src={section.cover}
                    alt={section.title}
                    className="w-full h-full object-cover grayscale-[10%]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                </div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="relative z-10max-w-4xl text-white"
                >
                   <div className="flex items-center gap-3 mb-4 text-amber-400/80 text-[10px] uppercase tracking-[0.4em] font-bold">
                      <MapPin size={14} />
                      <span>{section.location}</span>
                   </div>
                  <h1 className="font-playfair text-7xl md:text-9xl leading-none tracking-tighter mb-6">{section.title}</h1>
                  <p className="text-xl md:text-2xl font-light text-white/80 max-w-2xl leading-relaxed font-playfair italic">{section.description}</p>
                </motion.div>
              </section>
            );
          }

          // --- Layout 2: Split Sticky ---
          if (section.layout === "split-sticky") {
            return (
              <section key={section.id} className="max-w-7xl mx-auto px-6 md:px-20 py-32 grid grid-cols-1 lg:grid-cols-12 gap-16 relative">
                <div className="lg:col-span-7 flex flex-col gap-12">
                  {section.photos?.map((photo: any, i) => (
                    <div key={i} className="group">
                      <motion.div
                        layoutId={`photo-${photo.src}`}
                        onClick={() => setSelectedImage(photo.src)}
                        whileHover={{ scale: 0.99 }}
                        className="aspect-[4/5] overflow-hidden rounded-sm cursor-zoom-in bg-zinc-100 mb-3"
                      >
                        <img src={photo.src} alt={photo.caption} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      </motion.div>
                      <div className="flex items-center gap-2 text-zinc-400 text-[10px] uppercase tracking-[0.2em] pl-1">
                        <Camera size={12} />
                        <span>{photo.caption}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="lg:col-span-5 lg:h-[calc(100vh-200px)] lg:sticky lg:top-32 flex flex-col justify-center">
                  <motion.div
                     initial={{ opacity: 0, x: 20 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true, margin: "-20%" }}
                     transition={{ duration: 0.8 }}
                  >
                    <h2 className="font-playfair text-4xl md:text-5xl mb-8">{section.title}</h2>
                    <p className="text-zinc-500 text-lg leading-relaxed font-light">{section.description}</p>
                    <div className="w-12 h-[1px] bg-amber-600 mt-8" />
                  </motion.div>
                </div>
              </section>
            );
          }

          // --- Layout 3: Full Width Break ---
          if (section.layout === "full-width-break") {
            return (
              <section key={section.id} className="py-20">
                <motion.div 
                  layoutId={`photo-${section.photo}`}
                  onClick={() => setSelectedImage(section.photo!)}
                  className="w-full h-[80vh] relative cursor-zoom-in group overflow-hidden"
                >
                   <img src={section.photo} alt="Full width" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                   <div className="absolute bottom-8 left-8 md:left-20 text-white/80 text-sm font-playfair italic tracking-wider bg-black/30 backdrop-blur-md px-4 py-2 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity">
                      {section.caption}
                   </div>
                </motion.div>
              </section>
            );
          }

           // --- Layout 4: Editorial Grid ---
           if (section.layout === "editorial-grid") {
            return (
              <section key={section.id} className="max-w-7xl mx-auto px-6 md:px-20 py-32">
                 <div className="max-w-3xl mx-auto text-center mb-24">
                    <h2 className="font-playfair text-4xl md:text-5xl mb-6">{section.title}</h2>
                    <p className="text-zinc-500 text-lg leading-relaxed font-light">{section.description}</p>
                 </div>
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {section.photos?.map((photo: any, i) => (
                       <div key={i} className={`group ${photo.span || 'col-span-1'}`}>
                          <motion.div
                            layoutId={`photo-${photo.src}`}
                            onClick={() => setSelectedImage(photo.src)}
                            whileHover={{ scale: 0.99 }}
                            className="aspect-square overflow-hidden rounded-sm cursor-zoom-in bg-zinc-100 mb-3 relative"
                          >
                             <img src={photo.src} alt={photo.caption} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale-[20%] group-hover:grayscale-0" />
                          </motion.div>
                          <p className="text-zinc-400 text-[10px] uppercase tracking-[0.2em] pl-1">{photo.caption}</p>
                       </div>
                    ))}
                 </div>
              </section>
            );
          }

          // 🌟🌟🌟 Layout 5: Thumbnail Grid (底部无字小图画廊) 🌟🌟🌟
          if (section.layout === "thumbnail-grid") {
            return (
              <section key={section.id} className="max-w-7xl mx-auto px-6 md:px-20 py-24 border-t border-zinc-100">
                 
                 {/* 👇👇👇 新增：艺术感标题区 👇👇👇 */}
                 <div className="text-center mb-16">
                    {/* 极简装饰短线 */}
                    <motion.div 
                       initial={{ width: 0 }}
                       whileInView={{ width: 40 }}
                       transition={{ duration: 0.8, delay: 0.2 }}
                       className="h-[1px] bg-amber-700/50 mx-auto mb-6"
                    />
                    {/* 优雅的衬线艺术字 */}
                    <motion.h3 
                       initial={{ opacity: 0, y: 20 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       transition={{ duration: 0.8 }}
                       className="font-playfair text-3xl md:text-4xl italic text-zinc-600 tracking-tight"
                    >
                      The Extended Archive.
                    </motion.h3>
                 </div>
                 <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
                    {(section.photos as string[])?.map((src, i) => (
                       <motion.div
                          key={i}
                          layoutId={`photo-${src}`}
                          onClick={() => setSelectedImage(src)}
                          whileHover={{ scale: 0.95 }}
                          className="aspect-square overflow-hidden rounded-sm cursor-zoom-in bg-zinc-100"
                       >
                          <img 
                            src={src} 
                            alt={`Gallery image ${i + 1}`} 
                            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110 grayscale-[30%] hover:grayscale-0" 
                          />
                       </motion.div>
                    ))}
                 </div>
              </section>
            );
          }

        })}
      </div>

      {/* --- Footer --- */}
      <footer className="py-16 border-t border-zinc-100 flex flex-col items-center bg-white">
        <h2 className="font-playfair text-2xl font-bold mb-4">Mrcphotography.</h2>
        <p className="text-[9px] tracking-[0.4em] text-zinc-400 uppercase font-medium">
          The Alaska Project / 2025
        </p>
      </footer>

      {/* --- Lightbox 灯箱 --- */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-white/95 backdrop-blur-xl flex items-center justify-center cursor-zoom-out p-4 md:p-12"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-6 right-6 text-zinc-400 hover:text-zinc-900 transition-colors">
              <X size={24} />
            </button>
            <motion.div 
              layoutId={`photo-${selectedImage}`}
              className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center pointer-events-none"
            >
              <img 
                src={selectedImage} 
                alt="Enlarged view" 
                className="max-w-full max-h-full object-contain rounded-sm drop-shadow-2xl"
              />
              <div className="absolute bottom-4 right-4 select-none">
                 <p className="font-playfair text-zinc-900/20 text-xs tracking-[0.3em] uppercase italic">
                    © Mrcphotography / Alaska Series
                 </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
} 