"use client";

import { motion } from "framer-motion";

const brands = [
  "CHANEL", "DIOR", "YSL", "ARMANI", "MAC", "NARS", "LANCÔME", "ESTÉE LAUDER"
];

export default function BrandSlider() {
  return (
    <section id="brands" className="py-24 border-y border-primary/10 overflow-hidden bg-background">
      <div className="mb-12 text-center">
        <h3 className="uppercase tracking-[0.4em] text-xs text-primary/60">Trusted by Global Luxury Partners</h3>
      </div>
      
      <div className="flex w-full relative">
        <motion.div 
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {/* Duplicate for infinite effect */}
          {[...brands, ...brands].map((brand, i) => (
            <div 
              key={i} 
              className="mx-12 md:mx-20 text-4xl md:text-6xl font-serif text-primary/20 hover:text-primary grayscale hover:grayscale-0 transition-all duration-500 cursor-default select-none italic"
            >
              {brand}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
