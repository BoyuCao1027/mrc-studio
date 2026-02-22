"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, MapPin, mountain, Camera } from "lucide-react";
import Link from "next/link";

const LANDSCAPES = [
  { id: 1, title: "Hidden Lake Overlook", desc: "The dramatic peaks of Bearhat Mountain reflected in the alpine waters.", img: "/photography/glacier-land-1.jpg" },
  { id: 2, title: "Going-to-the-Sun", desc: "A road carved into the side of heaven, winding through ancient cedar forests.", img: "/photography/glacier-land-2.jpg" },
  { id: 3, title: "Grinnell Turquoise", desc: "Glacier milk turns the water into a surreal, milky blue dream.", img: "/photography/glacier-land-3.jpg" },
  { id: 4, title: "Swiftcurrent Dusk", desc: "As the sun dips, the peaks catch the last embers of light.", img: "/photography/glacier-land-4.jpg" },
];

const WILDLIFE = [
  { id: 5, title: "The Mountain Ghost", desc: "A Mountain Goat navigating the vertical cliffs of Logan Pass.", img: "/photography/glacier-wild-1.jpg" },
  { id: 6, title: "Grizzly Crossing", desc: "Respectful silence as a mother and cub traverse the berry patches.", img: "/photography/glacier-wild-2.jpg" },
  { id: 7, title: "Bighorn Sentinel", desc: "A ram stands watch over the valley, unbothered by the alpine winds.", img: "/photography/glacier-wild-3.jpg" },
  { id: 8, title: "The Pika Scurry", desc: "Gathering winter supplies among the granite talus slopes.", img: "/photography/glacier-wild-4.jpg" },
];

export default function GlacierProject() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const renderSection = (data: any[], sectionTitle: string) => (
    <div className="space-y-[12vh] py-12">
      <div className="flex items-center gap-4 mb-20 px-6 md:px-0">
        <h2 className="font-playfair text-3xl italic text-zinc-800">{sectionTitle}</h2>
        <div className="h-[1px] flex-grow bg-zinc-200" />
      </div>
      {data.map((item, idx) => (
        <div key={item.id} className={`flex flex-col ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 md:gap-16 items-center`}>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="w-full md:w-2/3 shadow-2xl cursor-zoom-in"
            onClick={() => setSelectedImage(item.img)}
          >
            <img src={`${item.img}?v=1`} alt={item.title} className="w-full h-auto object-cover rounded-sm" />
          </motion.div>
          <motion.div className="w-full md:w-1/3 space-y-4">
            <span className="text-zinc-300 font-playfair text-5xl block">0{idx + 1}</span>
            <h3 className="font-playfair text-2xl uppercase text-zinc-800">{item.title}</h3>
            <p className="text-zinc-500 font-light italic leading-relaxed">{item.desc}</p>
          </motion.div>
        </div>
      ))}
    </div>
  );

  return (
    <main className="bg-white text-zinc-900 font-sans">
      <nav className="fixed top-8 left-8 z-50">
        <Link href="/" className="group flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] font-bold mix-blend-difference text-zinc-400 hover:text-white transition">
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back
        </Link>
      </nav>

      {/* 1. Header */}
      <section className="min-h-[45vh] pt-32 pb-12 px-6 md:px-20 max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="flex items-center gap-2 mb-6 text-cyan-800">
            <MapPin size={14} />
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold">Montana, USA</span>
          </div>
          <h1 className="font-playfair text-7xl md:text-9xl tracking-tighter italic">Glacier</h1>
          <p className="max-w-2xl text-zinc-500 text-lg font-light mt-8">
            Glacier National Park has been one of my dream destination since I ever started my journey of exploring the US national park system. It's uniqueness not only lies in its dramatic landscapes, but also in its abundance of wildlife variety.
            In Sep 2025, I finally made it to this phenomenal national park. Spent one week here, I witnessed so much more than I expected. I would like to share all these photography works with you.
          </p>
        </motion.div>
      </section>

      {/* 2. Content Sections */}
      <section className="px-6 md:px-20 max-w-7xl mx-auto">
        {renderSection(LANDSCAPES, "Part I: Landscapes of Ice")}
        <div className="py-24" />
        {renderSection(WILDLIFE, "Part II: The Alpine Residents")}
      </section>

      {/* 3. Grid Archive */}
      <section className="px-6 md:px-20 py-24 bg-zinc-50 mt-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-playfair text-xl italic text-zinc-400 mb-12">Collection Archive</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
              <div key={num} className="aspect-square bg-zinc-200 overflow-hidden cursor-zoom-in" onClick={() => setSelectedImage(`/photography/glacier-archive-${num}.jpg`)}>
                <img src={`/photography/glacier-archive-${num}.jpg`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Lightbox with Watermark */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] bg-white/95 backdrop-blur-md flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} transition={{ type: "spring", damping: 25 }} className="relative">
              <img src={selectedImage} className="max-w-full max-h-[90vh] object-contain shadow-2xl" alt="Preview" />
              <div className="absolute bottom-6 left-6 pointer-events-none">
                <p className="font-playfair text-zinc-900/30 text-sm tracking-[0.3em] uppercase italic">Mrcphotography</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="py-20 text-center border-t border-zinc-100">
        <Link href="/" className="text-[10px] uppercase tracking-[0.5em] font-bold border-b border-zinc-900 pb-2">Return</Link>
      </footer>
    </main>
  );
}