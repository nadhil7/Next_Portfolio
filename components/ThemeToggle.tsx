"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
    const { resolvedTheme, setTheme } = useTheme()
    const mounted = React.useSyncExternalStore(
        () => () => undefined,
        () => true,
        () => false,
    )

    const isDark = resolvedTheme === "dark"

    return (
        <button
            type="button"
            onClick={(e) => {
                setTheme(isDark ? "light" : "dark");
                e.currentTarget.blur();
            }}
            className="theme-toggle"
            aria-label={mounted ? `Switch to ${isDark ? "light" : "dark"} mode` : "Toggle color theme"}
        >
            {mounted && isDark ? <Sun size={16} aria-hidden="true" /> : <Moon size={16} aria-hidden="true" />}
            <span className="sr-only">Toggle theme</span>
        </button>
    )
}
