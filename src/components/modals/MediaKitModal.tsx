"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Users, TrendingUp, BarChart3, Share2 } from "lucide-react";

interface MediaKitModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const metrics = [
  { icon: Users, label: "Total Followers", value: "250K+", color: "bg-primary/10" },
  { icon: TrendingUp, label: "Monthly Reach", value: "1.2M", color: "bg-secondary/10" },
  { icon: BarChart3, label: "Engagement Rate", value: "4.8%", color: "bg-accent/10" },
  { icon: Share2, label: "Avg. Shares/Post", value: "12K", color: "bg-primary/10" },
];
// comentario

export default function MediaKitModal({ isOpen, onClose }: MediaKitModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />
          
          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-4 md:inset-10 lg:inset-20 bg-background z-[101] overflow-y-auto shadow-2xl border-4 border-primary"
          >
            <div className="sticky top-0 right-0 p-6 flex justify-end z-10 bg-background/80 backdrop-blur-md">
              <button onClick={onClose} className="p-2 hover:bg-primary/10 transition-colors rounded-full">
                <X size={32} className="text-primary" />
              </button>
            </div>

            <div className="px-6 md:px-12 pb-12">
              <header className="border-b-2 border-primary pb-8 mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
                <div>
                  <h2 className="text-5xl md:text-7xl font-serif text-primary uppercase leading-tight">
                    Media <br /><span className="italic-serif text-accent">Kit</span> 2026
                  </h2>
                  <p className="mt-4 text-primary/70 tracking-[0.2em] uppercase text-sm">Editorial & Beauty Influence Portfolio</p>
                </div>
                <div className="text-right">
                  <p className="font-serif italic text-2xl">Digital Impact Report</p>
                </div>
              </header>

              {/* Metrics Grid */}
              <div id="metrics" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                {metrics.map((m, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * i }}
                    className={`${m.color} p-8 border border-primary/20 flex flex-col items-center text-center group hover:border-primary transition-all`}
                  >
                    <m.icon className="text-primary mb-4 group-hover:scale-110 transition-transform" size={32} />
                    <p className="text-sm uppercase tracking-widest text-primary/60 mb-2">{m.label}</p>
                    <p className="text-4xl font-serif text-primary">{m.value}</p>
                  </motion.div>
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2 space-y-12">
                  <section>
                    <h3 className="text-3xl font-serif text-primary border-l-4 border-accent pl-6 mb-6 italic">Audience DNA</h3>
                    <div className="grid grid-cols-2 gap-8 text-primary/80">
                      <div>
                        <p className="font-bold uppercase tracking-widest text-xs mb-2">Primary Interests</p>
                        <ul className="space-y-1">
                          <li>• Luxury Skincare</li>
                          <li>• Glam Transformation</li>
                          <li>• Editorial Fashion</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-bold uppercase tracking-widest text-xs mb-2">Age Range</p>
                        <p>24 - 45 Years Old</p>
                        <p className="mt-2 font-bold uppercase tracking-widest text-xs">Primary Gender</p>
                        <p>92% Female</p>
                      </div>
                    </div>
                  </section>

                  <section>
                    <h3 className="text-3xl font-serif text-primary border-l-4 border-accent pl-6 mb-6 italic">Unique Value Proposition</h3>
                    <p className="text-xl leading-relaxed text-primary/80">
                      Focusing on 4K Macro quality and cinematic storytelling. Every collaboration is curated to feel like a high-end magazine feature rather than just a digital ad. Total completion rates for tutorials exceed industry standards by 24%.
                    </p>
                  </section>
                </div>

                <div className="bg-primary text-white p-8 h-fit">
                   <h4 className="text-2xl font-serif italic mb-6">Partnership Value</h4>
                   <ul className="space-y-6">
                      <li className="border-b border-white/20 pb-4">
                        <p className="text-4xl font-serif">98%</p>
                        <p className="text-xs uppercase tracking-[0.2em] mt-2">Brand Loyalty Index</p>
                      </li>
                      <li className="border-b border-white/20 pb-4">
                        <p className="text-4xl font-serif">150+</p>
                        <p className="text-xs uppercase tracking-[0.2em] mt-2">Global Campaigns</p>
                      </li>
                      <li>
                        <p className="text-4xl font-serif">4.2M</p>
                        <p className="text-xs uppercase tracking-[0.2em] mt-2">Annual Video Views</p>
                      </li>
                   </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
