"use client"

import React, { createContext, useContext, useEffect, useState } from "react"

interface SimplifiedModeContextType {
    isSimplified: boolean
    setIsSimplified: (enabled: boolean) => void
}

const SimplifiedModeContext = createContext<SimplifiedModeContextType | undefined>(undefined)

export function SimplifiedModeProvider({ children }: { children: React.ReactNode }) {
    const [isSimplified, setIsSimplifiedState] = useState(false)

    useEffect(() => {
        // Load from local storage on mount
        const saved = localStorage.getItem("nagrik-simplified-mode")
        if (saved === "true") {
            setIsSimplifiedState(true)
            document.documentElement.classList.add("simplified-mode")
        }
    }, [])

    const setIsSimplified = (enabled: boolean) => {
        setIsSimplifiedState(enabled)
        localStorage.setItem("nagrik-simplified-mode", String(enabled))
        if (enabled) {
            document.documentElement.classList.add("simplified-mode")
        } else {
            document.documentElement.classList.remove("simplified-mode")
        }
    }

    return (
        <SimplifiedModeContext.Provider value={{ isSimplified, setIsSimplified }}>
            {children}
        </SimplifiedModeContext.Provider>
    )
}

export function useSimplifiedMode() {
    const context = useContext(SimplifiedModeContext)
    if (context === undefined) {
        throw new Error("useSimplifiedMode must be used within a SimplifiedModeProvider")
    }
    return context
}
