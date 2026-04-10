"use client";

import { motion } from "framer-motion";
import { Users, Eye, Percent, Briefcase } from "lucide-react";

const metrics = [
  {
    title: "TOTAL FOLLOWERS",
    value: "150K+",
    subtext: "Organic and active community",
    icon: Users,
  },
  {
    title: "MONTHLY REACH",
    value: "2.4M",
    subtext: "Impressions across Reels and Posts",
    icon: Eye,
  },
  {
    title: "ENGAGEMENT RATE",
    value: "5.8%",
    subtext: "Well above industry average",
    icon: Percent,
  },
  {
    title: "BRAND PARTNERS",
    value: "45+",
    subtext: "Successful luxury collaborations",
    icon: Briefcase,
  },
];

export default function MetricsSection() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 relative">
          <h2 className="font-serif text-4xl md:text-5xl text-wine mb-4">
            Metrics that Matter
          </h2>
          <div className="w-24 h-1 bg-red mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/50 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-wine/5 hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center"
            >
              <div className="p-3 bg-nude/10 rounded-xl mb-6">
                <metric.icon className="w-8 h-8 text-raspberry" />
              </div>
              <h3 className="text-wine/60 text-xs tracking-[0.2em] font-bold mb-2 uppercase">
                {metric.title}
              </h3>
              <div className="text-4xl font-bold text-red mb-2">
                {metric.value}
              </div>
              <p className="text-wine/70 text-sm leading-relaxed">
                {metric.subtext}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
