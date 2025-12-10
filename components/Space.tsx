"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Antigravity from "../ui/Antigravity";

export default function Backgrounds() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        position: "relative",
        background: isDark ? "#000000" : "#ffffff",
        transition: "background 0.3s ease",
      }}
    >
      <Antigravity
        count={300}
        magnetRadius={6}
        ringRadius={7}
        waveSpeed={0.4}
        waveAmplitude={1}
        particleSize={1.5}
        lerpSpeed={0.05}
        color={isDark ? "#FF9FFC" : "#000000"}
        autoAnimate={true}
        particleVariance={1}
      />
    </div>
  );
}
