"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const formSchema = z.object({
  brandName: z.string().min(2, "Brand name is required"),
  email: z.string().email("Invalid email address"),
  campaignType: z.enum(["Global Campaign", "Sponsored Tutorial", "Brand Ambassadorship"]),
  message: z.string().min(10, "Please provide more details"),
  budget: z.number().min(500),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactForm() {
  const [budget, setBudget] = useState(2500);
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { budget: 2500 }
  });

  const onSubmit = (data: FormValues) => {
    console.log("Form Data:", { ...data, budget });
    alert("Proposal Sent Successfully!");
  };

  return (
    <section id="contact" className="py-24 px-6 bg-primary text-white">
      <div className="max-w-4xl mx-auto">
        <header className="mb-16 text-center">
          <h2 className="text-4xl md:text-6xl font-serif mb-6">Start a <span className="italic">Collaboration</span></h2>
          <p className="text-white/60 uppercase tracking-widest text-sm">Define your project. Elevate your brand.</p>
        </header>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-2">
              <label className="uppercase tracking-widest text-xs font-bold text-white/40">Brand Name</label>
              <input 
                {...register("brandName")}
                className="w-full bg-transparent border-b border-white/20 py-4 focus:border-white outline-none transition-colors"
                placeholder="VALENTINO BEAUTY"
              />
              {errors.brandName && <p className="text-accent text-xs mt-1">{errors.brandName.message}</p>}
            </div>

            <div className="space-y-2">
              <label className="uppercase tracking-widest text-xs font-bold text-white/40">Email Address</label>
              <input 
                {...register("email")}
                className="w-full bg-transparent border-b border-white/20 py-4 focus:border-white outline-none transition-colors"
                placeholder="partnerships@brand.com"
              />
              {errors.email && <p className="text-accent text-xs mt-1">{errors.email.message}</p>}
            </div>
          </div>

          <div className="space-y-2">
            <label className="uppercase tracking-widest text-xs font-bold text-white/40">Campaign Type</label>
            <select 
              {...register("campaignType")}
              className="w-full bg-transparent border-b border-white/20 py-4 focus:border-white outline-none transition-colors appearance-none"
            >
              <option className="text-black" value="Global Campaign">Global Campaign</option>
              <option className="text-black" value="Sponsored Tutorial">Sponsored Tutorial</option>
              <option className="text-black" value="Brand Ambassadorship">Brand Ambassadorship</option>
            </select>
          </div>

          <div className="space-y-8">
            <div className="flex justify-between items-end">
              <label className="uppercase tracking-widest text-xs font-bold text-white/40">Campaign Budget (USD)</label>
              <span className="text-3xl font-serif italic">${budget.toLocaleString()}{budget >= 5000 && "+"}</span>
            </div>
            <input 
              type="range"
              min="500"
              max="5000"
              step="100"
              value={budget}
              onChange={(e) => setBudget(parseInt(e.target.value))}
              className="w-full h-1 bg-white/20 appearance-none cursor-pointer accent-accent"
            />
            <div className="flex justify-between text-[10px] uppercase tracking-widest text-white/40">
               <span>$500</span>
               <span>$2,500</span>
               <span>$5,000+</span>
            </div>
          </div>

          <div className="space-y-2">
            <label className="uppercase tracking-widest text-xs font-bold text-white/40">Campaign Vision</label>
            <textarea 
              {...register("message")}
              rows={4}
              className="w-full bg-transparent border-b border-white/20 py-4 focus:border-white outline-none transition-colors resize-none"
              placeholder="Tell us about your creative goals..."
            />
            {errors.message && <p className="text-accent text-xs mt-1">{errors.message.message}</p>}
          </div>

          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-white text-primary py-6 uppercase tracking-[0.3em] font-bold hover:bg-accent hover:text-white transition-all duration-300"
          >
            Send Partnership Proposal
          </motion.button>
        </form>
      </div>
    </section>
  );
}
