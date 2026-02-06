"use client"

import React, { createContext, useContext, useEffect, useState } from "react"

export type FontSize = "Small" | "Medium" | "Large"

interface FontSizeContextType {
    fontSize: FontSize
    setFontSize: (size: FontSize) => void
}

const FontSizeContext = createContext<FontSizeContextType | undefined>(undefined)

export function FontSizeProvider({ children }: { children: React.ReactNode }) {
    const [fontSize, setFontSizeState] = useState<FontSize>("Medium")

    useEffect(() => {
        // Load from local storage on mount
        const savedSize = localStorage.getItem("nagrik-font-size") as FontSize
        if (savedSize && ["Small", "Medium", "Large"].includes(savedSize)) {
            setFontSizeState(savedSize)
            applyFontSize(savedSize)
        }
    }, [])

    const setFontSize = (size: FontSize) => {
        setFontSizeState(size)
        localStorage.setItem("nagrik-font-size", size)
        applyFontSize(size)
    }

    const applyFontSize = (size: FontSize) => {
        const root = document.documentElement
        switch (size) {
            case "Small":
                root.style.fontSize = "14px"
                break
            case "Medium":
                root.style.fontSize = "16px"
                break
            case "Large":
                root.style.fontSize = "18px"
                break
        }
    }

    return (
        <FontSizeContext.Provider value={{ fontSize, setFontSize }}>
            {children}
        </FontSizeContext.Provider>
    )
}

export function useFontSize() {
    const context = useContext(FontSizeContext)
    if (context === undefined) {
        throw new Error("useFontSize must be used within a FontSizeProvider")
    }
    return context
}
