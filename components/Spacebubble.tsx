"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Particles from "../ui/Newone";

interface SpacebubbleProps {
  isMotionEnabled?: boolean;
  isMouseInteractionEnabled?: boolean;
}

function Spacebubble({
  isMotionEnabled = true,
  isMouseInteractionEnabled = true
}: SpacebubbleProps) {
  const { theme, resolvedTheme } = useTheme();
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
      <Particles
        key={theme}
        particleColors={isDark ? ["#ffffff", "#ffffff"] : ["#000000", "#000000"]}
        particleCount={200}
        particleSpread={10}
        speed={isMotionEnabled ? 0.1 : 0}
        particleBaseSize={100}
        moveParticlesOnHover={isMouseInteractionEnabled}
        alphaParticles={false}
        disableRotation={false}
      />
    </div>
  );
}

export default Spacebubble;
