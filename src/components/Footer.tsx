"use client";

import { Wifi, Battery, Zap } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-1 bg-cyber-black border-t border-neon-cyan/20 relative overflow-hidden h-8 flex items-center justify-center">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-cyan to-transparent opacity-30"></div>
      
      <div className="container mx-auto px-4 flex flex-row justify-between items-center gap-2 text-[9px] font-mono tracking-widest text-gray-500 uppercase w-full">
        
        <div className="flex items-center gap-2">
          <span className="w-1 h-1 rounded-full bg-neon-green animate-pulse"></span>
          <span className="hidden sm:inline">ONLINE</span>
        </div>

        <div className="text-center">
          <p>
            DEV <span className="text-neon-pink font-bold">PEDRO_QUEBLAS</span>
          </p>
        </div>

        <div className="flex items-center gap-2">
           <Zap size={8} className="text-neon-yellow" />
           <span className="hidden sm:inline">100%</span>
        </div>

      </div>
    </footer>
  );
}
