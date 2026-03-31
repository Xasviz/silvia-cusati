"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import MediaKitModal from "@/components/modals/MediaKitModal";
import BeautyGallery from "@/components/sections/BeautyGallery";
import BrandSlider from "@/components/sections/BrandSlider";
import ContactForm from "@/components/sections/ContactForm";
import { motion, useScroll, useSpring } from "framer-motion";

export default function Home() {
  const [isMediaKitOpen, setIsMediaKitOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="min-h-screen relative">
      {/* Custom Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent z-[60] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <HeroSection onOpenMediaKit={() => setIsMediaKitOpen(true)} />
      
      <div className="bg-background">
        <BrandSlider />
        <BeautyGallery />
        <ContactForm />
      </div>

      <MediaKitModal 
        isOpen={isMediaKitOpen} 
        onClose={() => setIsMediaKitOpen(false)} 
      />

      <footer className="bg-primary text-white py-12 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h4 className="font-serif text-2xl tracking-widest font-bold">SILVIA CUSATI</h4>
            <p className="text-white/40 uppercase tracking-widest text-[10px] mt-2">© 2026 Silvia Cusati's Team. All Rights Reserved.</p>
          </div>
          <div className="flex gap-12 text-sm uppercase tracking-[0.2em] font-bold">
            <a href="#" className="hover:text-accent transition-colors">Instagram</a>
            <a href="#" className="hover:text-accent transition-colors">TikTok</a>
            <a href="#" className="hover:text-accent transition-colors">YouTube</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
