"use client";

import { motion } from "framer-motion";
import { useState } from "react";

// Función para generar un fallback elegante (Nude) si la imagen falla
const getPlaceholder = (text: string) => {
  const svg = `
    <svg width="1000" height="1500" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f4978e"/>
      <text x="50%" y="48%" font-family="serif" font-style="italic" font-size="42" fill="#880d1e" text-anchor="middle" dominant-baseline="middle">Silvia Cusati</text>
      <line x1="44%" y1="51%" x2="56%" y2="51%" stroke="#880d1e" stroke-width="1.5" />
      <text x="50%" y="54%" font-family="sans-serif" font-size="14" fill="#880d1e" text-anchor="middle" dominant-baseline="middle" letter-spacing="8" font-weight="bold">${text.toUpperCase()}</text>
    </svg>
  `;
  return `data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(svg)))}`;
};

const galleryItems = [
  {
    id: 1,
    title: "Vogue Glow",
    category: "Editorial",
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=60&w=800",
    span: "row-span-2"
  },
  {
    id: 2,
    title: "Velvet Red",
    category: "Lips",
    image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?auto=format&fit=crop&q=60&w=800",
    span: "row-span-1"
  },
  {
    id: 3,
    title: "Ethereal Bride",
    category: "Bridal",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=60&w=800",
    span: "row-span-1"
  },
  {
    id: 4,
    title: "Glass Skin",
    category: "Skincare",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc4033c8?auto=format&fit=crop&q=60&w=800",
    span: "row-span-1"
  },
  {
    id: 5,
    title: "Midnight Shimmer",
    category: "Eyes",
    image: "https://images.unsplash.com/photo-1526045431048-f857369aba09?auto=format&fit=crop&q=60&w=800",
    span: "row-span-2"
  },
  {
    id: 6,
    title: "Fashion Week",
    category: "Editorial",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=60&w=800",
    span: "row-span-1"
  },
  {
    id: 7,
    title: "Rose Nude",
    category: "Lips",
    image: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?auto=format&fit=crop&q=60&w=800",
    span: "row-span-1"
  },
  {
    id: 8,
    title: "Classic Glam",
    category: "Bridal",
    image: "https://images.unsplash.com/photo-1519415387722-a1c3bbef716c?auto=format&fit=crop&q=60&w=800",
    span: "row-span-1"
  },
  {
    id: 9,
    title: "Mineral Hydration",
    category: "Skincare",
    image: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&q=60&w=800",
    span: "row-span-1"
  }
];

export default function BeautyGallery() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Editorial", "Bridal", "Skincare", "Eyes", "Lips"];

  const filteredItems = filter === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <section id="gallery" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16 text-center">
          <span className="uppercase tracking-[0.4em] text-[10px] text-accent font-bold mb-4 block">Selected Works</span>
          <h2 className="text-4xl md:text-6xl font-serif text-primary mb-6">Visual <span className="italic-serif text-accent">Archive</span></h2>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`uppercase tracking-[0.2em] text-[10px] font-bold pb-2 transition-all border-b-2 ${
                  filter === cat ? "border-accent text-accent" : "border-transparent text-primary/40 hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
          {filteredItems.map((item) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={`relative overflow-hidden group border border-primary/5 shadow-sm ${item.span} bg-primary/5`}
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover grayscale-[0.85] group-hover:grayscale-0 scale-100 group-hover:scale-105 transition-all duration-700 ease-in-out"
                onError={(e) => {
                  e.currentTarget.src = getPlaceholder(item.category);
                }}
              />
              
              <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-[#ce4257]/20 to-[#ce4257]/90 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                <span className="text-white/80 font-sans uppercase tracking-widest text-[10px] font-bold mb-2">{item.category}</span>
                <h3 className="text-white text-4xl md:text-5xl font-serif italic mb-4 leading-tight">{item.title}</h3>
                <div className="w-12 h-[2px] bg-[#ad2831] group-hover:w-24 transition-all duration-500" />
              </div>

              <div className="absolute top-4 right-4 z-10">
                <div className="bg-[#cbeef3] text-[#880d1e] px-4 py-1.5 text-[10px] uppercase tracking-widest font-sans font-bold">
                  EXPLORE
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
