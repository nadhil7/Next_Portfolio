"use client";

import { useTheme } from "next-themes";
import { useEffect, useRef } from "react";

interface Point {
    x: number;
    y: number;
}

export default function CursorTrail() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { resolvedTheme } = useTheme();

    // Trail state
    const trail = useRef<Point[]>([]);
    const mouse = useRef({ x: 0, y: 0 });
    const cursor = useRef({ x: 0, y: 0 }); // Smooth interpolated position
    const hasMoved = useRef(false);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const initCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        window.addEventListener("resize", initCanvas);
        initCanvas();

        const handleMouseMove = (e: MouseEvent) => {
            mouse.current = { x: e.clientX, y: e.clientY };
            if (!hasMoved.current) {
                // Instantly snap on first move to avoid flying in from 0,0
                hasMoved.current = true;
                cursor.current = { x: e.clientX, y: e.clientY };
                for (let i = 0; i < 50; i++) { // Pre-fill trail (Longer tail)
                    trail.current.push({ x: e.clientX, y: e.clientY });
                }
            }
        };
        window.addEventListener("mousemove", handleMouseMove, { passive: true });

        const lerp = (start: number, end: number, factor: number) => {
            return start + (end - start) * factor;
        };

        const animation = () => {
            if (!canvas || !ctx) return;

            // 1. Smoothly interpolate cursor towards mouse (LERP)
            cursor.current.x = lerp(cursor.current.x, mouse.current.x, 0.2);
            cursor.current.y = lerp(cursor.current.y, mouse.current.y, 0.2);

            // 2. Add current status of cursor to trail
            trail.current.shift(); // Remove oldest
            trail.current.push({ x: cursor.current.x, y: cursor.current.y }); // Add newest

            // 3. Draw
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // If hasn't moved, don't draw anything yet
            if (!hasMoved.current) {
                requestAnimationFrame(animation);
                return;
            }

            const isDark = resolvedTheme === "dark";
            // Colors
            const leadColor = isDark ? "255, 255, 255" : "0, 0, 0";
            const trailColor = isDark ? "255, 255, 255" : "0, 0, 0"; // Can be distinct if we want

            // Draw Trail (Polyline)
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';

            // We draw segments so we can taper opacity
            for (let i = 0; i < trail.current.length - 1; i++) {
                const p1 = trail.current[i];
                const p2 = trail.current[i + 1];

                ctx.beginPath();
                ctx.moveTo(p1.x, p1.y);
                ctx.lineTo(p2.x, p2.y);

                // Normalize index 0..1
                const t = i / trail.current.length;
                // Opacity fades from 0 (tail) to 0.6 (head)
                const alpha = t * 0.6;
                // Width tapers from 1 (tail) to 4 (head)
                const width = (t * 3) + 1;

                ctx.lineWidth = width;
                ctx.strokeStyle = `rgba(${trailColor}, ${alpha})`;
                ctx.stroke();
            }

            // Draw Head (Star)
            ctx.beginPath();
            ctx.arc(cursor.current.x, cursor.current.y, 3, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${leadColor}, 1)`;

            // Glow
            ctx.shadowBlur = 15;
            ctx.shadowColor = `rgba(${leadColor}, 0.8)`;

            ctx.fill();
            ctx.shadowBlur = 0; // Reset

            requestAnimationFrame(animation);
        };

        const rafId = requestAnimationFrame(animation);

        return () => {
            window.removeEventListener("resize", initCanvas);
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(rafId);
        };
    }, [resolvedTheme]);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-[1]"
            style={{ mixBlendMode: resolvedTheme === 'dark' ? 'screen' : 'normal' }}
        />
    );
}
