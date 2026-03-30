"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HeroSection({ onOpenMediaKit }: { onOpenMediaKit: () => void }) {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 px-6 overflow-hidden">
      {/* Background soft gradients */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-secondary/20 blur-[100px] rounded-full" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-accent/10 blur-[100px] rounded-full" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="uppercase tracking-[0.3em] text-sm text-primary font-semibold mb-6 block">
            Makeup Artist & Beauty Influencer
          </span>
          <h1 className="text-6xl md:text-8xl font-serif text-primary leading-tight mb-8">
            The essence of <br />
            <span className="italic-serif text-accent">glow</span>, captured in every stroke.
          </h1>
          <p className="text-lg md:text-xl max-w-lg leading-relaxed mb-10 text-primary/80">
            Specializing in high-fashion editorial, bridal, and luxury brand storytelling. 
            Blending artistry with digital influence to redefine beauty standards.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <button 
              onClick={onOpenMediaKit}
              className="bg-primary text-white px-8 py-4 rounded-none uppercase tracking-widest flex items-center justify-center group hover:bg-accent transition-all duration-300 shadow-xl"
            >
              View Media Kit
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </button>
            <a 
              href="#gallery"
              className="border border-primary text-primary px-8 py-4 rounded-none uppercase tracking-widest text-center hover:bg-primary/5 transition-colors"
            >
              The Gallery
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative aspect-[3/4] md:aspect-square lg:aspect-[4/5] overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000 group"
        >
           {/* Placeholder for high-res image */}
           <div className="absolute inset-0 bg-secondary/10" />
           <img 
            src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=2087&auto=format&fit=crop"
            alt="Editorial Makeup Artistry"
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[2000ms]"
           />
           <div className="absolute bottom-6 left-6 text-white z-10 opacity-0 group-hover:opacity-100 transition-opacity">
              <p className="font-serif italic text-2xl">Editorial Glow V.1</p>
           </div>
           <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </motion.div>
      </div>
    </section>
  );
}
