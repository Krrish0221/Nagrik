"use client"

import React, { createContext, useContext, useEffect, useState } from "react"

interface HighContrastContextType {
    isHighContrast: boolean
    setIsHighContrast: (enabled: boolean) => void
}

const HighContrastContext = createContext<HighContrastContextType | undefined>(undefined)

export function HighContrastProvider({ children }: { children: React.ReactNode }) {
    const [isHighContrast, setIsHighContrastState] = useState(false)

    useEffect(() => {
        // Load from local storage on mount
        const saved = localStorage.getItem("nagrik-high-contrast")
        if (saved === "true") {
            setIsHighContrastState(true)
            document.documentElement.classList.add("high-contrast")
        }
    }, [])

    const setIsHighContrast = (enabled: boolean) => {
        setIsHighContrastState(enabled)
        localStorage.setItem("nagrik-high-contrast", String(enabled))
        if (enabled) {
            document.documentElement.classList.add("high-contrast")
        } else {
            document.documentElement.classList.remove("high-contrast")
        }
    }

    return (
        <HighContrastContext.Provider value={{ isHighContrast, setIsHighContrast }}>
            {children}
        </HighContrastContext.Provider>
    )
}

export function useHighContrast() {
    const context = useContext(HighContrastContext)
    if (context === undefined) {
        throw new Error("useHighContrast must be used within a HighContrastProvider")
    }
    return context
}
