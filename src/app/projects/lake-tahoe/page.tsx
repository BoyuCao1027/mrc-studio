"use client";

import React, { useState } from "react"; 
import { motion, AnimatePresence } from "framer-motion"; 
import { ArrowLeft, MapPin } from "lucide-react";
import Link from "next/link";

const TAHOE_STORY = [
  {
    id: 1,
    title: "The Emerald Morning",
    desc: "The first light hits the crystal clear depths of Sand Harbor, revealing a world of granite and glass.",
    img: "/photography/tahoe-1.jpg",
  },
  {
    id: 2,
    title: "Alpine Silence",
    desc: "High above Emerald Bay, the air grows thin and the silence becomes a physical presence.",
    img: "/photography/tahoe-2.jpg",
  },
  {
    id: 3,
    title: "Granite Sentinels",
    desc: "Ancient boulders stand as silent witnesses to the shifting seasons of the Sierra Nevada.",
    img: "/photography/tahoe-3.jpg",
  },
  {
    id: 4,
    title: "Deep Blue Horizon",
    desc: "Where the sapphire water meets the cobalt sky, lines of reality begin to blur.",
    img: "/photography/tahoe-4.jpg",
  },
  {
    id: 5,
    title: "The Golden Hour",
    desc: "As the sun dips below the peaks, the lake transforms into a mirror of liquid fire.",
    img: "/photography/tahoe-5.jpg",
  },
  {
    id: 6,
    title: "Winter's Breath",
    desc: "A thin veil of snow covers the pines, turning the basin into a monochrome masterpiece.",
    img: "/photography/tahoe-6.jpg",
  },
];

export default function TahoeProject() {
  // 状态：当前选中的放大图片路径
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <main className="bg-white text-zinc-900 font-sans selection:bg-zinc-900 selection:text-white">
      {/* 返回按钮 */}
      <nav className="fixed top-8 left-8 z-50">
        <Link href="/" className="group flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] font-bold mix-blend-difference text-zinc-400 hover:text-white transition">
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          Back to Archive
        </Link>
      </nav>

      {/* 1. 项目标题区 */}
      <section className="min-h-[45vh] pt-32 pb-12 flex flex-col justify-center px-6 md:px-20 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="flex items-center gap-2 mb-6 text-amber-700">
            <MapPin size={14} />
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold">Sierra Nevada, USA</span>
          </div>
          <h1 className="font-playfair text-7xl md:text-9xl tracking-tighter mb-8 italic">Lake Tahoe</h1>
          <p className="max-w-2xl text-zinc-500 text-lg font-light leading-relaxed">
            I used to live within 35 min of north shore of lake tahoe. In my early 26s, tahoe contains my dream, my desire, my hope, my love, my loss, and my endless wishes. Please enjoy the photos I took around this beautiful lake.
          </p>
        </motion.div>
      </section>

      {/* 2. 叙事滚动区 (前六张) */}
      <section className="px-6 md:px-20 space-y-[12vh] pb-[10vh]">
        {TAHOE_STORY.map((item, idx) => (
          <div 
            key={item.id} 
            className={`flex flex-col ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-12 md:gap-24 items-center`}
          >
            {/* 照片容器 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="w-full md:w-2/3 shadow-2xl cursor-zoom-in"
              onClick={() => setSelectedImage(item.img)}
            >
              <img 
                src={`${item.img}?v=1`} 
                alt={item.title} 
                className="w-full h-auto object-cover rounded-sm transition-transform duration-500 hover:scale-[1.02]"
                onError={(e) => console.error(`Failed to load: ${item.img}`)}
              />
            </motion.div>

            {/* 文字描述 */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              className="w-full md:w-1/3 space-y-6"
            >
              <div className="space-y-2">
                <span className="text-zinc-300 font-playfair text-5xl block">0{item.id}</span>
                <h3 className="font-playfair text-3xl tracking-tight uppercase text-zinc-800">{item.title}</h3>
              </div>
              <div className="w-12 h-[1px] bg-amber-600" />
              <p className="text-zinc-500 font-light leading-relaxed italic text-lg">{item.desc}</p>
            </motion.div>
          </div>
        ))}
      </section>

      {/* 3. Grid Archive - 更多照片展示区 */}
      <section className="px-6 md:px-20 py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <h2 className="font-playfair text-2xl italic text-zinc-400">The Extended Archive</h2>
            <div className="h-[1px] flex-grow bg-zinc-200" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3].map((num) => (
              <motion.div
                key={num}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: num * 0.05 }}
                viewport={{ once: true }}
                className="aspect-square overflow-hidden bg-zinc-200 group relative cursor-zoom-in"
                onClick={() => setSelectedImage(`/photography/tahoe-more-${num}.jpg`)}
              >
                <img 
                  src={`/photography/tahoe-more-${num}.jpg`} 
                  alt="Archive"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[20%] group-hover:grayscale-0"
                  onError={(e) => (e.currentTarget.style.display = 'none')}
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Lightbox 灯箱组件 */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-white/95 backdrop-blur-md flex items-center justify-center cursor-zoom-out p-4"
            onClick={() => setSelectedImage(null)}
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
                  src={selectedImage} 
                  className="max-w-full max-h-[80vh] object-contain shadow-2xl rounded-sm" 
                  alt="Full size"
                />
                
                {/* 水印文字 */}
                <div className="absolute bottom-6 left-6 pointer-events-none select-none">
                  <p className="font-playfair text-zinc-900/40 text-sm tracking-[0.3em] uppercase italic">
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

      {/* 5. 底部页脚 */}
      <footer className="py-32 border-t border-zinc-100 text-center">
        <p className="font-playfair italic text-zinc-400 text-xl mb-8 whitespace-pre-wrap">End of Collection</p>
        <Link href="/" className="text-[10px] uppercase tracking-[0.5em] font-bold border-b border-zinc-900 pb-2 hover:text-amber-700 hover:border-amber-700 transition-colors">
          Return to Archive
        </Link>
      </footer>
    </main>
  );
}