"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Spacebubble from "./Spacebubble";
import CursorTrail from "../ui/CursorTrail";
import { MousePointer2, PauseCircle, PlayCircle, MousePointerClick } from "lucide-react";

export default function BackgroundWrapper() {
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [isMotionEnabled, setIsMotionEnabled] = useState(true);
    const [isMouseInteractionEnabled, setIsMouseInteractionEnabled] = useState(true);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const isDark = resolvedTheme === "dark";

    return (
        <>
            <div className="fixed inset-0 z-0">
                <Spacebubble
                    isMotionEnabled={isMotionEnabled}
                    isMouseInteractionEnabled={isMouseInteractionEnabled}
                />
                <CursorTrail />
            </div>

            {/* Controls */}
            <div className="fixed bottom-4 right-4 z-50 hidden md:flex flex-col gap-2 p-3 rounded-xl backdrop-blur-md border transition-all duration-300 pointer-events-auto"
                style={{
                    background: isDark ? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255,0.5)',
                    borderColor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'
                }}>

                {/* Motion Toggle */}
                <button
                    onClick={() => setIsMotionEnabled(!isMotionEnabled)}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg transition-all hover:bg-opacity-20 hover:scale-105"
                    style={{ color: isDark ? '#ffffff' : '#000000' }}
                    title={isMotionEnabled ? "Stop Motion" : "Start Motion"}
                >
                    {isMotionEnabled ? <PauseCircle size={20} /> : <PlayCircle size={20} />}
                    <span className="text-xs font-mono hidden md:inline">Motion</span>
                </button>

                {/* Interaction Toggle */}
                <button
                    onClick={() => setIsMouseInteractionEnabled(!isMouseInteractionEnabled)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all hover:bg-opacity-20 hover:scale-105 ${!isMouseInteractionEnabled ? 'opacity-50' : ''}`}
                    style={{ color: isDark ? '#ffffff' : '#000000' }}
                    title={isMouseInteractionEnabled ? "Disable Interaction" : "Enable Interaction"}
                >
                    {isMouseInteractionEnabled ? <MousePointer2 size={20} /> : <MousePointerClick size={20} />}
                    <span className="text-xs font-mono hidden md:inline">Interact</span>
                </button>
            </div>
        </>
    );
}
