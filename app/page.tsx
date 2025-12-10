"use client";

import Spacebubble from "@/components/Spacebubble";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
// import Link from "next/link";
import { Instagram, Linkedin, Github } from "lucide-react";

export default function Home() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-screen relative bg-black">
        <div className="absolute top-[30%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-50 pointer-events-none w-full px-4">
        </div>
      </div>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <div className="w-full h-screen relative">
      <Spacebubble />
      <div
        className="absolute top-[25%] left-8 md:left-24 z-50 w-full md:max-w-4xl px-4 text-left pointer-events-none"
        style={{ color: isDark ? '#ffffff' : '#000000' }}
      >
        <span className="text-lg md:text-xl font-mono mb-2 block opacity-80" style={{ color: isDark ? '#ffffff' : '#000000' }}>
          Hi, I am
        </span>
        <h1
          className="text-3xl sm:text-5xl md:text-7xl font-[family-name:var(--font-orbitron)] font-bold mb-6 transition-colors duration-300 drop-shadow-md whitespace-nowrap"
          style={{ color: isDark ? '#ffffff' : '#000000' }}
        >
          Mohammed Nadhil K N
        </h1>
        <p
          className="text-lg md:text-xl font-[family-name:var(--font-orbitron)] transition-colors duration-300 max-w-3xl drop-shadow-md opacity-90 mb-10 leading-relaxed"
          style={{ color: isDark ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.8)' }}
        >
          A <span className="font-bold">self-taught full stack developer</span>. studying new things , i have experience in working as team and individual , still learning and growing
        </p>

        <div className="pointer-events-auto">
          <div className="flex justify-start gap-6">
            <a
              href="https://www.instagram.com/nadhilkn_/"
              target="_self"
              rel="noopener noreferrer"
              className="transform transition-all duration-300 hover:scale-125 hover:rotate-6"
              style={{ color: isDark ? '#ffffff' : '#000000' }}
            >
              <Instagram size={32} />
            </a>
            <a
              href="https://www.linkedin.com/in/mohammed-nadhil-k-n/"
              target="_self"
              rel="noopener noreferrer"
              className="transform transition-all duration-300 hover:scale-125 hover:-rotate-6"
              style={{ color: isDark ? '#ffffff' : '#000000' }}
            >
              <Linkedin size={32} />
            </a>
            <a
              href="https://github.com/nadhil7"
              target="_self"
              rel="noopener noreferrer"
              className="transform transition-all duration-300 hover:scale-125 hover:rotate-6"
              style={{ color: isDark ? '#ffffff' : '#000000' }}
            >
              <Github size={32} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
